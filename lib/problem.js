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

subapi.prototype.show=function (id){
	return(axiosInstance.request({
		url: 'problem/show/'+id,
		method: 'get',
	}));
}

subapi.prototype.list=function (page,limit,parameter){
	if(typeof(parameter)=='object'){
		parameter.page=page;
		parameter.limit=limit;
	}else{
		parameter={
			page: page,
			limit: limit
		}
	}
	return(axiosInstance.request({
		url: 'problem/list',
		method: 'get',
		params: parameter
	}));
}

module.exports=subapi;