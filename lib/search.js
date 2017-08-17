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

var Search = function (axios, i_config) {
	axiosInstance = axios;
	_config = i_config;
};

Search.prototype.simple = function (q, parameter) {
	if (typeof (parameter) == 'object') {
		if (typeof (parameter.oj) == "object") {
			parameter.oj = parameter.oj.join(',');
		}
		parameter.query = q;
	} else {
		parameter = {
			query: q
		}
	}
	return (axiosInstance.request({
		url: 'problem/search/AwesomeSoha',
		params: parameter
	}));
}

Search.prototype.wtag = function (q, tags, parameter) {
	if (typeof (parameter) == 'object') {
		if (typeof (parameter.oj) == "object") {
			parameter.oj = parameter.oj.join(',');
		}
		parameter.query = q;
		parameter.tag = (typeof (tags) == "object") ? tags.join('|') : tags;
	} else {
		parameter = {
			query: q,
			tag: ((typeof (tags) == "object") ? tags.join('|') : tags)
		}
	}
	return (axiosInstance.request({
		url: 'problem/searchAdvanced/withTag',
		params: parameter
	}));
}

module.exports = Search;