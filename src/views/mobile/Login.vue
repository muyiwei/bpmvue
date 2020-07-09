<template>
  <div class="loginContainer">
    <div class="login-log"></div>
    <div class="form-container">
      <div class="input-div">
        <el-input  placeholder="帐号"  v-model="userName"></el-input>
      </div>
      <div class="input-div">
           <el-input  placeholder="密码"  type="password" v-model="password"></el-input>
      </div>
    </div>

    <div class="submit-conatiner">
      <el-button type="primary" round @click="loginClick">登录</el-button>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import router from '@/router';
export default {
  
    data(){
        return {
            userName:"",
            password:"",
        }
    }
    ,
    methods:{
        ...mapActions(["login"]),
        loginClick(){
          this.login({data:{
                password:this.password,
                userCode:this.userName
          },callback:function(){
            router.push("/mobile/home")
          }})

        },

    }

};
</script>

<style scoped lang="less">
.loginContainer{
    background:#fff;
    margin-top:100px;
    .login-log{
        width:108px;
        height:132px;
        background: url(../../css/img/mobile/login/logo.svg);
        background-size: cover;
        margin:auto;
    }
    .form-container{
        width:250px;
        margin: 50px auto;
        .input-div{
            margin:16px 0 ;
        }
    }
    .submit-conatiner{
        width:250px;
        margin:auto;
        button{
            width:100%;
        }
    }

}

</style>