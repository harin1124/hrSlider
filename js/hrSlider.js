(function($){
	$.fn.hrSlider=function(option){
		let op=option;
		let _this=this;
		console.log('option :: ',op);

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
			let delay=(op.delay!=undefined)?op.delay:3000;

			let width=150; // 이 부분은 실제로 값 받아서 처리해야 함
			let maxSize=-1*(width*(pt.children().length-1));
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

		opFunc.createButton=function(){
			var $el=$('<div class="hr-btn-container"></div>');
			$el.append($('<button type="button" class="btn prev">prev</button>'));
			$el.append($('<button type="button" class="btn next">next</button>'));
			_this.append($el);
			opFunc.initMoveBtn();
		}

		opFunc.initMoveBtn=function(){
			$('.btn.prev', _this).on('click', function(){
				console.log('prev btn click!');
			});

			$('.btn.next', _this).on('click', function(){
				console.log('next btn click!');
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

				if(op.button==true){
					opFunc.createButton();
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