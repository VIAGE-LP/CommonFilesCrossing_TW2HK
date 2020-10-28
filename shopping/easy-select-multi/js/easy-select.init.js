jQuery(function () {
	var timer = setInterval(function () {
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
		jQuery('.easy-select [name*="-selector"]').change(function () {
			//
			setSelectQuantity();
			// 取得商品編號
			product_code = getProductCode();
			if (product_code != '') {
				// 自動選擇
				jQuery('#productCode').val(product_code);
				// 帶入商品名稱
				product_name = jQuery('#productCode > :selected').text();
				jQuery('[data-id="product_name"]').text(product_name);
				// 帶入價格
				jQuery('#productCode').change();
				// common.callSelectProduct();
			} else {
				jQuery('#productCode').val('');
				jQuery('[data-id="product_name"]').text('');
				jQuery('#productCode').change();
			}
		});
		// 選擇超商取貨時, 紀錄資料
		jQuery('#langCvsMapBtn').click(function () {
			for (key in EASY_OPTION_LIST) {
				mainlist = EASY_OPTION_LIST[key];

				if (mainlist.type == 'radio') {
					window.sessionStorage.setItem('ES_' + key, jQuery('[name="' + key + '-selector"]:checked').val());
				} else if (mainlist.type == 'select') {
					window.sessionStorage.setItem('ES_' + key, jQuery('[name="' + key + '-selector"]').val());
				}
			}
			window.sessionStorage.setItem('ES_productName', jQuery('[data-id="product_name"]').text());
		});
	}
});

// 初始化快速選擇器
function easySelectInit() {
	easySelect = jQuery('<div>').addClass('easy-select');

	for (key in EASY_OPTION_LIST) {
		mainlist = EASY_OPTION_LIST[key];

		selector = jQuery('<div>').addClass(key + '-selector');

		// Label
		title = jQuery('<div>').addClass('titlefont').text(mainlist.text);
		title.appendTo(selector);
		itemlist = mainlist['list'];

		if (mainlist.type == 'radio') {
			title.appendTo(easySelect);
			for (i in itemlist) {
				item = itemlist[i];
				itemId = key + '-selector' + i;
				label = jQuery('<label>').addClass('checkStyle').attr('for', itemId);
				label.append(item.name);
				radio = jQuery('<input>').attr({
					'type': 'radio',
					'name': key + '-selector',
					'id': itemId
				}).val(i);
				span = jQuery('<span>').css('margin-right', '15px');

				radio.appendTo(easySelect);
				label.appendTo(easySelect);
				span.appendTo(easySelect);
			}
		} else if (mainlist.type == 'select') {
			select = jQuery('<select>').attr({
				'name': key + '-selector',
				'class': 'select04'
			});
			for (i in itemlist) {
				item = itemlist[i];
				option = new Option(item.name, i);
				select.append(option);
			}
			select.appendTo(selector);
			selector.appendTo(easySelect);
		} else if (mainlist.type == 'label') {
			label = jQuery('<div>').addClass('titlefont4').text(mainlist.text);
			label.appendTo(selector);
			label.appendTo(easySelect);
		}
	}

	// clear button	
	div_clear = jQuery('<div>').css('margin-top', '10px');
	var btn = jQuery('<button>', {
		text: '重新選擇',
		class: 'titlefont',
		click: function () {
			event.preventDefault();
			resetEZselect();
		}
	});
	btn.css('padding', '5px 80px');
	btn.css('background', '#FFF5B4');
	btn.css('border', 'none');
	div_clear.append(btn);
	div_clear.appendTo(easySelect);

	// 選中商品
	product_result = jQuery('<div>');
	product_result.append(jQuery('<span>').addClass('titlefont').text('您選擇的商品：'));
	product_result.append(jQuery('<span>').attr('data-id', 'product_name'));
	product_result.appendTo(easySelect);
	easySelect.prependTo('#tr_productCode > .rightContents');
}

// 載入sessionStorage資料
function loadData() {
	for (key in EASY_OPTION_LIST) {
		mainlist = EASY_OPTION_LIST[key];

		var itemVal = window.sessionStorage.getItem('ES_' + key);
		if (itemVal != null) {
			if (mainlist.type == 'radio') {
				jQuery('[name="' + key + '-selector"][value="' + itemVal + '"]').prop('checked', true);
			} else if (mainlist.type == 'select') {
				jQuery('[name="' + key + '-selector"]').val(itemVal);
			}
		}
	}
	var product_name = window.sessionStorage.getItem('ES_productName');
	if (product_name != undefined) {
		jQuery('[data-id="product_name"]').text(product_name);
	}
}

// 自動選擇商品
function autoSelect(product_code) {
	for (key in EASY_OPTION_LIST) {
		mainlist = EASY_OPTION_LIST[key];

		selector = jQuery('[name="' + key + '-selector"]');
		if (mainlist.type == 'radio') {
			if (selector.is(':checked') == false) return false;
		} else if (mainlist.type == 'select') {
			if (selector.val() == '' || selector.val() == '0') return false;
		}
	}

	jQuery('#productCode').find('option[value="' + product_code + '"]').prop('selected', true);
}

function resetEZselect() {
	for (key in EASY_OPTION_LIST) {
		mainlist = EASY_OPTION_LIST[key];

		selector = jQuery('[name="' + key + '-selector"]');
		if (mainlist.type == 'radio') {
			selector.prop('checked', false);
		} else if (mainlist.type == 'select') {
			selector.val(0);
		}
	}
	jQuery('.easy-select [name*="-selector"]').change();
};

// 取得商品編號
function getProductCode() {
	product_key = '';
	for (key in EASY_OPTION_LIST) {
		mainlist = EASY_OPTION_LIST[key];

		product_key += mainlist.key;
		if (mainlist.type == 'radio') {
			product_key += jQuery('[name="' + key + '-selector"]:checked').val();
		} else if (mainlist.type == 'select') {
			product_key += jQuery('[name="' + key + '-selector"]').val();
		}
	}

	// 防呆
	if (EASY_OPTION_PRODUCT_LIST[product_key] == undefined) return '';

	return EASY_OPTION_PRODUCT_LIST[product_key].product_code;
}

// dynamic set product available quantity
function setSelectQuantity() {
	var total_quantity = 0;

	// get total quantity
	for (key in EASY_OPTION_LIST) {
		mainlist = EASY_OPTION_LIST[key];
		quantity = 0;

		if (mainlist.type == 'radio') {
			quantity = jQuery('[name="' + key + '-selector"]:checked').val();
		} else if (mainlist.type == 'select') {
			quantity = jQuery('[name="' + key + '-selector"]').val();
		}

		if (jQuery.isNumeric(quantity)) {
			total_quantity += parseInt(quantity);
		}
	}

	// set option
	var limit = 3;

	for (key in EASY_OPTION_LIST) {
		mainlist = EASY_OPTION_LIST[key];
		selector = jQuery('[name="' + key + '-selector"]');
		selectorVal = parseInt(selector.val());

		if (mainlist.type != 'select') continue;

		jQuery('[name="' + key + '-selector"] option').each(function () {
			if (selectorVal != total_quantity && (parseInt(jQuery(this).val()) - selectorVal + total_quantity) > limit) {
				jQuery(this).hide();
			} else {
				jQuery(this).show();
			}
		});

		if (selector.find('option:not([style*=none])').length > 1) {
			jQuery('.' + key + '-selector').show();
		} else {
			jQuery('.' + key + '-selector').hide();
		}
	}
}