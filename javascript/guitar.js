$(function() {
    var nav = $(".flex-nav");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 5) {
            nav.removeClass('flex-nav').addClass("flex-nav-alt");
        } else {
            nav.removeClass("flex-nav-alt").addClass('flex-nav');
        }
    });
});

$(document).ready(function(){
	$('.about-me__content__nav-bar__heading-tertiary').bind('click', function() {
		$('.profile').hide();
		$('#' + $(this).attr('id') + '-content').show();
		$('.about-me__content__nav-bar__heading-tertiary').removeClass('about-me__content__nav-bar__heading-tertiary-selected');
		$(this).addClass('about-me__content__nav-bar__heading-tertiary-selected');
	});
	
});
    
