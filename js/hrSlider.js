(function($){
	$.fn.hrSlider=function(option){
		let op=option;
		let _this=this;

		console.log(op)

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
			let pt=_this.children();
			let len=pt.children().length;
			let delay=(op.delay!=undefined)?op.delay:3000;

			let width=150;
			let maxSize=-1*(width*(len-1));
			let cssVal=null;
			
			let autoRightMoveId=null;
			let autoLeftMoveId=null;


			autoRightMove();

			function autoRightMove(){
				autoRightMoveId=setInterval(function(){
					cssVal=parseInt(pt.css('margin-left').replace('px'))-150;
					pt.css('margin-left', cssVal);
					if(cssVal==maxSize){
						clearInterval(autoRightMoveId);
						autoLeftMove();
					}
				}, delay);
			}

			function autoLeftMove(){
				autoLeftMoveId=setInterval(function(){
					cssVal=parseInt(pt.css('margin-left').replace('px',''))+150;
					pt.css('margin-left',cssVal);
					if(cssVal==0){
						clearInterval(autoLeftMoveId);
						autoRightMove();
					}
				}, delay);
			}
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