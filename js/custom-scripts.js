$(document).ready(function() {

	/* SCROLL ANIMATION */
	$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
    	|| location.hostname == this.hostname) {

    	var target = $(this.hash);
    	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
       		if (target.length) {
        		 $('html,body').animate({
            		scrollTop: target.offset().top
        		}, 600);
        		return false;
    		}
		}
	});

	/* ADD CLASS TO MENU ON SCROLL */
	// Header shadow

	$(window).scroll(function() {

		var scroll = $(window).scrollTop();

	    if (scroll >= 80) {
	        $('.navigation').addClass('short');
	    } else{
	        $('.navigation').removeClass('short');
	    }
	});

	$(window).scroll(function() {

		var scroll = $(window).scrollTop();

	    if (scroll >= 800) {
	        $('.navigation').addClass('opacity');
	    } else{
	        $('.navigation').removeClass('opacity');
	    }
	});

	// ADD CLICK EVENT TO MOBILE MENU
	$('.mobile-nav-btn').click(function(){
		$('.top-navigation').toggleClass ('top-mobile');
	});

    // ACTIVE LINK

  $('.top-navigation li a').click(function(e) {
    e.preventDefault();
    $(this).parent().parent().find('.active').removeClass('active');
    $(this).addClass('active');
    window.location.pathname = $(this).attr('href');
  });

});//end document ready
