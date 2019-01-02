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

    
    
