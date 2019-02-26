
$(function() {
  var $ = jQuery = jquery_0;

    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        auto: true,
        controls:false
    });
});
// ========================
$(function() {
     var $ = jQuery = jquery_2_2_4;
    // при нажатии на кнопку scrollup
    $('.scrollup').click(function() {
        // переместиться в верхнюю часть страницы
        $("html, body").animate({
            scrollTop: 0
        }, 2000);
    })
})
// при прокрутке окна (window)
$(window).scroll(function() {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop() > 200) {
        // то сделать кнопку scrollup видимой
        $('.scrollup').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
        $('.scrollup').fadeOut();
    }
});

// =============================
// $(function() {
//     $("a[href^='#']").click(function() {
//         var _href = $(this).attr("href");
//         $("html, body").animate({ scrollTop: $(_href).offset().top + "px" }, 2000);
//         return false;
//     });
// });
// ====================
$(document).ready(function() {
    // 02
 var $ = jQuery = jquery_2_2_4;
    // 03
    var $menu = $("#menu");



    $(window).scroll(function() {

        if ($(this).scrollTop() > 100 && $menu.hasClass("default")) {

            $menu.removeClass("default").addClass("fixed");

        } else if ($(this).scrollTop() <= 100 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");

        }
    }); //scroll

});
// ===============================
// $(function () {
//   var platform = navigator.platform.toLowerCase();
//   if (platform.indexOf('win') == 0 || platform.indexOf('linux') == 0) {
//     if ($.browser.webkit) {
//       $.srSmoothscroll({
// //         // defaults
//         step: 55,
//         speed: 540,
//         ease: 'swing',
//         target: $('body'),
//         container: $(window)
//     });
//     }
//   }
// });
// $(function() {
//     $.srSmoothscroll({
//         // defaults
//         step: 55,
//         speed: 800,
//         ease: 'swing',
//         target: $('body'),
//         container: $(window)
//     })
// });
// window.smoothScroll(target, duration, callback, context)
// $(document).ready(function(){
//           var margintop = 0;
//           $('#myDiv')
//          .mousewheel( function (event, delta)
//          {
//             if ( delta > 0 ){
//                  margintop -= 60;
//                  $('#innerDiv').animate({'marginTop':margintop});
//             }
//             else if ( delta < 0 ){
//                 margintop+=60;
//                          $('#innerDiv').animate({'marginTop':margintop});
//                 }           event.stopPropagation();
//             event.preventDefault();
//         });
     
// });

    $(function() {
        var $ = jQuery = jquery_2_2_4;
        $("a[href^='#']").click(function() {
            var _href = $(this).attr("href");
            $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
            return false;
        });
    });

// ================================


$(function() {
 var $ = jQuery = jquery_1_8_3;

     var navA = $('.navigate a');

    $('.tracked').waypoint(function() {

        var hash = $(this).attr('id');
        navA.removeClass('acti');
        $.each(navA, function() {
            if ($(this).attr('href').slice(1) == hash) { $(this).addClass('acti') }

            if ($(this).attr('href').slice(1) != hash) { $(this).removeClass('acti') }

        });

    }, { offset: '70%' });


});
// =====================================
 
$(function() {
     var $ = jQuery = jquery_2_2_4;
 
     $('.a').modaal();
      $('.inline').modaal({
        type:'inline',
width:500
      });
});
// =========================================

$(window).load(function () {
     var $ = jQuery = jquery_2_2_4;
    $.scrollIndicator();
});
// ===================================
