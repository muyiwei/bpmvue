import axios from "axios"
//axios.defaults.baseURL = "/api/";
axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
axios.interceptors.response.use(function(response){
	// 统一对ajax返回 结果进行xss防护
	return response.data;
},function(error){

console.log(error.message);
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

export async function login(data:any){
	return axios({
		url:"/Portal/Organization/LoginIn",
		data:data,
		method:"POST",
		headers:{"Content-Type":"application/json"}

	});
}
export async function getUnfinishWorkItems(data:any){
	let res = await axios.post("/Portal/WorkItem/GetUnfinishWorkItems",data);
	return res;
}

export async function QueryWorkflowNodes(data:any){
	let res = await axios.post("/Portal/WorkItem/QueryWorkflowNodes",data);
	return res;
}
IsMobile: false
random: 1574350124025
from: portal_myWorkflow
limit: 20
offset: 0
order: asc