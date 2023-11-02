$(function () {
    $('#nav_toggle').click(function () {
        $(".header").toggleClass('open');
        $("#nav").slideToggle(500);
    });
    if (isSP) {
        $('#nav ul li a').click(function () {
            $("#nav").css('display', 'none');
            $(".header").removeClass('open');
        });
    }
});


$(function () {
    var headerHight = $('.header').height(); //ヘッダの高さ
    if(isSP){
            var marginTop = 0;
        }else{
            var marginTop = 30;
        };
    $('a[href^="#"]').click(function () {
        var speed = 400;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHight - marginTop;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});