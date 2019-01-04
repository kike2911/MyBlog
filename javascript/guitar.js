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
		$('.eyelash').hide();
		$('#' + $(this).attr('id') + '-content').show();
		$('.about-me__content__nav-bar__heading-tertiary').removeClass('about-me__content__nav-bar__heading-tertiary-selected');
		$(this).addClass('about-me__content__nav-bar__heading-tertiary-selected');
	});
	
});




    
$(document).ready(function(){
	$('.skills__nav-bar__item').bind('click', function() {
		$('.skills-robotics').hide();
		$('#' + $(this).attr('id') + '-skills-content').show();
		$('.skills__nav-bar__item').removeClass('skills__nav-bar__item-selected');
		$(this).addClass('skills__nav-bar__item-selected');
	});
	
});