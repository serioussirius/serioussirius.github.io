$(document).ready(function () {
    var $equalHeight = $('.equalHeight');
    var maxHeight = 0

    $equalHeight.each(function() {
        maxHeight = Math.max(maxHeight, $(this).outerHeight());
    });

    $equalHeight.css({height: maxHeight + 'px'});
});
