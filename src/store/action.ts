import {login} from "../api/index";

export default{
    login:async function (state:any,data:any){
        debugger;
        let loginResult = login(data.data);
        console.log(loginResult)
        let res= await loginResult;
        console.log(res);
        state.loginResult = res;
        localStorage.setItem("loginResult",JSON.stringify(res));
        data.callback();
    }
}