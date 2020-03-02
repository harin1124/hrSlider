(function($){
	$.fn.hrSlider=function(option){
		let op=option;
		let _this=this;
		let SIZE=_this.find('.hr-container li').length;

		var init=function(){
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

			let width=op.width;
			let maxSize=-1*(width*(pt.children().length-1));
			let cssVal=null;

			let autoNextMoveId=null;
			let autoPrevMoveId=null;

			pt.data('view',0);
			autoNextMove();

			function autoNextMove(){
				autoNextMoveId=setInterval(function(){
					pt.data('view', pt.data('view')+1);
					pt.css('margin-left', getRollingValue(pt)-width);
					if(pt.data('view')==4){
						clearInterval(autoNextMoveId);
						autoPrevMove();
					}
				}, delay);
			}

			function autoPrevMove(){
				autoPrevMoveId=setInterval(function(){
					pt.data('view', pt.data('view')-1);
					pt.css('margin-left', getRollingValue(pt)+width);
					if(pt.data('view')==0){
						clearInterval(autoPrevMoveId);
						autoNextMove();
					}
				}, delay);
			}
		}

		opFunc.createButton=function(){
			if(op.button!=null&&op.button!=undefined){
				if(op.button.prevEl.length>0&&op.button.nextEl.length>0){
					opFunc.initMoveBtn(op.button.prevEl, op.button.nextEl);
				}else{
					throw new Error("custom button element empty or not found");
				}
			}else{
				var $el=$('<div class="hr-btn-container"></div>');
				$el.append($('<button type="button" class="btn prev">prev</button>'));
				$el.append($('<button type="button" class="btn next">next</button>'));
				_this.append($el);
				opFunc.initMoveBtn($('.hr-btn-container .btn.prev'), $('.hr-btn-container .btn.next'));
			}

			
		}
		opFunc.initMoveBtn=function(prevEl, nextEl){
			_this.find('.hr-container').data('view',0);
			$(prevEl, _this).on('click', opFunc.prevBtnAction);
			$(nextEl, _this).on('click', opFunc.nextBtnAction);
		}
		opFunc.prevBtnAction=function(){
			var pt=_this.find('.hr-container');
			if(pt.data('view')>0){
				pt.data('view', pt.data('view')-1);
				pt.css('margin-left',getRollingValue(pt)+op.width);
			}
		}
		opFunc.nextBtnAction=function(){
			var pt=_this.find('.hr-container');
			if(pt.data('view')<SIZE-1){
				pt.data('view', pt.data('view')+1);
				pt.css('margin-left',getRollingValue(pt)-op.width);
			}
		}

		opFunc.sizeSetting=function(){
			_this.css('width',op.width);
			$('.hr-container', _this).css('width',op.width*SIZE);
			$('.hr-container .hr-slider', _this).css('width',op.width);
			$('.hr-container .hr-slider > *', _this).css('width',op.width);
		}

		var optionSet=function(){
			console.log('optionSet function');
			// WIDTH
			if(op.width!=null&&op.width!=undefined){
				opFunc.sizeSetting();
			}else{
				op.width=150;
				opFunc.sizeSetting();
			}

			// ROLLING TYPE
			if(op.type!=null){
				switch(op.type){
					case 'auto':
						opFunc.typeAuto();
						break;
					case 'button':
						opFunc.createButton();
						break;
				}
			}
		}

		var defaultOptionSet=function(){
		}
		// ===========================================
		init();
	}
})(jQuery);