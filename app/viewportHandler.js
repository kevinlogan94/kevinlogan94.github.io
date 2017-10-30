function onVisibilityChange(el, callback) {
    return function () {
        var visible = isElementInViewport(el);
        if (typeof callback == 'function'){
            callback(visible);
        }
    }
}
var handler = onVisibilityChange(document.getElementById('work'), function(visible) {
    if(visible) {
      console.log('yes');
    } else {
      console.log('no');
    }
});

$(window).on('DOMContentLoaded load resize scroll', handler);