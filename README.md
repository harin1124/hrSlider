## Minimal Requirements

- jQuery (jquery.min.js)
- HR Slider CSS File (style.css)
- HR Slider JS File (hrSlider.js)

## Use

**in head**

	<link rel="stylesheet" href="css/style.css">
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/hrSlider.js"></script>

**in body**

	<div class="myContainer hr-wrap">
		<ul class="hr-container">
			<li class="hr-slider">1 content</li>
			<li class="hr-slider">2 content</li>
			<li class="hr-slider">3 content</li>
			<li class="hr-slider">4 content</li>
			<li class="hr-slider">5 content</li>
		</ul>
		<div class="customButton prevBtn"><button type="button">이전</button></div>
		<div class="customButton nextBtn"><button type="button">다음</button></div>
	</div>
	
**in JAVASCRIPT**

	$('.myContainer').hrSlider();

## Option

	<div class="myContainer hr-wrap">
		<ul class="hr-container">
			<li class="hr-slider">1 content</li>
			<li class="hr-slider">2 content</li>
			<li class="hr-slider">3 content</li>
			<li class="hr-slider">4 content</li>
			<li class="hr-slider">5 content</li>
		</ul>
		<div class="customButton prevBtn"><button type="button">이전</button></div>
		<div class="customButton nextBtn"><button type="button">다음</button></div>
	</div>
	
	$('.myContainer').hrSlider({
		type:'button',
		delay:1000,
		button:{prevEl:$('.customButton.prevBtn'), nextEl:$('.customButton.nextBtn')},
	});

- type (value type:string)
	- auto : automatically move.
	- button : click button to move. 
- delay (value type:integer)
- button : [type] as [button] and register an event with the button element.

---

#### WORK HISTORY

- 2020-02-17 slider auto rolling function base fin.
- 2020-02-22 slider control(button) rolling function base fin.
- 2020-02-23 slider custom button element event add fin.
- 2020-02-26 slider width size option & default setting fin.
- 2020-03-03 API Document sample version fin.