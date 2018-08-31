$(document).ready(function(){
	$(".thanhtam-shopping .owl-carousel").owlCarousel({
		items: 1,
		//nav: true,
		dots: true,
		navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
		// autoHeight:true,
		// autoWidth:true,
		// autoplay:true,
		// autoplayTimeout:500,
		//center:true,
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

  }); 
