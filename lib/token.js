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

var subapi=function (axios,i_config){
	axiosInstance=axios;
	_config=i_config;
};

subapi.prototype.newClient=function (id){
	return(axiosInstance.request({
		url: 'token/newClient',
		method: 'get',
	}));
}

module.exports=subapi;