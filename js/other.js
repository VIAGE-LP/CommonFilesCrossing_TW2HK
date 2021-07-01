/*
=====================================================
檔案名稱：Nextage様js共通ファイル
檔案用途：カスタマイズのjs、タグなどは既にここに書いてある
檔案建立日：2017.08.15
檔案建立人：Bella.Wu 

＊＊ps.增加或修改請一定要備註寫清楚做何用途，感謝＊＊
=====================================================
*/
var $ = jQuery;
jQuery(function ($) {
  var time = new Date().getTime();
  var API_script_LINK = 'https://www.cros.tw/lp/development/LP_API/API_HK.js?time=' + time;
  var API_script_TAG = $('<script>').prop('src', API_script_LINK);
  $('head').append(API_script_TAG);
});
//window.addEventListener('load', function() { addMomo1(); });
//window.addEventListener('load', function() { addMomo16(); });
DisableSize();
window.addEventListener("load", function () {
  addPolicy();
  edit_tr_HeadMemo();
  // if (location.pathname.indexOf('/hk/vghk/') > -1) {
  //   edit_tr_HeadMemo2();
  // } else {
  //   preOrderPromptInit();
  // }
  // addCardMomo();
  // edit_tr_HeadMemo3();

  preOrderPromptInitAll();
  
  // addPreOrderMemo();
});

/* ----------------------------------------------- 共通ポリシーテキスト ----------------------------------------------- */
var policyText =
  "本公司非常重視顧客的隱私權，期許能與顧客建立長久的信賴關係，為落實顧客之個人資料保護，本公司設計了下列個人資料保護方針及進行蒐集前之告知。\n\
\n\
一、蒐集之目的\n\
本公司只會使用您提供的個人資料用於建立顧客資料庫、商品寄送、金融交易及授權、商品推薦及行銷活動、市場分析、寄送活動情報與商品型錄、進行客戶服務等目的，除上述目的外不會利用您的個人資料。\n\
\n\
二、蒐集之個人資料類別\n\
1. 辨識個人者(代號C001)。例如：姓名、地址、行動電話、電子郵件等。\n\
2. 辨識財務者(代號C002)。例如：金融機構帳戶之號碼及姓名、信用卡或簽帳卡之號碼等。\n\
3. 個人描述(代號C011)。例如：年齡、性別、出生年月日、國籍等。\n\
4. 家庭情形(代號C021)。例如：婚姻狀況、有無子女等。\n\
\n\
三、個人資料利用之期間、地區、對象及方式\n\
1. 期間：本公司將於營運期間保存您的個人資料。\n\
2. 地區：您的個人資料將用於台灣、本公司海外總公司及關係企業所在地、本公司業務委外合作公司所在地、與本公司有業務往來之機構營業處所在地等地區。\n\
3. 對象及方式：您的個人資料可能以文件、電子媒體等方式提供給本公司、本公司海外總公司及關係企業、本公司業務委外合作公司，如：物流公司、印刷公司、廣告行銷公司等。本公司將以信件、電子郵件、電話等通訊方式通知您相關行銷活動及進行顧客服務。\n\
\n\
四、對於您提供之個人資料，您可隨時查詢或請求閱覽、請求補充或更正、請求停止蒐集、處理或利用、請求刪除；如有變更個人資料之需求，可以與本公司客服中心聯絡，我們將儘速進行處理。\n\
\n\
五、本公司只會將您的個人資料提供給執行業務之相關合作公司，不會提供給其他第三者。如您不願意提供真實且正確完整的個人資料，將可能導致無法成功訂購商品、無法寄送商品、無法獲得最新資訊以及相關優惠通知。\n\
\n\
六、本公司遵守在台灣當地對於顧客隱私的法律條規，本公司將妥善保存顧客提供的個人資料並盡力以合法程序保障所有顧客的個人資料之安全。如您對個人資料相關事項有任何疑問，可以與本公司客服中心聯絡，我們將儘速進行處理。\n\
\n\
以上內容若確認完畢且按下訂購鍵將視為同意本公司提供產品之規範與說明。";

/* ----------------------------------------------- 共通ポリシーテキスト ----------------------------------------------- */

/*----------------------------------------------function-----------------------------------------*/
//window.onload=function(){
function addPolicy() {
  if (document.getElementById("policy") == null) {
    setTimeout(addPolicy, 1000);
    return;
  }

  policyTitle = document.getElementById("policyTitle");
  policyTitle.innerText = "▼己詳閱並同意以下事項、確認訂購▼";

  policyContact = document.getElementById("policyText");
  policyContact.innerHTML = policyText;
  policyContact.style.display = "";

  //br   = document.createElement('br');
  //document.getElementById('submitBtn').appendChild(label);
  //document.getElementById('submitBtn').appendChild(text);
}

function addCardMomo() {
  if (document.getElementById("tr_paymentMethod") == null) {
    setTimeout(addCardMomo, 1000);
    return;
  }
  $ = jQuery;
  var rightContents = $("#tr_paymentMethod .rightContents");
  // rightContents.append('<br>');
  var contents = $('<span>目前因刷卡系統出現狀況，請使用其他付款方式，或稍後回到購物頁/聯絡客服訂購。造成不便深感抱歉！</span>').css({
    'color': 'red',
    'text-align': 'left',
    'line-height': '2',
    'display': 'block',
    'margin-top': '10px',
  });
  rightContents.append(contents);
}

// For Redmine #34200
function addPreOrderMemo() {
    $ = jQuery;
    if (document.getElementById("tr_timeId") == null) {
      setTimeout(addPreOrderMemo, 1000);
      return;
    }
  
    let memo = '<span style="color:red; line-height: 25px;">含預購商品訂單不適用指定到貨日期</span>';
    $('#shippingDate').after(memo);
}

//edit tr_HeadMemo
function edit_tr_HeadMemo() {
  if (document.getElementById("tr_HeadMemo") == null) {
    setTimeout(edit_tr_HeadMemo, 1000);
    return;
  }
  jQuery("#langHeadMemoTitle").html('注意事項');

  jQuery("#langHeadMemoBody").html('\
  ＜付款提示＞<br>\
  <span style="color: red;">頁面所標示港幣金額為新台幣換算後之大概金額，信用卡的扣款金額由您的銀行之新台幣匯率決定，貨到付款收款金額將按照物流公司(順豐)公布之匯率決定。</span>台幣金額為：<br>\
  1入組 1360新台幣 2入組 2380新台幣 3入組 2940新台幣<br>\
  4入組 3840新台幣 5入組 4700新台幣<br>\
  ＜退換貨說明＞<br>\
  本商品屬個人衛生用品，恕無法受理因個人因素之退換貨，敬請見諒。尺寸問題請您提前咨詢客服。<br>\
  ＜配送說明＞<br>\
  本商品係由日本HRC株式会社委託台灣娜珂黛肌美容事業有限公司從台灣發貨，<span style="color:red">若您因個人因素多次無法收貨而導致商品被退回，退款金額將扣除運費約50港幣(等於200元台幣)</span>，不便之處敬請見諒。<br>\
  本頁面所標示最快2日送達香港指收到出貨EMAIL後，最快2日可送達香港。<br>\
  【澳門地區】顧客也可以購買，請在地址欄選擇澳門，手提電話填寫澳門手機八位碼，不需國際區號。<br>\
  ＜選購指南＞<br>\
  <span style="color:red"> 如未出現顏色選項請重新整理網頁後，即可選購。</span><br>\
  ＜物流附加費＞<br>\
  <span style="color:red">有關送貨時收取的住宅或偏遠地區附加費，請參照物流業者連結；若您不希望支付物流附加費，可選擇自行到順豐站所取貨，並請於備註留言說明，謝謝。</span><br>\
  ＜購買數量限制＞<br>\
  為保證每位顧客都能體驗到商品，<span style="color:red">每位顧客每個月限購買10件</span>。超過的自動延期到下個月出貨或取消。<br>\
  ＜預購說明＞<br>\
  因近期商品熱銷，部分商品改為預購制，<span style="color:red">請看尺碼後是否有（預購）標示，購買預購商品將於7/8按預購順序出貨。<br>\
  若購買多入組中包含預購商品，將同預購商品發貨日一起發送。</span>預購商品恕不接受取消訂單。<br>')
  /*＜預購說明＞<br>\
  因近期商品熱銷，部分商品改為預購制，<span style="color:red">請看尺碼後是否有（預購）標示，購買預購商品將於6/30按預購順序出貨。<br>\
  若購買多入組中包含預購商品，將同預購商品發貨日一起發送。</span>預購商品恕不接受取消訂單。<br>*/
  /*＜預購說明＞<br>\
  因近期商品熱銷，部分商品改為預購制，<span style="color:red">請看尺碼後是否有（預購）標示，購買預購商品將於4/22按預購順序出貨。<br>\ 
  若購買多入組中包含預購商品，將同預購商品發貨日一起發送。</span>預購商品恕不接受取消訂單。<br>*/
}

//edit tr_HeadMemo2
function edit_tr_HeadMemo2() {
  if (document.getElementById("tr_HeadMemo") == null) {
    setTimeout(edit_tr_HeadMemo2, 1000);
    return;
  }
  jQuery("#langHeadMemoTitle").html('注意事項');

  jQuery("#langHeadMemoBody").html('\
      ＜退換貨說明＞<br>\
      本商品屬個人衛生用品，恕無法受理因個人因素之退換貨，敬請見諒。<br>\
      ＜配送說明＞<br>\
      本商品係由日本HRC株式会社委託台灣娜珂黛肌美容事業有限公司負責發貨，<font color="red">若您因個人因素多次無法收貨而導致商品被退回，退款金額將扣除運費約50港幣(等於200元台幣)</font>，不便之處敬請見諒。<br>\
      ＜選購指南＞<br>\
      <font color="red">如未出現顏色選項請重新整理網頁後，即可選購。</font><br>\
      ＜物流附加費＞<br>\
      <font color="red">有關送貨時收取的住宅或偏遠地區附加費，請參照物流業者連結；若您不希望支付物流附加費，可選擇自行到順豐站所取貨，並請於備註留言說明，謝謝。</font><br>');
      // <br>\
      // <預購說明><br>\
      // <font color="red">10/1起部分商品改為預購制，請看尺碼後是否有（預購）標識，購買（預購）商品將於10月底按預購順序出貨。若購買多入組中包含預購商品，將同預購商品發貨日一起發送。標識為（缺貨）的商品暫時無法預購。\
      // </font>
}

//edit tr_HeadMemo2
function edit_tr_HeadMemo3() {
  if (document.getElementById("tr_HeadMemo") == null) {
    setTimeout(edit_tr_HeadMemo3, 1000);
    return;
  }
  jQuery("#langHeadMemoTitle").html('注意事項');

  jQuery("#langHeadMemoBody").html('\
  ＜退換貨說明＞<br>\
  本商品屬個人衛生用品，恕無法受理因個人因素之退換貨，敬請見諒。<br>\
  ＜配送說明＞<br>\
  本商品係由日本HRC株式会社委託台灣娜珂黛肌美容事業有限公司負責發貨，<font color="red">若您因個人因素多次無法收貨而導致商品被退回，退款金額將扣除運費約50港幣(等於200元台幣)</font>，不便之處敬請見諒。<br>\
  ＜選購指南＞<br>\
  <font color="red">如未出現顏色選項請重新整理網頁後，即可選購。</font><br>\
  ＜物流附加費＞<br>\
  <font color="red">有關送貨時收取的住宅或偏遠地區附加費，請參照物流業者連結；若您不希望支付物流附加費，可選擇自行到順豐站所取貨，並請於備註留言說明，謝謝。</font><br>\
  ＜購買數量限制＞<br>\
  為保證每位顧客都能體驗到商品，<font color="red">每位顧客每個月限購買10件</font>。超過的自動延期到下個月出貨或取消。<br>')
  // ＜預購說明＞<br>\
  // 因近期商品熱銷，部分商品改為預購制，<font color="red">請看尺碼後是否有（預購）標示，購買預購商品將於9/30按預購順序出貨。</font><br>\
  // <font color="red">若購買多入組中包含預購商品，將同預購商品發貨日一起發送。</font>預購商品恕不接受取消訂單。

  // \
  // ＜預購說明＞<br>\
  // 因近期商品熱銷，部分商品改為預購制，<font color="red">請看尺碼後是否有（預購）標示，購買預購商品將於6/20按預購順序出貨。\
  // 若購買多入組中包含預購商品，將同預購商品發貨日一起發送。</font>預購商品恕不接受取消訂單。
    //   ＜預購說明＞<br>\
    //   因近期商品熱銷，部分商品改為預購制，<font color="red">請看尺碼後是否有（預購）標識，購買預購商品將於3月底按預購順序出貨。若購買多入組中包含預購商品，將同預購商品發貨日一起發送。</font>\
      // <br>\
      // <預購說明><br>\
      // <font color="red">10/1起部分商品改為預購制，請看尺碼後是否有（預購）標識，購買（預購）商品將於10月底按預購順序出貨。若購買多入組中包含預購商品，將同預購商品發貨日一起發送。標識為（缺貨）的商品暫時無法預購。\
      // </font>
}

function DisableSize() {
  if (document.getElementById("productSelection_A") == null) {
    setTimeout(DisableSize, 1000);
    return;
  }

  let allLockData = GetJsonData();

  var pathArray = location.pathname.split('/');
  while (pathArray.includes("")) {
    pathArray.splice(pathArray.indexOf(""), 1)
  }

  for (let urlIndex = 0; urlIndex < Object.keys(allLockData).length; urlIndex++) { // 判斷JSON中有多少URL需要設定，並跑迴圈個別調整。
    if (pathArray.includes(Object.keys(allLockData)[urlIndex])) { // 判斷使用者所在的頁面是否需要設定
      let allLockProductInURL = allLockData[Object.keys(allLockData)[urlIndex]];
      for (let productIndex = 0; productIndex < Object.keys(allLockProductInURL).length; productIndex++) {
        // 將該URL內的每個商品ID上鎖。
        if (jQuery('#' + Object.keys(allLockProductInURL)[productIndex]).length > 0) {
          jQuery('#' + Object.keys(allLockProductInURL)[productIndex]).parent().find(':input').attr('disabled', true);
          jQuery('#' + Object.keys(allLockProductInURL)[productIndex]).empty().append('<option value="0">' +
            allLockProductInURL[Object.keys(allLockProductInURL)[productIndex]].text + '<option>');
        } else {
          throw ('not found ' + Object.keys(allLockProductInURL)[productIndex]);
        }
      }
    }
  }

}

function GetJsonData() {
  let result;
  let rawFile = new XMLHttpRequest();
  let version = Date.now() * 1000 + Math.floor(Math.random() * 1000);
  rawFile.open("GET", 'https://viagebeautybra.com/hk/CommonFilesCrossing_TW2HK/js/lock.json?ver=' + version, false);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4) {
      if (rawFile.status === 200 || rawFile.status == 0) {
        let allText = rawFile.responseText;
        result = JSON.parse(allText);
      }
    }
  }
  rawFile.send(null);
  return result.LockedProduct;
}

function judgePriceTag() {
  if (!(jQuery('#resetSelectedProductBtn').length && jQuery('#productSelection_A .row').length)) {
    return void setTimeout(judgePriceTag, 500);
  }

  jQuery('#resetSelectedProductBtn').click(function () {
    clearPriceTagText();
  });
  jQuery('#productSelection_A .row').click(function () {
    var prdList = jQuery('#products').val();
    if (prdList) {
      prdList = JSON.parse(prdList);
      if (prdListAmountCal(prdList)) {
        addPriceTag();
      } else {
        clearPriceTagText();
      }
    } else {
      clearPriceTagText();
    }
  });
}

function addPriceTag() {
  if (!(jQuery('#priceShippingTag_right').length && jQuery('#priceShippingTag_bottom').length)) {
    jQuery('#amount_info_payment_amount').after('<span id="priceShippingTag_right">一入運費80元 二入以上免運</span>');
    jQuery('#tr_price').append('<span id="priceShippingTag_bottom">一入運費80元 二入以上免運</span>');
  } else {
    jQuery('#priceShippingTag_right').text('一入運費80元 二入以上免運');
    jQuery('#priceShippingTag_bottom').text('一入運費80元 二入以上免運');
  }
}

function clearPriceTagText() {
  jQuery('#priceShippingTag_right').text('');
  jQuery('#priceShippingTag_bottom').text('');
}

function prdListAmountCal(list) {
  var amount;
  if (list.length > 1) {
    return false;
  } else {
    amount = list.every(function (item) {
      return item.quantity == 1;
    });
    return amount ?
      true :
      false;
  }
}

function preOrderPromptInit() {
  // A_BL_S DARKBLUE S
  // A_BK_S BLACK S
  // A_RD_M PINK M
  // A_BK_M BLACK M
  let $ = jQuery;
  let preOrderProductList = ['#A_RD_L', '#A_BK_S', '#A_BL_L', '#A_BK_L', '#A_LP_L', '#A_LP_M', '#A_SL_L', '#A_BL_S', '#A_BK_M', '#A_RD_M', '#A_BL_M', '#A_BK_ML', '#A_BK_M', '#A_BL_ML', '#A_SL_M'];
  if (preOrderProductList.filter(item => $(item).length === 0).length) {
    return void setTimeout(preOrderPromptInit, 500);
  }
  preOrderProductList.forEach(item => {
    let $element = $('<span>', {
      text: '(預購)',
      style: 'color: red; position: absolute;'
    });
    $(item).parent().find('.size-title').append($element);
  });
}

function preOrderPromptInitAll() {
  // A_BL_S DARKBLUE S
  // A_BK_S BLACK S
  // A_RD_M PINK M
  // A_BK_M BLACK M
  let $ = jQuery;
  //let preOrderProductList = ['#A_SL_M','#A_RD_M','#A_RD_ML','#A_BL_SM','#A_BL_M','#A_LP_M','#A_SG_S','#A_HB_S','#A_HB_ML','#A_RD_SM','#A_LP_ML','#A_LP_L','#A_BK_M'];
  //依賴60794
  //let preOrderProductList = ['#A_AIR_S','#A_AIR_SM','#A_AIR_M','#A_AIR_ML','#A_AIR_L','#A_AIR_LL'];
  //依賴62246
  //let preOrderProductList = ['#A_AIR_S','#A_AIR_SM','#A_AIR_M','#A_AIR_L','#A_AIR_LL'];
  //依賴62414
  let preOrderProductList = ['#A_AIR_S','#A_AIR_SM','#A_AIR_M','#A_AIR_L'];
  // 如果匹配的項目(總和)數量 == 0, 會持續執行迴圈
  if (preOrderProductList.filter(item => $(item).length != 0).length == 0) {
    return void setTimeout(preOrderPromptInitAll, 500);
  }
  preOrderProductList.forEach(item => {
    let $element = $('<span>', {
      text: '(預購)',
      style: 'color: red; position: absolute;'
    });
    $(item).parent().find('.size-title').append($element);
  });
}

function callGA() {

  var strUrl = location.search;
  var getPara, ParaVal;
  var aryPara = [];

  if (strUrl.indexOf("?") != -1) {
    var getSearch = strUrl.split("?");
    getPara = getSearch[1].split("&");
    for (i = 0; i < getPara.length; i++) {
      ParaVal = getPara[i].split("=");
      aryPara.push(ParaVal[0]);
      aryPara[ParaVal[0]] = ParaVal[1];
    }
  }

  var ga = "<script>\n\window.dataLayer= window.dataLayer|| []\n\dataLayer.push({\n\'transactionId': '" + aryPara['order_id'] + "',\n\'transactionTotal': " + aryPara['payment_total'] + ",\n\'transactionShipping': 0,\n\'transactionProducts': [{\n\'sku': '" + aryPara['product_code'] + "',\n\'name': '" + aryPara['product_code'] + "',\n\'price': " + aryPara['payment_total'] + ",\n\'quantity': 1\n\}]\n\});\n\</script>";
  document.write(ga);

}


/* function addMomo16() {
  if (document.getElementById("tr_Memo16") == null) {
    setTimeout(addMomo16, 1000);
    return;
  }

  leftContents16 = document.getElementById("leftContents16");
  leftContents16.innerText = "";

  rightContents16 = document.getElementById("rightContents16");
  rightContents16.innerHTML =
    '<center>購買前請詳閱<a class="crosLink" href="javascript:void(0);" onclick="openWindow_ta();" return false;">個人資訊相關事項</a></center>';
} */

/*----------------------------------------------function-----------------------------------------*/

/*----------------------------------------------タグ設置-----------------------------------------*/

/*
function Name:Nextage専用GTM
function 用途:NextageのGoogle Tag Manager
*/

// 全部購物車要埋入的RT tag
function call_RT_tag() {
  // RT tag
  document.write(
    '<script src="https://resultplus.jp/fpc/cookie.js" id="resultplus"></script>\
    <script>\
    (function(){\
    var rp = new ResultplusItpCookie("resultplus");\
    })();\
    </script>'
  );
  //  End RT tag
}

// 全部購物車要埋入的GTM
function callGTM() {
  // Google Tag Manager
  document.write(
    '<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-PZC4KG2" \n\
			height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> \n\
			<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":\n\
			new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],\n\
			j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src= \n\
			"//www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);\n\
			})(window,document,"script","dataLayer","GTM-PZC4KG2");</script>'
  );
  //  End Google Tag Manager
}

// 指定購物車要埋入的GTM (#8812)
function callGTM2() {
  // Google Tag Manager
  document.write(
    '<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-5DPSCTG" \n\
			height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> \n\
			<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":\n\
			new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],\n\
			j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src= \n\
			"//www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);\n\
			})(window,document,"script","dataLayer","GTM-5DPSCTG");</script>'
  );
  //  End Google Tag Manager
}

// 指定購物車要埋入的GTA (#9041)
function callGTA() {
  // Global site tag (gtag.js) - Google Analytics
  document.write(
    "<script async src='https://www.googletagmanager.com/gtag/js?id=UA-120013759-1'></script> \n\
    <script> \n\
    window.dataLayer = window.dataLayer || []; \n\
    function gtag(){dataLayer.push(arguments);} \n\
    gtag('js', new Date()); \n\
    \n\
    gtag('config', 'UA-120013759-1', { 'optimize_id': 'GTM-5DB3G6L'}); \n\
    </script>"
  );
  //  End Global site tag (gtag.js) - Google Analytics
}

//hk購物車要埋入的GTM (#45205)
function callGTM_hk() {
  // Google Tag Manager
  document.write(
    '<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-5WX3NND" \n\
			height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> \n\
			<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({"gtm.start":\n\
			new Date().getTime(),event:"gtm.js"});var f=d.getElementsByTagName(s)[0],\n\
			j=d.createElement(s),dl=l!="dataLayer"?"&l="+l:"";j.async=true;j.src= \n\
			"//www.googletagmanager.com/gtm.js?id="+i+dl;f.parentNode.insertBefore(j,f);\n\
			})(window,document,"script","dataLayer","GTM-5WX3NND");</script>'
  );
  //  End Google Tag Manager
}

/*----------------------------------------------タグ設置-----------------------------------------*/

function linebreakIfSmallScreen() {
  if ($(window).width() < 640) {
    document.write("<br/>");
  }
}

function getJsonFromUrl() {
  var query = location.search.substr(1);
  var result = {};
  query.split("&").forEach(function (part) {
    var item = part.split("=");
    result[item[0]] = decodeURIComponent(item[1]);
  });
  return result;
}