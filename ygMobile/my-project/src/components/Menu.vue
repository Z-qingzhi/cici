<template>
  <div id="menu">
      <div id="header">
        <h1>阳光整形美容医院</h1>
      </div>
      <div id="main">

      </div>
      <div id="footer">
          <ul>
            <li>143</li>
            <li>2d374b</li>
            <li>3</li>
          </ul>
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
      var a =$(window).height()-$("#header").height()-$("#footer").height();
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
    position: relative;
    top:0px;
    left:0px;
  }
  #footer{
    width:100%;
    position: fixed;
    height:0.48828125rem;
    line-height: 0.48828125rem;
     background: -webkit-linear-gradient(left, rgb(77,143,255), rgb(42,191,249));
    bottom:0px;
    left:0px;
  }
  #footer ul{
    display: flex;
    justify-content: center;
    align-items:center;
  }
  #footer ul li{
    width:0.9765625rem;
    justify-content: center;
    align-items:center;
  }
</style>
