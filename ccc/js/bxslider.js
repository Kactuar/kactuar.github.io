$(document).ready(function(){
	var doc_w = $('.okno_5').width();
	var doc_w_2 = $('.okno_8').width();

	if(doc_w>767 && doc_w<992) {
		$('.slider').bxSlider({
			slideWidth: 233,
			minSlides: 1,
			maxSlides: 10,
			moveSlides: 1,
			slideMargin: 30
		});
	}
	else if(doc_w>=992){
		$('.slider').bxSlider({
			slideWidth: 270,
			minSlides: 1,
			maxSlides: 10,
			moveSlides: 1,
			slideMargin: 30
		});
	}
	else{
		$('.slider').bxSlider({
			slideWidth: 170,
			minSlides: 1,
			maxSlides: 10,
			moveSlides: 1,
			slideMargin: 5
		});
	}

	if(doc_w_2<=480) {
		$('.okno_8 .okno_8_row_2 .col-xs-4').each(function(){
			$(this).appendTo('.okno_8_row_1');
		});
	}

	


});