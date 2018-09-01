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
	//$(this).find('.body').hide()
	

		$(e).on('mouseover', function(){
			$(this).addClass("animated lightSpeedOut")
			//$(this).removeClass("animated lightSpeedOut")
			//$(this).parents('.item').find('.body').show()
		}).on('mouseout', function(){
			$(this).removeClass("animated lightSpeedOut")
			$(this).addClass("animated lightSpeedIn")
			//$(this).parents('.item').find('.body').show()
		})
		
	})
$('.thanhtam-quote figure').each(function(){
	var f = $(this).find('img')
	//$(this).find('.body').hide()
	

		$(f).on('mouseover', function(){
			$(this).addClass("animated infinite pulse")
			//$(this).removeClass("animated lightSpeedOut")
			//$(this).parents('.item').find('.body').show()
		}).on('mouseout', function(){
			$(this).removeClass("animated")
			//$(this).parents('.item').find('.body').show()
		})
		
	})
  }); 
  