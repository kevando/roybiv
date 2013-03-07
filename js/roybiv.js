$(document).ready(function(){
	// Initially hide the navigation
    $("#nav-logo").hide();
    $("#nav-green").hide();
	$('#pane-1-tagline').css("marginTop","50px");
    $('#pane-1-content h1').hide();
	$('.top-navigation').hide();
	$('.uncover-more').hide();
	$('.main-tagline').hide();
	$('.main-tagline').delay(600).fadeIn(600);
	$('.uncover-more').delay(3000).fadeIn(1500);

	$('.content-row .img .ux').hide();
	$('.content-row .img .design').hide();
	$('.content-row .img .dev').hide();
	$('.graph-details').hide();


    $(function () {
        $(window).scroll(function () {
			// ROYBIV Logo reaches navbar
            if ($(this).scrollTop() > 290) {
                $('.main-logo').hide();
	            $('#nav-logo').show();
				$('#nav').fadeIn(400);
				
            } else {
                $('#nav-logo').hide();
				$('.main-logo').show();
				$('#nav').fadeOut(400);
            }
			// 'green' reaches nav bar
			if ($(this).scrollTop() > 300) {
	           $('#nav-green').show();
	           $('.green-link').hide();
	       } else {
	           	$('#nav-green').hide();
	           	$('.green-link').show();
	       }
			// page reaches 2nd pane, animate the content
           if ($(this).scrollTop() > 890) {
			$('.content-row .img .ux').delay(200).fadeIn(600);
			$('.content-row .img .design').delay(1100).fadeIn(600);
			$('.content-row .img .dev').delay(2100).fadeIn(600);
           }
			// Set navbar for certain conditions
			if ($(this).scrollTop() > 960) {
	           $('#nav-green h4').css("color","rgb(70, 70, 70)");
	       } else {
	           	$('#nav-green h4').css("color","#83bc78");
	       }

        });
	
	// For media query style things
	$(window).resize(function() {
		var width = $(window).width();
		if (width < 1500) {
			$('.content-row .img .ux').show();
			$('.content-row .img .design').show();
			$('.content-row .img .dev').show();		}
		else {
			//Do Something Else
		}
	});

    });

	    $('.green-link').click(function(){ 
			$('html, body').animate({
			    scrollTop: $("#finding-the-green").offset().top
			 }, 1000);
	    });
	    
		$('#nav-green').click(function(){ 
			$('html, body').animate({
			    scrollTop: $("#finding-the-green").offset().top
			 }, 1000);
	    });

	
		$('.nav-contact').click(function(){ 
			$('html, body').animate({
			    scrollTop: $("#ajax-contact").offset().top
			 }, 1000);
	    });
	
		$('#nav-logo').click(function(){ 
			$('html, body').animate({scrollTop: 0}, 1000);
	    });
	
		$('.graph-question').mouseover(function(){ 
			$('.graph-details').fadeIn(400);
	    });
	
		$('.graph-question').mouseout(function(){ 
			$('.graph-details').fadeOut(400);
	    });
	
	
	/* do this later
		$('li .ux').mouseover(function(){ 
			$('.content-row .img .ux').animate({
				
			});
	    });
	*/
	
	
	
	
	});
