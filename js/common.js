
// Meganavi

$(function () {
  $('.wrap div').click(function() {
    if ($(this).attr('class') == 'selected') {
      // メニュー非表示
      $(this).removeClass('selected').next('ul.gnavi div.service , ul.gnavi div.company').slideUp('fast');
    } else {
      // 表示しているメニューを閉じる
      $('.wrap div').removeClass('selected');
      $('ul.gnavi div.service , ul.gnavi div.company').hide();

      // メニュー表示
      $(this).addClass('selected').next('ul.gnavi div.service , ul.gnavi div.company').slideDown('fast');
    }
  });

  var over_flg;
  // マウスカーソルがメニュー上/メニュー外
  $('.wrap div , ul.gnavi div.service , ul.gnavi div.company').hover(function(){
    over_flg = true;
  }, function(){
    over_flg = false;
  });

  // メニュー領域外をクリックしたらメニューを閉じる
  $('body').click(function() {
    if (over_flg == false) {
      $('.wrap div').removeClass('selected');
      $('ul.gnavi div.service , ul.gnavi div.company').slideUp('fast');
    }
  });
});

// accordion

$(function(){
var w = $(window).width();
	var x = 1001;
    if (w <= x) {
    $( "#link h4" ).click(function(){

    $(this).next("ul").slideToggle();
    $(this).toggleClass("open");
    });
    }

    $("#rightColumn h2").click(function(){
        $(this).next("ul").slideToggle();
        $(this).toggleClass("open");
    });
});

/*$(function(){

$("#rightColumn h2").click(function(){
    $(this).next("ul").slideToggle();
    $(this).toggleClass("open");
});


});


$(function(){
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 && ua.indexOf('iPod') == -1 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0 ){
    $( "#link h4" ).click(function(){
    $(this).next("ul").slideToggle();
    $(this).toggleClass("open");
    });
    }
});*/


// go top

$(function(){
		$('#pagetop a , .linktop a').click(function(){
		$('html,body').animate({ scrollTop: $($(this).attr("href")).offset().top }, 'slow','swing');
		return false;
		});
});

// search


$(function(){
    var target;

    $('#searchbox , #mainSearchbox').show(function(){
        target = $(this).attr('title');
        if ($(this).val() == target || $(this).val() == '')
            $(this).css({color:'#666'}).val(target);
    }).focus(function(){
        if ($(this).val() == target)
            $(this).val('');
    }).blur(function(){
        if ($(this).val() == '')
            $(this).css({color:'#666'}).val(target);
    });

});

// 現在のページclassとナビのclassがマッチしたらクラスを追加


$(function(){
	var pagename = $('body').attr('class');

	$.each($('#rightColumn nav .' + pagename), function(i, active){
	$(active).addClass("current");
	$(this).closest("ul").prev("h2").addClass("open");
	$(this).closest("ul").css('display','block');
});

	$.each($('#rightColumn aside .' + pagename), function(i, active){
	$(active).addClass("current");
	$(this).closest("ul").prev("h2").addClass("open");
	$(this).closest("ul").css('display','block');
});

	$('aside h2.contact01').click(function(){
		$("aside h2.contact02").removeClass("current");
		$(this).addClass("current");
	});
		$('aside h2.contact02').click(function(){
			$("aside h2.contact01").removeClass("current");
		$("aside h2.contact02").addClass("current");
	});

		$("aside h2.contact01","aside h2.contact02").removeClass("current");
		if(location.hash == "#advertising"){
		$("aside h2.contact01").addClass("current");


		}else if(location.hash == "#consultation"){
		$("aside h2.contact02").addClass("current");
	}

});

//電話番号自動リンク
$(function(){
    var ua = navigator.userAgent;
    if(ua.indexOf('iPhone') > 0 && ua.indexOf('iPod') == -1 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0 ){
        $('.tel-link').each(function(){
            var str = $(this).text();
            $(this).html($('<a>').attr('href', 'tel:' + str.replace(/-/g, '')).append(str + '</a>'));
        });
    }
});

//回転したらページリロード
//$(function(){
//$(window).on("orientationchange",function(){
//    location.reload();
//        });
//});


//スマホ　ブラウザバックしたらページリロード

window.onpageshow = function(evt) {
    if (evt.persisted) {
      location.reload();
    }
};
