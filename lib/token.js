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

Token.prototype.validate = async function (token) {
	var response, code;
	try {
		response = await axiosInstance.request({
			url: 'token/validate/' + token,
			method: 'get',
			responseType: 'text'
		});
		code = (response.response) ? response.response.status : response.status;
	} catch (response) {
		code = (response.response) ? response.response.status : null;
	}

	switch (code) {
		case 204:
			return (true);
			break;
		case 418:
			return (false);
			break;
		default:
			throw new Error("Unknown status code when validating token.");
	}
}

module.exports = Token;