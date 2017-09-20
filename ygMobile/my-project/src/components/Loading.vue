<template>
  <div id="loading">
      <h1>管理系统登陆</h1>
      <div class="login">
      <!-- <form action="Loading_submit" method="" accept-charset="utf-8"> -->
        <p>
            <select>
              <option  v-for = "item in hospitalSelect" :value="item.value">{{item.label}}</option>
            </select>
        </p>
        <p>
        <input type="text" placeholder="请输入登录名" v-model="input1">
        <p class="lastML">
          <input type="password" placeholder="请输入密码" v-model="input2">
        </p>
        <p class="err" >
          <span v-if="errorB">{{error}}</span>
        </p>
        <div id="loadBtn">
          <mt-button type="primary" size="large" @click="loadCheck()">登录</mt-button>
        </div>
      <!-- </form> -->
        
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hospitalSelect: [{
          value: '1',
          label: '阳光'
        }, {
          value: '2',
          label: '东门'
        }, {
          value: '3',
          label: '宝安'
        }, {
          value: '4',
          label: '南山'
        }],
        input1:'',
        input2:'',
        errorB:false,
        error:'账号密码不能为空'
      }
    },
    methods:{
      //登录发送请求
      loadCheck(){
        if(this.input1 == ''&& this.input2 == ''){
          this.errorB = true;
        }else{
          var URL='mobileLoginUser';
          var data={"TYPE":"POST","URL":URL,"DATATYPE":"json"};
          data["aa"] = this.input1;
          data["password"] = this.input2;
          // this.$http(data,function(msg){
          //   alert(msg)
          // });
          this.$router.push('Menu')

        }

      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #loading{font-size:0.15625rem;}
  h1{
    text-align:center;
    margin:.5rem 0 .5rem 0;
  }
  p{margin:0.09765625rem 0.0rem;}
  input,select{
    width:100%;
  }
  .login{
    width:5.0rem;
    margin:0 auto;
    border:1px solid #ccc;
    padding:0.5rem 0.5rem 0.6rem;
    background-color: rgba(26,137,235,.1);
    border-radius: 0.06rem
  }
  .err{
    margin:0px;
    text-align: center;
    height:0.4rem;
    line-height: 0.4rem;
    color:red;
  }
  .lastML{margin-bottom:0px;padding-bottom: 0px;}
</style>
