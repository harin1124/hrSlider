(function($){
	$.fn.hrSlider=function(option){
		var op=option;
		var _this=this;
		console.log(_this)

		var init=function(){
			console.log('init function');
			if(op!=undefined&&op!=null){
				optionSet();
			}else{
				defaultOptionSet();
			}
		}

		var opFunc={};
		opFunc.typeAuto=function(){
			let width=150;
			let cnt=1;
			let len=_this.children().children().length-1;


			let autoRightMoveId=setInterval(function(){
				_this.children().css({marginLeft:-1*(150*cnt)})	
				if(cnt==len){
					clearInterval(autoRightMoveId);
				}else{
					cnt++;
				}
			
			}, 3000);

			let autoLeftMoveId=setInterval(function(){

			});
		

		}

		var optionSet=function(){
			console.log('optionSet function');

			if(op.type!=null){
				switch(op.type){
					case 'auto':
						opFunc.typeAuto();
						break;
					case 'contorl':
						break;
				}
			}
		}

		

		var defaultOptionSet=function(){
			console.log('defaultOptionSet function');
		}

		

		// ===========================================
		init();
	}
})(jQuery);
//http://www.nextree.co.kr/p9989/