$(document).ready(function () {
    
    //this will attach the class to every target 
    $('.pure-menu-item').click(function () {
        $(".pure-menu-item").removeClass("pure-menu-selected");
        $(this).addClass('pure-menu-selected');

        $('html,body').animate({
            scrollTop: $('.footer').offset().top
        }, 1000);
    });

})