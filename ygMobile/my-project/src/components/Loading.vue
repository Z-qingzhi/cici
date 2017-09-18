<template>
  <div id="loading">
      <h1>管理系统登陆</h1>
      <div class="login">
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
        <el-input v-model="input1" placeholder="请输入登录名"></el-input>

        <p>
          <el-input v-model="input2" placeholder="请输入密码"></el-input>
        </p>
        <p class="err" >
          <span v-if="true">账号、密码错误</span>
        </p>
        <div id="loadBtn">
          <el-button type="success" @click="loadCheck()">登陆</el-button>
        </div>
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
        input2:''
      }
    },
    methods:{
      loadCheck(){
        var data = {"URL":"../SQL/XML","sqlNameSpace":"ZL_PF_SecondTriage_XML_6","sqlFile":"zlManage/ZL_PF_SecondTriage.xml"};
        data["aa"] = this.input1;
        data["password"] = this.input2;
        this.$http(data,function(){
          
        });
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
    height:0.2rem;
  }
  #loadBtn{
    display: flex;
    justify-content: center;
  }
</style>
