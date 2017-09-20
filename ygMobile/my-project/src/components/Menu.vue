<template>
  <div id="menu">
      <div id="header">
        <h1>阳光整形美容医院</h1>
      </div>
      <div id="main">
        <div>
          <router-view></router-view>
        </div>
      </div>
      <div id="footer">
         <div class="tab-item">
          <router-link to="/Menu/Zy">主页</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/Menu/Message">评论</router-link>
        </div>
        <div class="tab-item">
          <router-link to="/Menu/Me">商家</router-link>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
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
    color:#fff;
    height:0.390625rem;
    line-height: 0.390625rem;
    background: -webkit-linear-gradient(left, rgb(77,143,255), rgb(42,191,249));
    width:100%;
    position: absolute;
    top:0px;
    left:0px;
  }
  h1{
    font-size: 0.15625rem;
    font-weight: 500;
  }
  #main{
    position: absolute;
    overflow: scroll;
    width:100%;
    top:0.390625rem;
    bottom:0.48828125rem;
    z-index:1;
  }
  #footer{
    width:100%;
    position: absolute;
    height:0.48828125rem;
    line-height: 0.48828125rem;
    background: -webkit-linear-gradient(left, rgb(255,255,255), rgb(255,255,255));
    bottom:0px;
    left:0px;
    display:flex;
    justify-content: space-around;
     border-top:1px solid #ccc;
     box-sizing:border-box;
  }
   #footer .tab-item{
     width:100%;
    height:100%;
    display:flex;
    justify-content: center;
    align-items: center;
   }
  #footer .tab-item a{
      display: inline-block;
      text-align: center;
      width:100%;
      height:100%;
  }
  .ico-zy{
  background: url(../assets/img/zy.png) no-repeat;
  background-size: 100%;
  }
   .ico-zyActive{
  background: url(../assets/img/zyActive.png) no-repeat;
  background-size: 100%;
  }
  .ico-message{
    background: url(../assets/img/message.png) no-repeat;
    background-size: 100%;
  }
   .ico-messageActive{
    background: url(../assets/img/messageActive.png) no-repeat;
    background-size: 100%;
  }
  .ico-me{
    background: url(../assets/img/me.png) no-repeat;
    background-size: 100%;
  }
  .ico-meActive{
    background: url(../assets/img/meActive.png) no-repeat;
    background-size: 100%;
  }
</style>
