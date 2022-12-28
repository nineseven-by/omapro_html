$(document).ready(function() {
	//header-fixed
	var sticky = $('.page-header'),
		scroll = $(window).scrollTop();
  
	if (scroll >= 100) sticky.addClass('fixed');
	else sticky.removeClass('fixed');


	$("body").on("click", ".js-t-contact__btn", function(e){
		e.preventDefault();
		$('.t-modal').fadeIn();
	});

	$("body").on("click", ".t-contact__toggle", function(){
		$(this).toggleClass('active')
	});
	document.addEventListener( 'click', (e) => {
		var div = $( ".t-contact__toggle" );
		if ( !div.is(e.target)
		    && div.has(e.target).length === 0 ) {
			div.removeClass('active')
		}
	})

	$("body").on("click", ".js-t-modal__close", function(e){
		e.preventDefault();
		$('.t-modal').fadeOut();
	});

	$(document).click( function(e){
		var div = $( ".t-modal__inner" );
		if ( div.is(e.target)){
			$('.t-modal').fadeOut();
		}
	});


	//CATALOG-MENU-desktop
	$("body").on("click", ".js-h-bottom__btn", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.c-overlay').fadeToggle();
		$('.h-bottom-menu__view').fadeToggle();
	});
	$("body").on("click", ".c-overlay", function(){
		$(this).fadeOut();
		$('.js-h-bottom__btn').removeClass('active');
		$('.h-bottom-menu__view').fadeOut();
		$('.modal-region').fadeOut();
	});



	$("body").on("click", ".js-header-mobile-toggle", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('body').toggleClass('unactive');
		$('.p-menu-mobile').fadeToggle();
	});



	$("body").on("click", ".js-p-menu-mobile__toggle", function(e){
		e.preventDefault();
		$(this).parents('.p-menu-mobile-item').find('.p-menu-mobile-second').addClass('active');
	});

	//menu-mobile-back
	$("body").on("click", ".js-p-menu-mobile-second__back", function(e){
		e.preventDefault();
		$(this).parents('.p-menu-mobile-item').find('.p-menu-mobile-second').removeClass('active');
	});



	//menu-mobile-catalog
	$("body").on("click", ".js-p-menu-catalog-toggle", function(e){
		e.preventDefault();
		$(this).parents('.p-menu-mobile-catalog__item').find('>.p-menu-mobile-catalog-submenu').addClass('active');

	});
	//menu-mobile--catalog-back
	$("body").on("click", ".js-p-menu-mobile-catalog__back", function(e){
		e.preventDefault();
		$(this).parents('.p-menu-mobile-catalog__item').find('.p-menu-mobile-catalog-submenu').removeClass('active');
	});


	// city-toggle
	$("body").on("click", ".js-t-region__toggle", function(e){
		e.preventDefault();
		$('.c-overlay').fadeIn();
		$('.modal-region').fadeIn();
	});
	$("body").on("click", ".js-modal-region__close", function(e){
		e.preventDefault();
		$('.c-overlay').fadeOut();
		$('.modal-region').fadeOut();
	});



	$('.js-m-login').hover(function(){
		$(this).addClass('active');
		$('.c-overlay').fadeIn(10);
		// $(this).find('.sub-menu').show();
	},function(){
		$(this).removeClass('active');
		$('.c-overlay').fadeOut(10);
		//  $(this).find('.sub-menu').hide();
	});

	$('.js-m-cart').hover(function(){
		$(this).addClass('active');
		$('.c-overlay').fadeIn(10);
		// $(this).find('.sub-menu').show();
	},function(){
		$(this).removeClass('active');
		$('.c-overlay').fadeOut(10);
		//  $(this).find('.sub-menu').hide();
	});



	$("body").on("click", ".js-modal-region-select__icon", function(e){
		e.preventDefault();
		$(this).toggleClass('active');
		$('.modal-region-select-view').toggleClass('active');
	});
	document.addEventListener( 'click', (e) => {
		let div = $( ".modal-region-select__toggle" );
		if ( !div.is(e.target)
		    && div.has(e.target).length === 0 ) {
			$('.modal-region-select-view').removeClass('active');
			$('.modal-region-select__icon').removeClass('active')
		}
	})
});

$(window).scroll(function(){
	var sticky = $('.page-header'),
		scroll = $(window).scrollTop();
  
	if (scroll >= 100) sticky.addClass('fixed');
	else sticky.removeClass('fixed');
});