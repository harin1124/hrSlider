(function($){
	$.fn.hrSlider=function(option){
		let op=option;
		let _this=this;
		let SIZE=_this.find('.hr-container li').length;
		console.log('option :',op);

		var init=function(){
			console.log('init function');
			if(op!=undefined&&op!=null){
				optionSet();
			}else{
				defaultOptionSet();
			}
		}

		var getRollingValue=function(el){
			return parseInt(el.css('margin-left').replace('px', ''));
		}

		var opFunc={};
		opFunc.typeAuto=function(){
			let pt=_this.find('.hr-container');
			let delay=(op.delay!=undefined)?op.delay:3000;

			let width=150; // 이 부분은 실제로 값 받아서 처리해야 함
			let maxSize=-1*(width*(pt.children().length-1));
			let cssVal=null;
			
			let autoNextMoveId=null;
			let autoPrevMoveId=null;

			pt.data('view',0);
			autoNextMove();

			function autoNextMove(){
				autoNextMoveId=setInterval(function(){
					pt.data('view', pt.data('view')+1);
					pt.css('margin-left', getRollingValue(pt)-150);
					if(pt.data('view')==4){
						console.log('현재 DATA ' + pt.data('view'))
						clearInterval(autoNextMoveId);
						autoPrevMove();
					}
				}, delay);
			}

			function autoPrevMove(){
				autoPrevMoveId=setInterval(function(){
					pt.data('view', pt.data('view')-1);
					pt.css('margin-left', getRollingValue(pt)+150);
					if(pt.data('view')==0){
						console.log('현재 DATA ' + pt.data('view'))
						clearInterval(autoPrevMoveId);
						autoNextMove();
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
			_this.find('.hr-container').data('view',0);
			$('.btn.prev', _this).on('click', opFunc.prevBtnAction);
			$('.btn.next', _this).on('click', opFunc.nextBtnAction);
		}
		opFunc.prevBtnAction=function(){
			var pt=_this.find('.hr-container');
			if(pt.data('view')>0){
				pt.data('view', pt.data('view')-1);
				pt.css('margin-left',getRollingValue(pt)+150);
			}
		}
		opFunc.nextBtnAction=function(){
			var pt=_this.find('.hr-container');
			if(pt.data('view')<SIZE-1){
				pt.data('view', pt.data('view')+1);
				pt.css('margin-left',getRollingValue(pt)-150);
			}
		}

		var optionSet=function(){
			console.log('optionSet function');
			// ROLLING TYPE
			if(op.type!=null){
				switch(op.type){
					case 'auto':
						opFunc.typeAuto();
						break;
					case 'control':
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