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

var Problem = function (axios, i_config) {
	axiosInstance = axios;
	_config = i_config;
};

Problem.prototype.show = function (id) {
	return (axiosInstance.request({
		url: 'problem/show/' + id,
		method: 'get',
	}));
}

Problem.prototype.list = function (page, limit, parameter) {
	if (typeof (parameter) == 'object') {
		parameter.page = page;
		parameter.limit = limit;
	} else {
		parameter = {
			page: page,
			limit: limit
		}
	}
	return (axiosInstance.request({
		url: 'problem/list',
		method: 'get',
		params: parameter
	}));
}

Problem.prototype.similar = function (id) {
	return (axiosInstance.request({
		url: 'problem/similar/' + id,
		method: 'get',
	}));
}

module.exports = Problem;