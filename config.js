/*=============================
OI in Hand API
	Node.js SDK
-------------------------------
Tianhai Information Technology
	http://tianhai.info
OI in Hand
	http://oiinhand.info
Soha King
	http://soha.moe
=============================*/

module.exports={
	request: {
		header:  {
			'Accept': 'application/json',
			'Cache-Control': 'no-cache',
			'Connection': 'keep-alive',
			'Content-Type': 'charset=UTF-8',
			'Pragma': 'no-cache',
			'User-Agent': 'TrueMoe_Using-FRC-API_Module/1.0'
		},
		forever: true
	},
	oiinhand: {
		interfaceUrl: "https://dev.oiinhand.info/if/",
		auth: {
			key: "",
			secret: ""
		}
	}
};