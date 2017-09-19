<template>
  <div id="menu">
      <div id="header">
        <h1>阳光整形美容医院</h1>
      </div>
      <div id="main">
        <div style="height:10000px;width:100%;background-color:green;">
          <input type="text">
        </div>
      </div>
      <div id="footer">
        <el-row>
          <el-col :span="8"><div>100</div></el-col>
          <el-col :span="8"><div>200</div></el-col>
          <el-col :span="8"><div>300</div></el-col>
      </el-row>
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
        }]
      }
    },
    mounted(){
      // var a =$(window).height()-$("#header").height()-$("#footer").height();
      // $main
    }
  }
  
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #menu{
    width:100%;
    height:100%;
    overflow: hidden;
  }
  #header{
    text-align: center;
    height:0.48828125rem;
    line-height: 0.48828125rem;
    background: -webkit-linear-gradient(left, rgb(77,143,255), rgb(42,191,249));
    font-size: 0.13671875rem;
    width:100%;
    position: absolute;
    top:0px;
    left:0px;
  }
  #main{
    position: absolute;
    overflow: scroll;
    width:100%;
    top:0.48828125rem;
    bottom:0.48828125rem;
    z-index:1;
  }
  #footer{
    width:100%;
    position: absolute;
    height:0.48828125rem;
    line-height: 0.48828125rem;
     background: -webkit-linear-gradient(left, rgb(77,143,255), rgb(42,191,249));
    bottom:0px;
    left:0px;
  }
  #footer .el-row{
    text-align: center;
  }
  #footer .el-row .el-col{
    border:1px solid red;
  }
</style>
