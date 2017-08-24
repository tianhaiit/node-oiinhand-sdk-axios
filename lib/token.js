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

var axiosInstance;
var _config;

var Token = function (axios, i_config) {
	axiosInstance = axios;
	_config = i_config;
};

Token.prototype.newClient = function () {
	return (axiosInstance.request({
		url: 'token/newClient',
		method: 'get',
		responseType: 'text'
	}));
};

Token.prototype.validate = function (token) {
	return (new Promise(function (resolve, reject) {
		var response, code;
		response = axiosInstance.request({
			url: 'token/validate/' + token,
			method: 'get',
			responseType: 'text'
		});
		response.then(function (response) {
			code = (response.response) ? response.response.status : response.status;
			switch (code) {
				case 204:
					resolve(true);
					break;
				case 418:
					resolve(false);
					break;
				default:
					reject("Unknown status code when validating token.");
			}
		}).catch(function (response) {
			code = (response.response) ? response.response.status : null;
			switch (code) {
				case 204:
					resolve(true);
					break;
				case 418:
					resolve(false);
					break;
				default:
					reject("Unknown status code when validating token.");
			}
		});
	}));
}

module.exports = Token;