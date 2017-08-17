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

var config = require('./config');
var axios = require('axios');
var http = require('http');
var https = require('https');

var OIHSDK = function (key, secret, interfaceUrl) {
	config.oiinhand.auth.key = key;
	config.oiinhand.auth.secret = secret;
	if (interfaceUrl) {
		config.oiinhand.interfaceUrl = interfaceUrl;
	}
	var axiosInstance = axios.create({
		baseURL: config.oiinhand.interfaceUrl,
		headers: config.request.header,
		params: {
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
	OIHSDK.prototype.problem = new (require('./lib/problem'))(axiosInstance, config);
	OIHSDK.prototype.search = new (require('./lib/search'))(axiosInstance, config);
	OIHSDK.prototype.token = new (require('./lib/token'))(axiosInstance, config);
}

module.exports = OIHSDK;
