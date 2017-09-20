// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './assets/js/jquery-1.7.2.min.js'
import './assets/js/base.js'
// import './assets/css/ico.css'
// import 'element-ui/lib/theme-default/index.css'
// import ElementUI from 'element-ui'
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'


Vue.config.productionTip = false
// Vue.use(ElementUI)
Vue.use(MintUI)
/****************************重写ajax****************************/
Vue.prototype.$http = function(DATA,callBackFn,fn,fn_1){
	try{
		DATA["key"]=window.external.setKey("0",window.top.getKey());
	}catch(e){}
	$.ajax( {  
	     timeout : 60000, //超时时间设置，单位毫秒
		 type : DATA.TYPE,   
		 url : DATA.URL,
		 data: DATA,
		 dataType:DATA.DATATYPE,   
 		 async:true, 
			 success : function(msg) {
		     callBackFn(msg,DATA,fn,fn_1);
		     },
	　　error:function(XMLHttpRequest,status){ //请求完成后最终执行参数
	　　　　if(status=='timeout'){//超时,status还有success,error等值的情况
	　　　　　  alert("出错","请求超时！");
	　　　　}
	　　}

	});   	
}

// vue.directivue('notNull',{
// 	bind(el,binding){
// 		el.val() = null
// 	}
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
