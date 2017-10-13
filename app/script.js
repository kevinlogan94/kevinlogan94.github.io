$(document).ready(function () {
    
    $('.Passion').click(function () {
        $('html,body').animate({
            scrollTop: $('#passions').offset().top - 35
        }, 1000);
    });
    $('.Doing').click(function () {
        $('html,body').animate({
            scrollTop: $('#Doing').offset().top - 35
        }, 1000);
    });
    $('.Home').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000);
    });
    $('.Projects').click(function () {
        $('html,body').animate({
            scrollTop: $('#Projects').offset().top - 35
        }, 1000);
    });
    $('.Contact').click(function () {
        $('html,body').animate({
            scrollTop: $('#Contact').offset().top - 35
        }, 1000);
    });

    /* --- Click anything and the menu disapears and icon gets unflipped. ---- */

    $('body').click(function(){
        if($(".container").hasClass("changed")){
            $(".mobile-menu-active").removeClass('mobile-menu-active');
            $(".changed").removeClass('changed');
        }
      });

    /* ---- Click menu icon--- */
    
    $('.container').click(function(evt){
        evt.stopPropagation();
        $(this).toggleClass('changed');
        $('.mobile-menu-item').toggleClass('mobile-menu-active');
    });
})