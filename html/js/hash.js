

function cls(){
    $('#page1').fadeOut(500);
    setTimeout(function(){location.href ="#";},350);
    $('.tree').fadeOut(500);
    $('.roll').fadeOut(500);
};   

// JavaScript Document
//
//
$(function($) {
        // 當 hash 改變時 callback 用
        function load(num) {
            $('#con2').load("page" + num +".html");
        }
        
        // 初始化 $.history
        $.history.init(function(url) {
            load(url == "" ? "0" : url);
        });
        
        // 當點擊 #ajax-links 中的超連結時
        $('#ajax-links a').live('click', function(e) {
            var url = $(this).attr('href');
        
        // 取得 #hash 去除掉 # 後的值
        url = url.replace(/^.*#/, '');
        
        // 載入
            $.history.load(url);
            return false;
        });

});
//  