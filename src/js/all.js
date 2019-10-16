$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('.fadeout').css({
        'opacity': ((height - scrollTop) / height),
        '-khtml-opacity': ((height - scrollTop) / height)
    });
});


