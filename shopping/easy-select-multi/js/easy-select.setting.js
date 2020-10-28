const EASY_OPTION_LIST = {
	'size' : {
		'type': 'radio',
		'name': '尺寸',
		'key': '',
		'list': {
			'S' : {'name': 'S~M'},
			'M' : {'name': 'M~L'},
			'L' : {'name': 'L~LL'}
		}
	},
	'black' : {
		'type': 'select',
		'name': '黑色',
		'key': 'B',
		'list': {
			'0' : {'name': '請選擇'},
			'1' : {'name': '1件'},
			'2' : {'name': '2件'},
			'3' : {'name': '3件'}
		}
	},
	'pink' : {
		'type': 'select',
		'name': '粉紅色',
		'key': 'P',
		'list': {
			'0' : {'name': '請選擇'},
			'1' : {'name': '1件'},
			'2' : {'name': '2件'},
			'3' : {'name': '3件'}
		}
	},
	'blue' : {
		'type': 'select',
		'name': '藍色',
		'key': 'N',
		'list': {
			'0' : {'name': '請選擇'},
			'1' : {'name': '1件'},
			'2' : {'name': '2件'},
			'3' : {'name': '3件'}
		}
	}
};

const EASY_OPTION_PRODUCT_LIST = {
	'SB1P0N0': { 'product_code':'RBBS1', 'product_name':'夜間3D美胸內衣_黑S~M1 1,200', 'size':'S', 'black':'1', 'pink':'0', 'blue':'0' },
	'SB2P0N0': { 'product_code':'RBBS2', 'product_name':'夜間3D美胸內衣_黑S~M2 2,280', 'size':'S', 'black':'2', 'pink':'0', 'blue':'0' },
	'SB3P0N0': { 'product_code':'RBBS3', 'product_name':'夜間3D美胸內衣_黑S~M3 3,240', 'size':'S', 'black':'3', 'pink':'0', 'blue':'0' },
	'SB0P1N0': { 'product_code':'RBPS1', 'product_name':'夜間3D美胸內衣_粉S~M1 1,200', 'size':'S', 'black':'0', 'pink':'1', 'blue':'0' },
	'SB0P2N0': { 'product_code':'RBPS2', 'product_name':'夜間3D美胸內衣_粉S~M2 2,280', 'size':'S', 'black':'0', 'pink':'2', 'blue':'0' },
	'SB0P3N0': { 'product_code':'RBPS3', 'product_name':'夜間3D美胸內衣_粉S~M3 3,240', 'size':'S', 'black':'0', 'pink':'3', 'blue':'0' },
	'SB0P0N1': { 'product_code':'RBNS1', 'product_name':'夜間3D美胸內衣_藍S~M1 1,200', 'size':'S', 'black':'0', 'pink':'0', 'blue':'1' },
	'SB0P0N2': { 'product_code':'RBNS2', 'product_name':'夜間3D美胸內衣_藍S~M2 2,280', 'size':'S', 'black':'0', 'pink':'0', 'blue':'2' },
	'SB0P0N3': { 'product_code':'RBNS3', 'product_name':'夜間3D美胸內衣_藍S~M3 3,240', 'size':'S', 'black':'0', 'pink':'0', 'blue':'3' },
	'SB1P1N0': { 'product_code':'SRBB1P1', 'product_name':'夜間3D美胸內衣_黑S~M1×粉S~M1 2,280', 'size':'S', 'black':'1', 'pink':'1', 'blue':'0' },
	'SB1P0N1': { 'product_code':'SRBB1N1', 'product_name':'夜間3D美胸內衣_黑S~M1×藍S~M1 2,280', 'size':'S', 'black':'1', 'pink':'0', 'blue':'1' },
	'SB0P1N1': { 'product_code':'SRBP1N1', 'product_name':'夜間3D美胸內衣_粉S~M1×藍S~M1 2,280', 'size':'S', 'black':'0', 'pink':'1', 'blue':'1' },
	'SB1P2N0': { 'product_code':'SRBB1P2', 'product_name':'夜間3D美胸內衣_黑S~M1×粉S~M2 3,240', 'size':'S', 'black':'1', 'pink':'2', 'blue':'0' },
	'SB1P0N2': { 'product_code':'SRBB1N2', 'product_name':'夜間3D美胸內衣_黑S~M1×藍S~M2 3,240', 'size':'S', 'black':'1', 'pink':'0', 'blue':'2' },
	'SB2P1N0': { 'product_code':'SRBB2P1', 'product_name':'夜間3D美胸內衣_黑S~M2×粉S~M1 3,240', 'size':'S', 'black':'2', 'pink':'1', 'blue':'0' },
	'SB2P0N1': { 'product_code':'SRBB2N1', 'product_name':'夜間3D美胸內衣_黑S~M2×藍S~M1 3,240', 'size':'S', 'black':'2', 'pink':'0', 'blue':'1' },
	'SB0P1N2': { 'product_code':'SRBP1N2', 'product_name':'夜間3D美胸內衣_粉S~M1×藍S~M2 3,240', 'size':'S', 'black':'0', 'pink':'1', 'blue':'2' },
	'SB0P2N1': { 'product_code':'SRBP2N1', 'product_name':'夜間3D美胸內衣_粉S~M2×藍S~M1 3,240', 'size':'S', 'black':'0', 'pink':'2', 'blue':'1' },
	'SB1P1N1': { 'product_code':'SRBB1P1N1', 'product_name':'夜間3D美胸內衣_黑×粉×藍S~M3 3,240', 'size':'S', 'black':'1', 'pink':'1', 'blue':'1' },
	'MB1P0N0': { 'product_code':'RBBM1', 'product_name':'夜間3D美胸內衣_黑M~L1 1,200', 'size':'M', 'black':'1', 'pink':'0', 'blue':'0' },
	'MB2P0N0': { 'product_code':'RBBM2', 'product_name':'夜間3D美胸內衣_黑M~L2 2,280', 'size':'M', 'black':'2', 'pink':'0', 'blue':'0' },
	'MB3P0N0': { 'product_code':'RBBM3', 'product_name':'夜間3D美胸內衣_黑M~L3 3,240', 'size':'M', 'black':'3', 'pink':'0', 'blue':'0' },
	'MB0P1N0': { 'product_code':'RBPM1', 'product_name':'夜間3D美胸內衣_粉M~L1 1,200', 'size':'M', 'black':'0', 'pink':'1', 'blue':'0' },
	'MB0P2N0': { 'product_code':'RBPM2', 'product_name':'夜間3D美胸內衣_粉M~L2 2,280', 'size':'M', 'black':'0', 'pink':'2', 'blue':'0' },
	'MB0P3N0': { 'product_code':'RBPM3', 'product_name':'夜間3D美胸內衣_粉M~L3 3,240', 'size':'M', 'black':'0', 'pink':'3', 'blue':'0' },
	'MB0P0N1': { 'product_code':'RBNM1', 'product_name':'夜間3D美胸內衣_藍M~L1 1,200', 'size':'M', 'black':'0', 'pink':'0', 'blue':'1' },
	'MB0P0N2': { 'product_code':'RBNM2', 'product_name':'夜間3D美胸內衣_藍M~L2 2,280', 'size':'M', 'black':'0', 'pink':'0', 'blue':'2' },
	'MB0P0N3': { 'product_code':'RBNM3', 'product_name':'夜間3D美胸內衣_藍M~L3 3,240', 'size':'M', 'black':'0', 'pink':'0', 'blue':'3' },
	'MB1P1N0': { 'product_code':'MRBB1P1', 'product_name':'夜間3D美胸內衣_黒M~L1×粉M~L1 2,280', 'size':'M', 'black':'1', 'pink':'1', 'blue':'0' },
	'MB1P0N1': { 'product_code':'MRBB1N1', 'product_name':'夜間3D美胸內衣_黒M~L1×藍M~L1 2,280', 'size':'M', 'black':'1', 'pink':'0', 'blue':'1' },
	'MB0P1N1': { 'product_code':'MRBP1N1', 'product_name':'夜間3D美胸內衣_粉M~L1×藍M~L1 2,280', 'size':'M', 'black':'0', 'pink':'1', 'blue':'1' },
	'MB1P2N0': { 'product_code':'MRBB1P2', 'product_name':'夜間3D美胸內衣_黒M~L1×粉M~L2 3,240', 'size':'M', 'black':'1', 'pink':'2', 'blue':'0' },
	'MB1P0N2': { 'product_code':'MRBB1N2', 'product_name':'夜間3D美胸內衣_黒M~L1×藍M~L2 3,240', 'size':'M', 'black':'1', 'pink':'0', 'blue':'2' },
	'MB2P1N0': { 'product_code':'MRBB2P1', 'product_name':'夜間3D美胸內衣_黒M~L2×粉M~L1 3,240', 'size':'M', 'black':'2', 'pink':'1', 'blue':'0' },
	'MB2P0N1': { 'product_code':'MRBB2N1', 'product_name':'夜間3D美胸內衣_黒M~L2×藍M~L1 3,240', 'size':'M', 'black':'2', 'pink':'0', 'blue':'1' },
	'MB0P1N2': { 'product_code':'MRBP1N2', 'product_name':'夜間3D美胸內衣_粉M~L1×藍M~L2 3,240', 'size':'M', 'black':'0', 'pink':'1', 'blue':'2' },
	'MB0P2N1': { 'product_code':'MRBP2N1', 'product_name':'夜間3D美胸內衣_粉M~L2×藍M~L1 3,240', 'size':'M', 'black':'0', 'pink':'2', 'blue':'1' },
	'MB1P1N1': { 'product_code':'MRBB1BP1N1', 'product_name':'夜間3D美胸內衣_黒×粉×藍M~L3 3,240', 'size':'M', 'black':'1', 'pink':'1', 'blue':'1' },
	'LB1P0N0': { 'product_code':'RBBL1', 'product_name':'夜間3D美胸內衣_黑L~LL1 1,200', 'size':'L', 'black':'1', 'pink':'0', 'blue':'0' },
	'LB2P0N0': { 'product_code':'RBBL2', 'product_name':'夜間3D美胸內衣_黑L~LL2 2,280', 'size':'L', 'black':'2', 'pink':'0', 'blue':'0' },
	'LB3P0N0': { 'product_code':'RBBL3', 'product_name':'夜間3D美胸內衣_黑L~LL3 3,240', 'size':'L', 'black':'3', 'pink':'0', 'blue':'0' },
	'LB0P1N0': { 'product_code':'RBPL1', 'product_name':'夜間3D美胸內衣_粉L~LL1 1,200', 'size':'L', 'black':'0', 'pink':'1', 'blue':'0' },
	'LB0P2N0': { 'product_code':'RBPL2', 'product_name':'夜間3D美胸內衣_粉L~LL2 2,280', 'size':'L', 'black':'0', 'pink':'2', 'blue':'0' },
	'LB0P3N0': { 'product_code':'RBPL3', 'product_name':'夜間3D美胸內衣_粉L~LL3 3,240', 'size':'L', 'black':'0', 'pink':'3', 'blue':'0' },
	'LB0P0N1': { 'product_code':'RBNL1', 'product_name':'夜間3D美胸內衣_藍L~LL1 1,200', 'size':'L', 'black':'0', 'pink':'0', 'blue':'1' },
	'LB0P0N2': { 'product_code':'RBNL2', 'product_name':'夜間3D美胸內衣_藍L~LL2 2,280', 'size':'L', 'black':'0', 'pink':'0', 'blue':'2' },
	'LB0P0N3': { 'product_code':'RBNL3', 'product_name':'夜間3D美胸內衣_藍L~LL3 3,240', 'size':'L', 'black':'0', 'pink':'0', 'blue':'3' },
	'LB1P1N0': { 'product_code':'LRBB1P1', 'product_name':'夜間3D美胸內衣_黒1×粉1L~LL 2,280', 'size':'L', 'black':'1', 'pink':'1', 'blue':'0' },
	'LB1P0N1': { 'product_code':'LRBB1N1', 'product_name':'夜間3D美胸內衣_黒1×藍1L~LL 2,280', 'size':'L', 'black':'1', 'pink':'0', 'blue':'1' },
	'LB0P1N1': { 'product_code':'LRBP1N1', 'product_name':'夜間3D美胸內衣_粉1×藍1L~LL 2,280', 'size':'L', 'black':'0', 'pink':'1', 'blue':'1' },
	'LB1P2N0': { 'product_code':'LRBB1P2', 'product_name':'夜間3D美胸內衣_黒1×粉2L~LL 3,240', 'size':'L', 'black':'1', 'pink':'2', 'blue':'0' },
	'LB1P0N2': { 'product_code':'LRBB1N2', 'product_name':'夜間3D美胸內衣_黒1×藍2L~LL 3,240', 'size':'L', 'black':'1', 'pink':'0', 'blue':'2' },
	'LB2P1N0': { 'product_code':'LRBB2P1', 'product_name':'夜間3D美胸內衣_黒2×粉1L~LL 3,240', 'size':'L', 'black':'2', 'pink':'1', 'blue':'0' },
	'LB2P0N1': { 'product_code':'LRBB2N1', 'product_name':'夜間3D美胸內衣_黒2×藍1L~LL 3,240', 'size':'L', 'black':'2', 'pink':'0', 'blue':'1' },
	'LB0P1N2': { 'product_code':'LRBP1N2', 'product_name':'夜間3D美胸內衣_粉1×藍2L~LL 3,240', 'size':'L', 'black':'0', 'pink':'1', 'blue':'2' },
	'LB0P2N1': { 'product_code':'LRBP2N1', 'product_name':'夜間3D美胸內衣_粉2×藍1L~LL 3,240', 'size':'L', 'black':'0', 'pink':'2', 'blue':'1' },
	'LB1P1N1': { 'product_code':'LRBB1P1N1', 'product_name':'夜間3D美胸內衣_黒×粉×藍L~LL3 3,240', 'size':'L', 'black':'1', 'pink':'1', 'blue':'1' }
};