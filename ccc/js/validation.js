$(document).ready(function() { 
	$('.js-amx-recovery').click( function(event){ 
		event.preventDefault(); 
		$('#js-amx-overlay').fadeIn(400, 
		 	function(){ // пoсле выпoлнения предъидущей aнимaции
				$('.js-amx-modal_form') 
					.css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
					.animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
		});
	});	
	$('.js-amx-modal__header_close, #js-amx-overlay').click( function(){ 
		$('.js-amx-modal_form')
			.animate({opacity: 0, top: '45%'}, 200,
				function(){ 
					$(this).css('display', 'none'); 
					$('#js-amx-overlay').fadeOut(400);
				}
			);
	});
});

var totalScore = 0;
var speed = 0, control = 0, soft = 0, cutting = 0;
var amountStar = $('.amx-modal__star-parametrs > div > span.amx-modal__star_wrap').length;

$(document).ready(function() { 
	$('.amx-modal__star-parametrs > div > span > i').mouseover(function() {
		$(this).addClass('amx-modal__star_on');
		$(this).prevAll().addClass('amx-modal__star_on');
		$(this).nextAll().removeClass('amx-modal__star_on');
		$(this).click(function(){			
			$(this).css('color','gold');
			$(this).prevAll().css('color','gold');
			$(this).nextAll().css('color','grey');

			if ($(this).hasClass('amx-modal__star_speed')) speed = +$(this).attr('data-value');
			if ($(this).hasClass('amx-modal__star_control')) control = +$(this).attr('data-value');
			if ($(this).hasClass('amx-modal__star_soft')) soft = +$(this).attr('data-value');
			if ($(this).hasClass('amx-modal__star_cutting')) cutting = +$(this).attr('data-value');			
			totalScore = Math.floor( (speed + control + soft + cutting) / amountStar);			
			$('.amx-modal-score').html(totalScore);

			$($('.amx-modal__total-star > div > i')[totalScore-1]).css('color','gold');
			$($('.amx-modal__total-star > div > i')[totalScore-1]).prevAll().css('color','gold');
			$($('.amx-modal__total-star > div > i')[totalScore-1]).nextAll().css('color','grey');
		})
	})
})

$(function(){

  $('.js-amx-recovery').on('click', function(e) {
  	e.preventDefault();  	
    $(".bs-example-modal-sm").modal('hide');
    $(".amx-modal-recovery-pass").modal('show');
	})

   $('.js-amx-close').on('click', function(e) {
   	e.preventDefault();  	
	$(".amx-modal-recovery-pass").modal('hide');
   })
});