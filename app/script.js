/* --- On Ready --- */
$(document).ready(function () { 
    desktopWidth();
    // Work scroll animation
    $('.Work').click(function () {
        if(em >= 48) { $('html,body').animate({scrollTop: $('#work').offset().top - 35}, 1000); }
        else { $('html,body').animate({scrollTop: $('#work').offset().top + 5}, 1000); }
    });

    // The Now scroll animation
    $('.TheNow').click(function () {
        if(em >= 48) { $('html,body').animate({scrollTop: $('#TheNow').offset().top - 35}, 1000); }
        else { $('html,body').animate({scrollTop: $('#TheNow').offset().top + 5}, 1000); }
    });

    // Home scroll animation
    $('.Home').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });

    // Projects scroll animation
    $('.Projects').click(function () {
        if(em >= 48) { $('html,body').animate({scrollTop: $('#Projects').offset().top - 35}, 1000); }
        else { $('html,body').animate({scrollTop: $('#Projects').offset().top + 5}, 1000); }
    });

    // Connect scroll animation
    $('.Connect').click(function () {
        if(em >= 48) { $('html,body').animate({scrollTop: $('#Connect').offset().top - 35}, 1000); }
        else { $('html,body').animate({scrollTop: $('#Connect').offset().top + 5}, 1000); }
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
        evt.stopPropagation(); //stops 'body' event handler from removing these classes.
        $(this).toggleClass('changed');
        $('.mobile-menu-item').toggleClass('mobile-menu-active');
    });
});

var em;
function desktopWidth() { em = $(window).width() / parseFloat($("html").css("font-size"))}
$(window).resize(desktopWidth);

/* --- isElementInViewport identifier --- */

var menuHeight;
var rect;
function isElementInViewport (el) {
    rect = el.getBoundingClientRect();
    menuHeight = 0;
    // we want the height and padding
    if(em >= 48) { menuHeight = $('.pure-menu-horizontal').height() + (0.5 * parseFloat($("html").css("font-size")));}
    footerHeight = $('.footer').height() + (parseFloat($("html").css("font-size")));   
    return (
        rect.top >= (0 - rect.height + menuHeight) &&
        rect.bottom <= ((window.innerHeight + rect.height - footerHeight) || (document.documentElement.clientHeight + rect.height - footerHeight))
    );
}