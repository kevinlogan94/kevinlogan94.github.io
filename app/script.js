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

    /* ------- */
    
    $(".container").click(function(){
        $(".container").toggleClass('changed');
      });
})