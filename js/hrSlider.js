$.fn.hrSlider=function(option){
	var obj={container:this};
	console.log('option value >> ',option);

	event={};
	event.auto=function(){
		console.log('auto function');

		debugger;
		//슬라이드 사이즈 구하기
	}

	set={};
	set.init=function(){
		console.log('init function');
	}

	// TYPE | auto, static
	set.init();
	if(option.type!=undefined || option.type!=null){
		if(option.type=='auto'){
			//debugger;
			event.auto();
		}
	}
}