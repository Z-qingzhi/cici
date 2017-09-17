(function(){
	 	setRem() 
	 	window.addEventListener('orientation' in window?"deviceorientation":"resize",setRem);//判断
	 	function setRem(){
	 		var html=document.documentElement;
	 		var hWidth=html.getBoundingClientRect().width;
	 		html.style.fontSize=hWidth/10+"px";
	 	}

	 	

})();