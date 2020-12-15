  jQuery(document).ready(function($) {
  $('.count').counterUp({
    delay: 10,
    time: 2000,
       });  
	   $('#bar1').barfiller({ barColor: "",tooltip: true,duration: 2000, animateOnResize: true, symbol: "%"});
	   $('#bar2').barfiller({ barColor: "",tooltip: true,duration: 2000, animateOnResize: true, symbol: "%"});
	   $('#bar3').barfiller({ barColor: "",tooltip: true,duration: 2000, animateOnResize: true, symbol: "%"});
	   $('#bar4').barfiller({ barColor: "",tooltip: true,duration: 2000, animateOnResize: true, symbol: "%"});
	   
	      //mixitup
		    // mixitup
		    var content = document.querySelector('.gallery');
		  
		  var mixer = mixitup(content, {
				selectors: {
					control: '[mixit-item]'
				},
				
			});
		  //owl-carousel
		
		
		   $(".owl-carousel-one").owlCarousel({
				  autoplay:true,
				  loop:true,
				  autoplayTimeout:3000,
				  smartSpeed:300,
			          responsive:{
						0:{
							items:1
						},
						600:{
							items:2
						},
						1000:{
							items:3
						}
					}
				
				});
				   $(".owl-carousel-two").owlCarousel({
				  margin:25,
				  autoplayTimeout:3000,
				  smartSpeed:300,
				  loop:true,
				  nav:true,
			          responsive:{
						0:{
							items:1
						},
						600:{
							items:2
						},
						1000:{
							items:3
						}
					}
				
				});
		
		 // menu-fixed 
	 
	$(window).scroll(function(){
		
	 var scrolling = $(this).scrollTop();
	
	 if(scrolling>0){
		
		$('.menu-area').addClass('fixed');
	 }else{
		  $('.menu-area').removeClass('fixed');
	 }
	 
	 });
		
		
 $('#nav').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 750,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
	
});
		
		//wow.js
		new WOW().init();
		
		
		//type.js
		
		var typed = new Typed('.type', {
	     strings: ['Parvez Mosharof','I am a Designer', 'I am a Developer '],
	       typeSpeed:60,
		   backSpeed:60,
		   loop:true
        });
		
		
		
		
		
		
     });