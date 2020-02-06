$.fn.hrSlider=function(option){
	var _this=this;
	console.log('option value >> ',option);

	
	var auto=function(){
		console.log('auto function');

		debugger;
		//슬라이드 사이즈 구하기
	}

	
	var init=function(){
		console.log('init function');
	}

	// TYPE | auto, static
	init();
	if(option.type!=undefined || option.type!=null){
		if(option.type=='auto'){
			//debugger;
			auto();
		}
	}
}
//http://www.nextree.co.kr/p9989/