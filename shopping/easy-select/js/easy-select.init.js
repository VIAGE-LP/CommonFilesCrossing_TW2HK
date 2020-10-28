jQuery(function () {
    var timer = setInterval(function(){
        var productCode = jQuery('#productCode');
        if (productCode.length > 0) {
            // 執行主程式
            main();
            // 清除計時器
            clearInterval(timer);
        }
    }, 500);

    // 主程式
    function main() {
        // 初始化快速選擇器
        easySelectInit();
        // 載入sessionStorage資料
        loadData();
        // 隱藏下拉選單
        jQuery('#productCode').attr('style', 'display: none !important').hide();
        // 自動選擇商品
        jQuery('[name="color-selector"], [name="size-selector"], [name="quantity-selector"]').change(function(){
            // 取得商品編號
            product_code = getProductCode();
            if (product_code != '') {
                // 自動選擇
                autoSelect(product_code);
                // 帶入商品名稱
                product_name = jQuery('#productCode > :selected').text();
                jQuery('[data-id="product_name"]').text(product_name);
                // 帶入價格
                jQuery('#productCode').change();
                // common.callSelectProduct();
            }
        });
        // 選擇超商取貨時, 紀錄資料
        jQuery('#langCvsMapBtn').click(function(){
            window.sessionStorage.setItem('ES_color', jQuery('[name="color-selector"]:checked').val());
            window.sessionStorage.setItem('ES_size', jQuery('[name="size-selector"]:checked').val());
            window.sessionStorage.setItem('ES_quantity', jQuery('[name="quantity-selector"]:checked').val());
            window.sessionStorage.setItem('ES_productName', jQuery('[data-id="product_name"]').text());
        });
    }
});

// 初始化快速選擇器
function easySelectInit() {
    easySelect = jQuery('<div>').addClass('easy-select');

    // 顏色選擇器
    colorSelector = jQuery('<div>').addClass('color-selector');
    title = jQuery('<div>').addClass('titlefont').text('請選擇顏色');
    title.appendTo(colorSelector);

    colorList = product_list['color-list'];
    for (i in colorList) {
        color = colorList[i];
        label = jQuery('<label>');
        radio = jQuery('<input>').attr({
            'type': 'radio',
            'name': 'color-selector'
        }).val(i);
        colorSelector.append(label.append(radio));
        radio.after(color.name);
    }

    // 大小選擇器
    sizeSelector = jQuery('<div>').addClass('size-selector');
    title = jQuery('<div>').addClass('titlefont').text('請選擇大小');
    title.appendTo(sizeSelector);

    sizeList = colorList[i]['size-list'];
    for (j in sizeList) {
        size = sizeList[j];
        label = jQuery('<label>');
        radio = jQuery('<input>').attr({
            'type': 'radio',
            'name': 'size-selector'
        }).val(j);
        sizeSelector.append(label.append(radio));
        radio.after(size.name)
    }

    // 數量選擇器
    quantitySelector = jQuery('<div>').addClass('quantity-selector');
    title = jQuery('<div>').addClass('titlefont').text('請選擇數量');
    title.appendTo(quantitySelector);

    quantityList = sizeList[j]['quantity-list'];
    for (k in quantityList) {
        quantity = quantityList[k];
        label = jQuery('<label>');
        radio = jQuery('<input>').attr({
            'type': 'radio',
            'name': 'quantity-selector'
        }).val(k);
        quantitySelector.append(label.append(radio));
        radio.after(quantity.name)
    }
    
    // 將選擇器放到表單
    colorSelector.appendTo(easySelect);
    sizeSelector.appendTo(easySelect);
    quantitySelector.appendTo(easySelect);

    // 選中商品
    product_result = jQuery('<div>');
    product_result.append(jQuery('<span>').addClass('titlefont').text('您選擇的商品：'));
    product_result.append(jQuery('<span>').attr('data-id', 'product_name'));
    product_result.appendTo(easySelect);

    easySelect.prependTo('#tr_productCode > .rightContents');
}

// 載入sessionStorage資料
function loadData() {
    var color = window.sessionStorage.getItem('ES_color');
    var size = window.sessionStorage.getItem('ES_size');
    var quantity = window.sessionStorage.getItem('ES_quantity');
    var product_name = window.sessionStorage.getItem('ES_productName');

    jQuery('[name="color-selector"][value="' + color + '"]').prop('checked', true);
    jQuery('[name="size-selector"][value="' + size + '"]').prop('checked', true);
    jQuery('[name="quantity-selector"][value="' + quantity + '"]').prop('checked', true);
    if (color != null && size != null && quantity != null && product_name != null) {
        jQuery('[data-id="product_name"]').text(product_name);
    }
}

// 自動選擇商品
function autoSelect(product_code) {
    colorSelector = jQuery('[name="color-selector"]');
    sizeSelector = jQuery('[name="size-selector"]');
    quantitySelector = jQuery('[name="quantity-selector"]');
    if (colorSelector.is(':checked') == false ||
        sizeSelector.is(':checked') == false ||
        quantitySelector.is(':checked') == false) {
            return false;
    }

    jQuery('#productCode').find('option[value="' + product_code + '"]').prop('selected', true);
}

// 取得商品編號
function getProductCode() {
    // 取得商品編號
    color = jQuery('[name="color-selector"]:checked').val();
    size = jQuery('[name="size-selector"]:checked').val();
    quantity = jQuery('[name="quantity-selector"]:checked').val();

    // 防呆
    if (color == null ||
        size == null ||
        quantity == null) {
            return '';
    }

    product_code = product_list['color-list'][color]['size-list'][size]['quantity-list'][quantity]['product_code'];
    return product_code;
}