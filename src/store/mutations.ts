

export default{
    "pageIndex":function(state:any,index:any){
        state.pageIndex=index;
    },
    "appCode": function(state: any, appCode: string){
        state.appCode = appCode;
    },
    "listCode": function(state: any, listCode: string){
        state.listCode = listCode;
    }
}