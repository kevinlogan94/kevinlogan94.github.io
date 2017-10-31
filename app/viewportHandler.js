function onVisibilityChange(el, callback) {
    return function () {
        var visible = isElementInViewport(el);
        if (typeof callback == 'function'){
            callback(visible);
        }
    }
}
var workHandler = onVisibilityChange(document.getElementById('workContent'), function(visible) {
    visible ? $('.Work').addClass('active') : $('.Work').removeClass('active');
});
var projectsHandler = onVisibilityChange(document.getElementById('Projects'), function(visible) {
    visible ? $('.Projects').addClass('active') : $('.Projects').removeClass('active');
});
var theNowHandler = onVisibilityChange(document.getElementById('TheNow'), function(visible) {
    visible ? $('.TheNow').addClass('active') : $('.TheNow').removeClass('active');
});
var connectsHandler = onVisibilityChange(document.getElementById('Connect'), function(visible) {
    visible ? $('.Connect').addClass('active') : $('.Connect').removeClass('active');
});


$(window).on('DOMContentLoaded load resize scroll', function() {
    workHandler();
    projectsHandler();
    theNowHandler();
    connectsHandler();
});