$(document).ready(function(){
	$(".thanhtam-shopping .owl-carousel").owlCarousel({
		items: 1,
		//nav: true,
		dots: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		loop:true,
		responsive: {
			// breakpoint from 480 up
			480: {
				items: 1,
			},
			640: {
				items: 1,
			},
			// breakpoint from 768 up
			768: {
				items: 1,
			},
			// breakpoint from 992 up
			992: {
				items: 1,
			}
		}
	});
	$(".home-slider .owl-carousel").owlCarousel({
		items: 1,
		nav: true,
		dots: false,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		loop:true,
		responsive: {
			// breakpoint from 480 up
			480: {
				items: 1,
			},
			640: {
				items: 3,
			},
			// breakpoint from 768 up
			768: {
				items: 4,
			},
			// breakpoint from 992 up
			992: {
				items: 6,
			}
		}
	});

$('.thanhtam-banner a').each(function(){
	var e = $(this).find('.btn-detail')
	$(window).width(function(){
		var width = $(window).width();
		if(width > 900) {
			$(e).on('mouseover', function(){
				$(this).addClass("animated lightSpeedOut")
				//$(this).addClass("animated infinite pulse")
			}).on('mouseout', function(){
				$(this).removeClass("animated lightSpeedOut")
				$(this).addClass("animated lightSpeedIn")
			})
		}
		else {
			$(e).on('mouseover', function(){
				$(this).removeClass("animated")
			})
		}
	})
	
	$(window).resize(function(){
		var width = $(window).width();
		if(width > 900) {
			$(e).on('mouseover', function(){
				$(this).addClass("animated lightSpeedOut")
				//$(this).addClass("animated infinite pulse")
			}).on('mouseout', function(){
				$(this).removeClass("animated lightSpeedOut")
				$(this).addClass("animated lightSpeedIn")
			})
		}
		else {
			$(e).on('mouseover', function(){
				$(this).removeClass("animated")
			})
			$(e).on('mouseout', function(){
				$(this).removeClass("animated")
			})
		}
	})
	})


$('.thanhtam-quote figure').each(function(){
	var f = $(this).find('img')
	$(window).width(function(){
		var width = $(window).width();
		if(width > 900) {
			$(f).on('mouseover', function(){
				$(this).addClass("animated infinite pulse")
			}).on('mouseout', function(){
				$(this).removeClass("animated")
			})
		}
		else {
			$(f).on('mouseover', function(){
				$(this).removeClass("animated")
			})
		}
	})
	$(window).resize(function(){
		var width = $(window).width();
		if(width > 900) {
			$(f).on('mouseover', function(){
				$(this).addClass("animated infinite pulse")
			}).on('mouseout', function(){
				$(this).removeClass("animated")
			})
		}
		else {
			$(f).on('mouseover', function(){
				$(this).removeClass("animated")
			})
		}
	})
		
	})



  }); 
  