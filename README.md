# OI in Hand Node.js SDK

## 使用方法

十分简单，只需要以下步骤

	$ npm install oiinhand-api

    var OIHAPI=require('oiinhand-api');
    var api=new OIHAPI('$apikey$','$apisecret$');

这是最简单的开始使用方法。在创建 OIHAPI 的实例时你还可以传入第三个参数，用于自行设置 OI in Hand 的 API 地址。例如：
	var api=new OIHAPI('$apikey$','$apisecret$','https://api.oiinhand.info/if/');

## oiinhand-api

所有请求都是 **OI in Hand API 文档**中有的，关于 API 的具体使用请参阅**OI in Hand API 文档**。

以下任何一个请求，除非特殊说明，回传的都是一个 Promise 对象。

### 题库

#### 根据 id 获取一道题目的详细信息

	api.problem.show(id);

这是一个示例：

	var p=api.problem.show('59052f43f66151042555c97c');
	p.then(function (res){
		console.log(res.data);
	});

#### 模糊搜索

	api.search.simple(queryString,otherParams);

这是一个示例：

	var p=api.search.simple('soha',{
		oj: 'luogu',
		page: 2,
		limit: 2
	});
	p.then(function (res){
		console.log(res.data);
	});

#### 模糊搜索 (带标签)

	api.search.wtag(queryString,tags,otherParams);

这是一个示例：

	var p=api.search.wtag('soha',[
		"模拟",
		"字符串"
	],{
		oj: [
			'luogu',
			'vijos'
		],
		page: 1,
		limit: 2
	});
	p.then(function (res){
		console.log(res.data);
	});
