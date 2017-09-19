<template>
  <div id="loading">
      <h1>管理系统登陆</h1>
      <div class="login" ref="aaaaa">
      <form action="Loading_submit" method="post" accept-charset="utf-8">
        <p>
          <!-- <span class="em"> 医院：</span> -->
            <el-select v-model="value" placeholder="请选择" ref="hospitalSelect">
              <el-option
                v-for="item in hospitalSelect"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </p>
        <p>
        <el-input @blur="notNull()" v-model="input1" placeholder="请输入登录名" id="account"></el-input>

        <p>
          <el-input @blur="notNull()" v-model="input2" placeholder="请输入密码" id="password"></el-input>
        </p>
        <p class="err" >
          <span v-if="errorB">{{error}}</span>
        </p>
        <div id="loadBtn">
          <el-button type="success" @click="loadCheck()">登陆</el-button>
        </div>
      </form>
        
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
        value:'1',
        input1:'',
        input2:'',
        errorB:false,
        error:''
      }
    },
    methods:{
      //验证账号密码是否为空
       notNull(event){
        if(this.input1 == ''){
          this.errorB = true;
          this.error = '账号不能为空!'
          
        }else{
          if(this.input2 == ''){
            this.errorB = true;
            this.error = '密码不能为空!'
          }else{
            this.errorB = false;
          }
        }
      },
      //登录发送请求
      loadCheck(){
        if(this.input1 != ''&& this.input2 != ''){
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
  .iptW{
    display: inline-block;
  }
  p{margin:0.09765625rem 0.0rem;}
  p .el-select{
    width:100%;
  }
  p .el-input{
    width:100%;
  }
  .em{
    margin-left:1em;
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
    text-align: center;
    height:0.4rem;
    color:red;
  }
  #loadBtn{
    display: flex;
    justify-content: center;
  }
</style>
