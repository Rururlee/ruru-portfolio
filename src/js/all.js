import luxy from 'luxy.js';
import baguetteBox from 'baguettebox.js';
import bsn from 'bootstrap.native/dist/bootstrap-native-v4';

//luxy
var w = window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
if (w > 800) {
    luxy.init({
        wrapper: '#luxy',
        targets: '.luxy-el',
        wrapperSpeed: 0.08
    });

} else {
    luxy.uninit()
};

// Lightbox 
baguetteBox.run('.baguetteBox-gallery');


/* 按下GoTop按鈕時的事件 */
$(function() {
    /* 按下GoTop按鈕時的事件 */
    $('#gotop').click(function() {
        $('html,body').animate({ scrollTop: 0 }, 'slow'); /* 返回到最頂上 */
        return false;
    });

    /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('#gotop').fadeIn(300);
        } else {
            $('#gotop').fadeOut();
        }
    });
});