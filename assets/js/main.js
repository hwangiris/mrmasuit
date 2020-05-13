$(function() {
    var width = $(window).width(),
        height = $(window).height();
    new WOW().init();
    $('#top').click(function() {
        $(window).scrollTop(0);
    })
    $('body').append('<div class="blank"></div>');
    $('.ham, .blank').click(function() {
        $('.ham').toggleClass('opened');
        $('body').toggleClass('opened');
        $('nav ul').fadeToggle();
    });
    if (width >= 1024) {
        $('.half-banner-group').each(function() {
            var txtHeight = $(this).children('.half-txt-banner').outerHeight();
            $(this).children('.half-img-banner').height(height - txtHeight);
        });
    } else {
        $('.half-txt-banner').each(function() {
            var btnGroup = $(this).children().children().children('.btn-group'),
                phrase = $(this).children().children('p');
            $(btnGroup).remove().clone().insertAfter(phrase).addClass('col-12');
        })
    }
    $('.btn--modal').each(function() {
        var idx = $(this).data('modal');
        $(this).click(function() {
            console.log(idx);
            $('body').addClass('modal-open');
            $('.' + idx + ', .modal-backdrop').fadeIn();
        })
    });
    var url = window.location.href,
        id = url.split('id=')[1];
    console.log(id);
    if (id != undefined) {
        $('body').addClass('modal-open');
        $('.' + id + ', .modal-backdrop').fadeIn();
    }
    $('.modal-backdrop, .modal, .modal-dialog, .modal-close').click(function() {
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
    $('.slider-opening').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: "<button type='button' class='slick-navi slick-prev'><i class='icon icon-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slick-navi slick-next'><i class='icon icon-chevron-left'></i></button>"
    });
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
    if (!location.href.match(/wedding/)) {
        $('.list-section').each(function() {
            $(this).parent().children('.list-section').last().addClass('pb-80');
        })
    }
    $('.jumbotron > .container').has('.btn-group').addClass('has-btn');
    $(window).resize(function() {
        if (width >= 1024) {
            $('.half-banner-group').each(function() {
                var txtHeight = $(this).children('.half-txt-banner').outerHeight();
                $(this).children('.half-img-banner').height(height - txtHeight);
            });
        }
    });
    $(window).scroll(function() {
        var scroll = $(this).scrollTop();
        if (scroll >= height) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
    });
})