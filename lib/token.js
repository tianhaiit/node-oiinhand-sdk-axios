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

subapi.prototype.newClient=function (){
	return(axiosInstance.request({
		url: 'token/newClient',
		method: 'get',
		responseType: 'text'
	}));
}

subapi.prototype.validate=async function (token){
	var response,code;
	try{
		response=await axiosInstance.request({
			url: 'token/validate/'+token,
			method: 'get',
			responseType: 'text'
		});
		code=(response.response)?response.response.status:response.status;
	}catch(response){
		code=(response.response)?response.response.status:null;
	}

	if(code==418){
		return(false);
	}else if(code==204){
		return(true);
	}else{
		throw response;
	}
}

module.exports=subapi;