(function(){
	/*************布局适配***************/
 	setRem() 
 	window.addEventListener('orientation' in window?"deviceorientation":"resize",setRem);//判断
 	function setRem(){
 		var html=document.documentElement;
 		var hWidth=html.getBoundingClientRect().width;
 		html.style.fontSize=hWidth/10+"px";
 	}

 	/****************************重写ajax****************************/
	function ajax(DATA,callBackFn,fn,fn_1){
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

})();