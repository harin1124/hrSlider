(function($){
	$.fn.hrSlider=function(option){
		let op=option;
		let _this=this;

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
			let len=pt.children().length-1;

			let width=150;
			let maxSize=-1*(width*len);
			let cssVal=null;
			

			let autoRightMoveId=null;
			let autoLeftMoveId=null;
			autoRightMove();

			function autoRightMove(){
				autoRightMoveId=setInterval(function(){
					cssVal=parseInt(pt.css('margin-left').replace('px','').replace('-',''));
					debugger;
					if(cssVal==maxSize){
						clearInterval(autoRightMoveId);
					}else{
						pt.css('margin-left',(cssVal+150)*-1);
					}

					
					
					
					
				}, 1500);
			}

			function autoLeftMove(){
				let pt=_this.children();
				let cssVal=null;
				autoLeftMoveId=setInterval(function(){
					cssVal=pt.css('margin-left').replace('px','');
					
					//pt.css({marginLeft:parseInt(pt.css('margin-left').replace('px',''))+150});
					if(cnt==len){
						pt.css({marginLeft:0});
						clearInterval(autoLeftMove);
						cnt=1;
						console.log('이제 다시 오른쪽으로 이동할 차례')
						autoRightMove();
					}else{
						pt.css({marginLeft:parseInt(cssVal)+150});
						cnt++;
					}
				},1500);
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