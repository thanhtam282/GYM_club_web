$(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		items: 6,
		nav: true,
		dots: false,
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
				items: 2,
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

  }); 
