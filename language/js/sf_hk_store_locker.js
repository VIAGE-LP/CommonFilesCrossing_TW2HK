var $ = jQuery;
// 定義一個資料結構
let SF_HK_STORE_LOCKER = {
    sf_store: {
        sort: [],
        map: {}
    },
    sf_locker: {
        sort: [],
        map: {}
    }
}
// 透過ajax去取資料
$.getJSON(SETTING_JS_URL + "/sf_hk_store_locker.json", function (res, status) {
    // 如果有取到的話
    if (status == 'success') {
        // 進行格式調整
        res[0].sf_store.forEach(({area, region, code, address, hour_weekday, hour_holiday}, index) => {
            if (!SF_HK_STORE_LOCKER.sf_store.map[area]) {
                SF_HK_STORE_LOCKER.sf_store.sort.push(area)
                SF_HK_STORE_LOCKER.sf_store.map[area] = {
                    sort: [],
                    map: []
                }
            }
            if (!SF_HK_STORE_LOCKER.sf_store.map[area].map[region]) {
                SF_HK_STORE_LOCKER.sf_store.map[area].sort.push(region)
                SF_HK_STORE_LOCKER.sf_store.map[area].map[region] = []
            }
            SF_HK_STORE_LOCKER.sf_store.map[area].map[region].push({ code, address, hour_weekday, hour_holiday });
        })
        res[0].sf_locker.forEach(({area, region, code, address, hour_weekday, hour_holiday}, index) => {
            if (!SF_HK_STORE_LOCKER.sf_locker.map[area]) {
                SF_HK_STORE_LOCKER.sf_locker.sort.push(area)
                SF_HK_STORE_LOCKER.sf_locker.map[area] = {
                    sort: [],
                    map: []
                }
            }
            if (!SF_HK_STORE_LOCKER.sf_locker.map[area].map[region]) {
                SF_HK_STORE_LOCKER.sf_locker.map[area].sort.push(region)
                SF_HK_STORE_LOCKER.sf_locker.map[area].map[region] = []
            }
            SF_HK_STORE_LOCKER.sf_locker.map[area].map[region].push({ code, address, hour_weekday, hour_holiday });
        })
    } else {
        // 如果沒取到的話
        console.log("error");
        return false;
    }
})

let dialog_sf_store = `
<div id="dialogSF" style="display:none;position:fixed;z-index:1;-webkit-overflow-scrolling:touch;padding: 20px 10px;box-sizing: border-box;">
    <img src="${SETTING_IMAGE_URL}/close.png" class="btnCloseLayer" onclick="dialogClose()" style="cursor:pointer;position:absolute;right:3px;top:3px;z-index:10;width:30px;border-radius:50%;">
    <h1></h1>
    <form>
        <select id="sf_location_select_sf_store" class="select02">
            <option value="">--選擇--</option>
        </select>
        <select id="sf_sub_location_select_sf_store" class="select02">
            <option value="">--選擇--</option>
        </select>
    </form>
    <table id="sf_list_table">
        <thead>
            <tr>
                <th class="sf_list_table_addr" style="width:60%">地址</th>
                <th class="sf_list_table_workday">平日</th>
                <th class="sf_list_table_holiday">假日</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>
`
let dialog_sf_locker = `
<div id="dialogSF" style="display:none;position:fixed;z-index:1;-webkit-overflow-scrolling:touch;padding: 20px 10px;box-sizing: border-box;">
    <img src="${SETTING_IMAGE_URL}/close.png" class="btnCloseLayer" onclick="dialogClose()" style="cursor:pointer;position:absolute;right:3px;top:3px;z-index:10;width:30px;border-radius:50%;">
    <h1></h1>
    <form>
        <select id="sf_location_select_sf_locker" class="select02">
            <option value="">--選擇--</option>
        </select>
        <select id="sf_sub_location_select_sf_locker" class="select02">
            <option value="">--選擇--</option>
        </select>
    </form>
    <table id="sf_list_table">
        <thead>
            <tr>
                <th class="sf_list_table_addr" style="width:60%">地址</th>
                <th class="sf_list_table_workday">平日</th>
                <th class="sf_list_table_holiday">假日</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>
`

window.addEventListener("load", function () {
    addReceive();
})

let addr = {
    sf_store_addr: null,
    sf_store_pref: null,
    sf_store_city: null,
    sf_locker_addr: null,
    sf_locker_pref: null,
    sf_locker_city: null
}

// 增加收貨方式
function addReceive () {
    if (document.getElementById('tr_zipCode') == null) {
        setTimeout(addReceive, 1000);
        return;
    }
    // 在郵遞區號的下面新增一格
    $("#lp_form #tr_zipCode").after(`
        <div id="tr_sf_hk" class="orderItem">
            <div class="leftContents">
                <label id="langSexTitle" class="titlefont">取貨方式
                    <span class="redIcon">必填</span>
                </label>
            </div>
            <div class="rightContents">
                <input type="radio" name="receive" id="receivingMethod_home" value="0" checked/>
                <label for="receivingMethod_home" class="checkStyle">宅配　</label>
                <input type="radio" name="receive" id="receivingMethod_sf_store" value="1" />
                <label for="receivingMethod_sf_store" class="checkStyle">順豐站　</label>
                <input type="radio" name="receive" id="receivingMethod_sf_locker" value="2" />
                <label for="receivingMethod_sf_locker" class="checkStyle">智能櫃</label>
            </div>
        </div>
    `);
    // 當切換配送方式時，要做的事
    $("#lp_form #tr_sf_hk input[name='receive']").change(function () {
        // 關閉Dialog
        dialogClose();
        let receive_id = $("#lp_form #tr_sf_hk input[name=receive]:checked").val();
        // 把所有的按鈕移除
        $("#lp_form .postalcodeBtn").remove();
        $("#lp_form #tr_addr br").remove();
        // 讓地址輸入框為空值
        $("#lp_form input[name=addr]").val("")
        switch (receive_id) {
            case "1":
                // 順豐站，如果資料集內的地址沒有值
                if (addr.sf_store_addr == null) {
                    // 當選到順豐站時，新增順豐站的按鈕，並把地址隱藏
                    $("#lp_form #tr_addr .rightContents").prepend(`<a class="postalcodeBtn" onclick="dialogOpen('sf_store')" id="sf_store_map">順豐站</a><br>`) 
                    $("#lp_form select[name=dialogCity1]").hide()
                    $("#lp_form select[name=pref]").hide()
                    $("#lp_form input[name=addr]").hide()
                } else {
                    $("#lp_form #tr_addr .rightContents").prepend(`<a class="postalcodeBtn" onclick="dialogOpen('sf_store')" id="sf_store_map">順豐站</a><br><br>`) 
                    // 移除原本地區的 香港九龍新界選項
                    $("#lp_form select[name=dialogCity1] option").remove()
                    // 在地區選項加新增 香港島-香港仔
                    $("#lp_form #dialogCity1").append(`<option>${addr.sf_store_pref} - ${addr.sf_store_city}</option>`)
                    // 地址值為順豐站的值
                    $("#lp_form #addr").val(addr.sf_store_addr)
                    $("#lp_form #dialogCity1").attr("readonly", true)
                    $("#lp_form #addr").attr("readonly", true)
                    $("#lp_form select[name=dialogCity1]").show()
                    $("#lp_form input[name=addr]").show()
                }
                break;
            case "2":
                // 智能櫃，如果資料集內的地址沒有值
                if (addr.sf_locker_addr == null) {
                    // 當選到智能櫃時，新增順豐站的按鈕，並把地址隱藏
                    $("#lp_form #tr_addr .rightContents").prepend(`<a class="postalcodeBtn" onclick="dialogOpen('sf_locker')" id="sf_locker_map">智能櫃</a><br>`)
                    $("#lp_form select[name=dialogCity1]").hide()
                    $("#lp_form select[name=pref]").hide()
                    $("#lp_form input[name=addr]").hide()
                } else {
                    // 移除原本地區的 香港九龍新界選項
                    $("#lp_form #tr_addr .rightContents").prepend(`<a class="postalcodeBtn" onclick="dialogOpen('sf_locker')" id="sf_locker_map">智能櫃</a><br><br>`)
                    $("#lp_form select[name=dialogCity1] option").remove()
                    // 在地區選項加新增 香港島-香港仔
                    $("#lp_form #dialogCity1").append(`<option>${addr.sf_locker_pref} - ${addr.sf_locker_city}</option>`)
                    // 地址值為智能櫃的值
                    $("#lp_form #addr").val(addr.sf_locker_addr)
                    $("#lp_form #dialogCity1").attr("readonly", true)
                    $("#lp_form #addr").attr("readonly", true)
                    $("#lp_form select[name=dialogCity1]").show()
                    $("#lp_form input[name=addr]").show()
                }
                break;
            default:
                // 宅配
                // 若有白爛客戶是選順豐站 或 智能櫃，而導致選項有更改，先將全部刪除，再還元原本設定
                $("#lp_form select[name=dialogCity1] option").remove()
                $("#lp_form select[name=dialogCity1]").append(`<option value="香港島">香港島</option><option value="九龍">九龍</option><option value="新界">新界</option>`)
                $("#lp_form input[name=addr]").val("")
                $("#lp_form select[name=dialogCity1]").attr("readonly", false)
                $("#lp_form input[name=addr]").attr("readonly", false)
                $("#lp_form select[name=dialogCity1]").show()
                $("#lp_form input[name=addr]").show()
            }
    })
}


function dialogOpen (target) {
    // 開啟Dialog，先將之前的東西全刪除
    $("#dialogSF").remove();
    // 把要的東西塞入
    target === "sf_locker" ? $(dialog_sf_locker).appendTo("#tr_addr > .rightContents") : $(dialog_sf_store).appendTo("#tr_addr > .rightContents");
    target === "sf_locker" ? $("#dialogSF h1").text("順豐智能櫃") : $("#dialogSF h1").text("順豐站")
    // 讓dialog顯示，並將所有選項還元
    $("#dialogSF").show();
    $(".deleteOption").remove()
    $(".deleteSubOption").remove()
    $("#sf_list_table tbody tr").remove()
    // 設定dialog樣式
    dialogStyle();
    dialogListGenerate(target)
}

function dialogListGenerate (target) {
    // 智能櫃，加入地區選項 香港島、九龍、新界…
    SF_HK_STORE_LOCKER[target].sort.forEach(function (item) {
        $("#sf_location_select_"+target).append(`<option value="${item}" class="deleteOption">${item}</option>`)
    });
    // 如果已經選擇過，則直接套入
    if (addr[target+"_pref"] !== null) {
        $("#sf_location_select_"+target).val(addr[target+"_pref"])
    }
    // 當地區更動過後，塞入區域 香港仔、旺仔…
    $("#sf_location_select_"+target).change(function () {
        addr[target+"_pref"] = $("#sf_location_select_"+target).val()
        $("#sf_sub_location_select_"+target+" .deleteSubOption").remove()
        $("#sf_list_table tbody tr").remove()
        $("#sf_sub_location_select_"+target).focus()
        SF_HK_STORE_LOCKER[target].map[addr[target+"_pref"]].sort.forEach(function (item) {
            $("#sf_sub_location_select_"+target).append(`<option value="${item}" class="deleteSubOption">${item}</option>`)
        })
    })
    // 如果已經選擇過，將資料套入
    if (addr[target+"_city"] !== null) {
        $("#sf_sub_location_select_"+target+" .deleteSubOption").remove()
        $("#sf_list_table tbody tr").remove()
        $("#sf_sub_location_select_"+target).focus()
        SF_HK_STORE_LOCKER[target].map[addr[target+"_pref"]].sort.forEach(function (item) {
            $("#sf_sub_location_select_"+target).append(`<option value="${item}" class="deleteSubOption">${item}</option>`)
        })
        $("#sf_sub_location_select_"+target).val(addr[target+"_city"])
        $("#sf_list_table tbody tr").remove()
        SF_HK_STORE_LOCKER[target].map[addr[target+"_pref"]].map[addr[target+"_city"]].forEach(function (item) {
            $("#sf_list_table tbody").append(`
                <tr onclick="call_Close_Dialog('${item.code}', '${target}')" style="cursor: pointer;">
                    <td style="font-size: 13px; border-bottom: 1px solid #dee2e6; color: #535353; line-height: 2em;">${item.address}</td>
                    <td style="font-size: 12px; border-bottom: 1px solid #dee2e6; color: #646464; line-height: 2em;">${item.hour_weekday}</td>
                    <td style="font-size: 12px; border-bottom: 1px solid #dee2e6; color: #646464; line-height: 2em;">${item.hour_holiday}</td>
                </tr>
            `)
        })
    }
    // 如果第一次進來，選擇時，將資料塞入table
    $("#sf_sub_location_select_" + target).change(function () {
        addr[target + "_city"] = $("#sf_sub_location_select_" + target).val()
        $("#sf_list_table tbody tr").remove()
        SF_HK_STORE_LOCKER[target].map[addr[target + "_pref"]].map[addr[target + "_city"]].forEach(function (item) {
            $("#sf_list_table tbody").append(`
                <tr onclick="call_Close_Dialog('${item.code}', '${target}')" style="cursor: pointer;">
                    <td style="font-size: 13px; border-bottom: 1px solid #dee2e6; color: #535353; line-height: 2em;">${item.address}</td>
                    <td style="font-size: 12px; border-bottom: 1px solid #dee2e6; color: #646464; line-height: 2em;">${item.hour_weekday}</td>
                    <td style="font-size: 12px; border-bottom: 1px solid #dee2e6; color: #646464; line-height: 2em;">${item.hour_holiday}</td>
                </tr>
            `)
        })
    });
}

function call_Close_Dialog (code, target) {
    // 呼叫關閉Dialog
    // 將addr的格式改成 地址+點碼
    SF_HK_STORE_LOCKER[target]["map"][addr[target + "_pref"]]["map"][addr[target + "_city"]].forEach(function (item) {
        if (item.code == code) {
            addr[target + "_addr"] = item.address +" "+ item.code
        }
    })
    // 如果有資料，將資料塞入
    if (addr[target + "_addr"]) {
        $("#dialogCity1").show()
        $("#addr").show()
        $(".postalcodeBtn").css({
            "margin-bottom": "30px"
        })
        // 讓原本的資料刪除，並加入自己的資料
        $("#dialogCity1 option").remove()
        $("#dialogCity1").append(`<option>${addr[target + "_pref"]}</option>`)
        $("#addr").val(addr[target + "_addr"])
        $("#dialogCity1").attr("readonly", true)
        $("#addr").attr("readonly", true)
        dialogStyle()
        dialogClose()
    }
    
}

function dialogClose () {
    $('#dialogSF').remove();
}

function dialogStyle () {
    // dialog樣式設定
    if ($(window).width() >= 600) {
        var width = "600px";
        var SelectWith = "47%";
        var height = 600;
    } else {
        var width = "80%";
        var SelectWith = "98%";
        var height = 550;
    }
    
    var borderWidth = 10;
    $("#dialogSF").show();
    $("#dialogSF").css({
        "width": width,
        "height": height + 'px',
        "border": borderWidth + "px solid #646464",
        "left": "50%",
        "top": "50%",
        "transform": "translate(-50%,-50%)",
        "background-color": "#fff",
        "overflow-x": "hidden",
    });
    $("#dialogSF h1").css({
        "padding": "10px",
        "font-size": "28px",
        "font-weight": "500"
    })
    $("#dialogSF select").css({
        "width": SelectWith,
        "font-size": "1.1rem"
    })
    $("#dialogSF #sf_list_table").css({
        "width": "100%",
    });
    $("sf_list_table tbody tr").css({
        "transition": "all 0.3s",
        "cursor": "pointer"
    })
    $("sf_list_table tbody tr").hover(function () {
        $(this).css({
            "background": "#eee",
        })
    })
    // 當畫面尺寸調整中時
    $(window).resize(function () {
        if ($(window).width() > 600) {
            width = "600px";
            SelectWith = "47%";
        } else {
            width = "80%";
            SelectWith = "98%";
        };
        $("#dialogSF").css({
            "width": width,
            "left": "50%",
            "top": "50%",
        });
        $("#dialogSF select").css({
            "width": SelectWith,
        });
        
    })
}