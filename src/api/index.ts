
import axios from './axios';
import apiMapping from './api-mapping';
export async function login(data:any){
	//data.password = data.password;
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
	let res = await axios.get("/Portal/Workflow/QueryWorkflowNodes",data);
	return res;
}

export async function queryWorkflowNodesByParentCode(data:any){
	let res = await axios.get("/Portal/Workflow/queryWorkflowNodesByParentCode",data);
	return res;
}

export async function test(data:any){
	let res = await axios.get("/test",data);
	return res;
}

export async function getApplist(data:any){
	//let res = await axios.get(apiMapping.getApplist, data);
	let res = {
		code: 0,
		data: [
			{
				code: "appa",
				name:"应用a"
			},
			{
				code: "appb",
				name:"应用b"
			},
			{
				code: "appc",
				name:"应用c"
			},
			{
				code: "appd",
				name:"应用d",
			}
		]
	}
	return res;
}

export async function getApplicationList(data: any) {
	//let res = await axios.get(apiMapping.getApplicationList, data);
	let res = {
		code: 0,
		data: [
			{
				code: "lista",
				name:"菜单a"
			},
			{
				code: "listb",
				name:"菜单b"
			},
			{
				code: "listc",
				name:"菜单c"
			},
			{
				code: "listd",
				name:"菜单d",
				children: [
					{
						code: "listda",
						name: "菜单dd"
					},
					{
						code: "listdb",
						name: "菜单db"
					}
				]
			}
		]
	}
	return res;
}