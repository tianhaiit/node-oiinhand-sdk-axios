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

let config=require('./config');
let axios=require('axios');
let http=require('http');
let https=require('https');

let api=function (key,secret,interfaceUrl){
	config.oiinhand.auth.key=key;
	config.oiinhand.auth.secret=secret;
	if(interfaceUrl){
		config.oiinhand.interfaceUrl=interfaceUrl;
	}
	var axiosInstance=axios.create({
		baseURL: config.oiinhand.interfaceUrl,
		headers: config.request.header,
		params:{
			apikey: config.oiinhand.auth.key,
			apisecret: config.oiinhand.auth.secret
		},
		responseType: 'json',
		httpAgent: new http.Agent({
			keepAlive: true
		}),
		httpsAgent: new https.Agent({
			keepAlive: true
		})
	});
	api.prototype.problem=new (require('./lib/problem'))(axiosInstance,config);
	api.prototype.search=new (require('./lib/search'))(axiosInstance,config);
}

module.exports=api;
