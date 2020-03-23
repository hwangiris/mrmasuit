$(function() {
    var width = $(window).width(),
        height = $(window).height();
    new WOW().init();
    $('.ham').click(function() {
        $(this).toggleClass('opened');
        $('body').toggleClass('opened');
        $(this).siblings('ul').fadeToggle();
    });
    if (width < 1024) {
        $('.square-area').each(function() {
            $(this).siblings().height(height - width - 30);
        });
    } else {
        $('.half-banner-group').each(function() {
            var txtHeight = $(this).children('.half-txt-banner').outerHeight();
            $(this).children('.half-img-banner').height(height - txtHeight);
        });
    }
    $('.count-start').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 1000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    $('.btn--modal').each(function() {
        $(this).click(function() {
            $('body').addClass('modal-open');
            $('.modal, .modal-backdrop').fadeIn();
        })
    });
    $('.modal-backdrop, modal, .modal-dialog, .modal-close').click(function() {
        $('body').removeClass('modal-open');
        $('.modal, .modal-backdrop').fadeOut();
    });
    $('.modal-content').click(function(e) {
        e.stopPropagation()
    });
    $('.collapse-text').each(function() {
        if ($(this).outerHeight() >= 220) {
            $(this).addClass('collapse-hide');
            $('<div class="btn-group"><a href="#!" class="btn btn-collapse">顯示更多</a><a href="#!" class="btn btn-hide" style="display: none">收起內容</a></div>').insertAfter(this);
        }
    })
    $('.btn-collapse').click(function() {
        $(this).hide();
        $(this).siblings('.btn-hide').show();
        $(this).parent().siblings('.collapse-text').removeClass('collapse-hide');
    })
    $('.btn-hide').click(function() {
        $(this).siblings('.btn-collapse').show();
        $(this).hide();
        $(this).parent().siblings('.collapse-text').addClass('collapse-hide');
    })
    $('.slider-instagram').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.slider-suit').slick({
        infinite: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: "<button type='button' class='slick-navi slick-prev'><i class='icon icon-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slick-navi slick-next'><i class='icon icon-chevron-left'></i></button>"
    });
    $('.slider-guest').slick({
        dots: true,
        arrows: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 500,
        fade: true,
        cssEase: 'linear',
    });
    $(window).resize(function() {
        $('.half-banner-group').each(function() {
            var groupHeight = $(this).outerHeight(),
                txtHeight = $(this).children('.half-txt-banner').outerHeight();
            $(this).children('.half-img-banner').height(groupHeight - txtHeight);
        });
    });
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();

    });
})