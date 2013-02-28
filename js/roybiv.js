$(document).ready(function(){
	// Initially hide the navigation
    $("#nav-logo").hide();
    $("#nav-green").hide();
	$('#pane-1-tagline').css("marginTop","50px");
    $('#pane-1-content h1').hide();


    $(function () {
        $(window).scroll(function () {
			// ROYBIV Logo reaches navbar
            if ($(this).scrollTop() > 310) {
                $('#pane-1-logo').hide();
	            $('#nav-logo').show();
				$('#pane-1-tagline').css("marginTop","315px");
            } else {
                $('#nav-logo').hide();
				$('#pane-1-tagline').css("marginTop","0px");
				$('#pane-1-logo').show();
            }
			// 'green' reaches nav bar
			if ($(this).scrollTop() > 380) {
	           $('#nav-green').show();
	           $('#green-link').hide();
	       } else {
	           	$('#nav-green').hide();
	           	$('#green-link').show();
	       }
			if ($(this).scrollTop() > 960) {
	           $('#nav-green h4').css("color","rgb(70, 70, 70)");
	           $('#nav-contact h4').css("color","#83bc78");
	       } else {
	           	$('#nav-green h4').css("color","#83bc78");
	           	$('#nav-contact h4').css("color","rgb(70, 70, 70)");
	       }

        });
	

    });

	    $('#green-link').click(function(){ 
			$('html, body').animate({
			    scrollTop: $("#finding-the-green").offset().top
			 }, 1000);
	    });
	    
		$('#nav-green').click(function(){ 
			$('html, body').animate({
			    scrollTop: $("#finding-the-green").offset().top
			 }, 1000);
	    });

	
		$('#nav-contact p').click(function(){ 
			$('html, body').animate({
			    scrollTop: $("#ajax-contact").offset().top
			 }, 1000);
	    });
	
		$('#nav-logo h1').click(function(){ 
			$('html, body').animate({scrollTop: 0}, 1000);
	    });
	
	
	});
