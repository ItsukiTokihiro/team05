$(function(){
  setTimeout(function(){
    $("#o_p_loader-bg").css("display", "none");
  }, 1000);
});
$(function(){
    var winh = window.innerHeight;
    var pageheadtop = $('.o_c_title-head').height();
    var pagetop = $('.l_h-header .o_c_btn-arrow');
  $(window).on( 'scroll', function () {
    if ( $(this).scrollTop() < pageheadtop /4 ) {
      $('.no_frontpage .l_h-header__logo').removeClass('js-show-on'); 
    } else {
      pagetop.removeClass('js-show-on');
      $('.no_frontpage .l_h-header__logo').addClass('js-show-on'); 
    }
  });
});

$(function(){
  $('.l_h-header .o_c_btn-arrow').click(function(){
    //スクロールのスピード
    var speed = 500;
    //リンク先までの距離を取得
      var winh = window.innerHeight;
    //スムーススクロール
    $("html, body").animate({scrollTop:winh}, speed, "swing");
    return false;
  });
});

//  ハンバーガー
$(function(){
    $('.l_h-header__btns__btn').click(function(){

        $('body,main, .l-gnav, .l-gnav__bg, .l_f-footer, .o_p_nav-grand, .l_h-header__btns__btn').toggleClass('f_js-open'); 
          if ($(".l_h-header__btns__btn .open").text() === 'CLOSE') {
              $(".l_h-header__btns__btn .open").text('MENU');
          } else {
              $(".l_h-header__btns__btn .open").text('CLOSE');
          }
    });
    
    $('.l-gnav__bg').click(function(){
        $('body,main, .l-gnav, .l-gnav__bg, .l_f-footer, .o_p_nav-grand, .l_h-header__btns__btn').toggleClass('f_js-open'); 
        $(".l_h-header__btns__btn .open").text('MENU');
    });
    console.debug('hamburger_end');
});