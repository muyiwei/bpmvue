import axios from "axios"
//import md5 from 'js-md5';
//axios.defaults.baseURL = "/api/";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.interceptors.response.use(function(response){
	// 统一对ajax返回 结果进行xss防护
	return response.data;
},function(error){

//console.log(error.message);
return Promise.reject(error);
})

axios.interceptors.request.use(function(config){
	// 统一对ajax返回 结果进行xss防护
	config.data = config.data||{};
	if(config.url&&config.url.indexOf("LoginIn")==-1)
	{
		let ret="";
		for (let it in config.data) {
			ret += encodeURIComponent(it) + '=' + encodeURIComponent(config.data[it]) + '&';
		}
	
		config.data=ret;
	}

    return config;
})
export default axios;