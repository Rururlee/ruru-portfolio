$(window).scroll(function() {
    var scrollTop = $(window).scrollTop();
    var height = $(window).height();
    $('#fadeout').css({
        'opacity': ((height - scrollTop) / height),
        '-khtml-opacity': ((height - scrollTop) / height)
    });
});


// $('.header__nav a:nth-child(2)').click(function() {
//     $('html,body').animate({ scrollTop: $('#work').offset().top + 35 }, 500);
// });
// $('#goto').click(function() {
//     $('html,body').animate({ scrollTop: $('#work').offset().top + 35 }, 500);
// });