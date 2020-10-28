// **************************************************
// 配送相關設定
// - SETTING_SHIPPING_CARRIER (運輸公司)
//  => Y : ヤマト便（黑貓宅急便, 禮拜日沒有配送）
//  => P : ペリカン便（宅配通）
//  => S : SF（順豐）
//  => C : CTW
//  => O : Others（其他）
// - SETTING_NO_SHIPPING_DATES (預設不配送日期)
// - SETTING_CONV_NO_SHIPPING_DATES (超商取貨, 預設不配送日期)
// - SETTING_SF_NO_SHIPPING_DATES (順豐運輸, 預設不配送日期)
// ※ 日期不必 + 0, 否則無法對應, Ex: 2018/01/01
// - SETTING_NO_SHIPPING_PRODUCTS (超過5公斤不能配送)
// ※ 請填寫產品編號, Ex: p001
// - SETTING_NONE_USE_DAY (不要配送的星期)
//  => Ex: [6, 0, 1]
//  => 星期六, 星期日, 星期一
// - SETTING_PAYMENT_LINE_PAY_Limit LinePay定期金額限制
// **************************************************
const SETTING_SHIPPING_CARRIER = 'P';
const SETTING_NO_SHIPPING_DATES = [];
const SETTING_CONV_NO_SHIPPING_DATES = ['2018/12/31', '2019/1/1', '2019/1/2', '2019/1/3', '2019/2/4', '2019/2/5', '2019/2/6', '2019/2/7', '2019/2/8', '2019/2/9', '2019/2/10', '2019/2/11', '2019/2/12', '2019/4/6', '2019/4/7', '2019/4/8', '2019/4/9', '2019/6/9', '2019/6/10', '2019/6/11', '2019/9/15', '2019/9/16', '2019/9/17', '2019/10/12', '2019/10/13', '2019/10/14', '2019/10/15'];
const SETTING_SF_NO_SHIPPING_DATES = ['2018/4/4', '2018/4/5', '2018/4/6', '2018/4/7', '2018/4/8'];
const SETTING_NO_SHIPPING_PRODUCTS = [];
const SETTING_NONE_USE_DAY = [0];
const SETTING_PAYMENT_LINE_PAY_Limit = 99999;

// **************************************************
// 設定不需要的縣市(ZIP)名單, 請填入代碼值即可
// 例如不要離島:
// const SETTING_ZIP_NO_NEED_LIST = [3, 5, 18, 19, 20];
// **************************************************
const SETTING_ZIP_NO_NEED_LIST = [];