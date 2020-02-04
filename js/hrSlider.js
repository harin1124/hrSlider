$.fn.hrSlider=function(option){
	console.log(option);

	event={};
	event.auto=function(){
		console.log('auto function')
	}

	// TYPE | auto, static
	if(option.type!=undefined || option.type!=null){
		if(option.type=='auto'){
			//debugger;
			event.auto();
		}
	}
}