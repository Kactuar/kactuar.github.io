$(function(){
	$('.carousel').carousel({
		interval: 0
	})
	/*collapse*/
	$('.okno_13 .panel-title').bind('click', function(){
		$('.okno_13 .panel-title').attr('class', 'panel-title');
		$(this).addClass("active");
		if($(this).find('a').attr('aria-expanded')=='true'){
			$(this).attr('class', 'panel-title');
		}
	});
	/*dropdown*/
	$('.dropdown>li.dropdown-submenu').on('click', function(event) {
		event.stopPropagation(); 
		
		if ($(this).hasClass('open')){
			$(this).removeClass('open');
		}else{

			$(this).addClass('open');
		}
	});

	$('.okno_15_form>.dropdown>a').attr('onclick','return false');

	$('.okno_15_form .dropdown-toggle').on('click', function(event) {
		event.stopPropagation(); 

		if ($(this).parent().hasClass('open')){
			$(this).parent().removeClass('open');
		}else{

			$(this).parent().addClass('open');
		}
	});

	$('.okno_15_form .dropdown-menu').on('click', function(event) {
		event.stopPropagation(); 

		
		if ($(this).parent().hasClass('open')){
			$(this).parent().addClass('open');
		}else{

			$(this).parent().addClass('open');
		}
	});
	/*select*/
	$('.cart_number, select').styler({
		selectSearch: true,
	});
	

});