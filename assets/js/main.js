$(function() {
    var width = $(window).width(),
        height = $(window).height();
    new WOW().init();
    $('#top').click(function() {
        $(window).scrollTop(0);
    })
    $('body').prepend('<div class="blank"></div>');
    $('.hamburger, .blank').click(function() {
        $('.hamburger').toggleClass('active');
        $('body, .blank').toggleClass('opened');
        $('nav ul').toggle();
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
    if (width < 1280) {
        $('.grid').each(function() {
            var idx = $(this).data('modal');
            $(this).click(function() {
                console.log(idx);
                $('body').addClass('modal-open');
                $('.modal-' + idx + ', .modal-backdrop').fadeIn();
                $('.modal-' + idx + ', .modal-backdrop').addClass('show');
            })
        });
    }
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
    $('.slide-img-grid').slick({
        infinite: false,
        speed: 500,
        prevArrow: "<button type='button' class='slick-navi slick-prev'><i class='icon icon-chevron-left'></i></button>",
        nextArrow: "<button type='button' class='slick-navi slick-next'><i class='icon icon-chevron-left'></i></button>",
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

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
    $('.modal-backdrop, .modal, .modal-dialog, .modal-close').click(function() {
        $('body').removeClass('modal-open');
        $('.modal, .modal-backdrop').fadeOut();
        $('.modal-' + idx + ', .modal-backdrop').removeClass('show');
    });
    $('.modal-header, .modal-body').click(function(e) {
        e.stopPropagation()
    });
    $('.jumbotron > .container').has('.btn-group').addClass('has-btn');
    $('a[target="_blank"]').each(function() {
        $(this).addClass('blank-link');
    });
    $('a').each(function(){
        if (width < 1024) {
            var link = $(this).attr('href');
            if( link != '#' || link != '#!' ) {
                $(this).click(function(e){
                    e.preventDefault();
                    $(this).addClass('active').delay(500).queue(function(next){
                        $(this).removeClass('active');
                        next();
                    })
                    if($(this).hasClass('blank-link') == true) {
                        setTimeout(function(){
                            window.open(link);
                        }, 300)
                    } else {
                        setTimeout(function(){
                            window.location.href = link;
                        }, 300)
                    }
                })
            }
        }
    })
    $(window).on('load', function() {
        var containerWidth = $('.container').width();
        $('.nav-list').each(function(){
            var t = $(this),
                tWidth = 0;
            $('li', t).each(function(){
                tWidth += Math.ceil($(this).outerWidth(true)) + 0.5;
                console.log(tWidth);
            });
            t.css('width',tWidth + 15 + t.outerWidth(true) - t.width());
            console.log(containerWidth , t.width());
            if ( containerWidth < t.width() ) {
                t.parent().addClass('nav-over-scroll');
            }
        });
    });
    $(window).resize(function() {
        if (width >= 1024) {
            $('.half-banner-group').each(function() {
                var txtHeight = $(this).children('.half-txt-banner').outerHeight();
                $(this).children('.half-img-banner').height(height - txtHeight);
            });
        }
    });
    $(window).scroll(function() {
        var scroll = $(this).scrollTop(),
            crosscutHeight = $('.crosscut-block').outerHeight();
        $('body').css('padding-bottom', crosscutHeight);
        if (scroll >= (height/2)) {
            $('#top').fadeIn();
        } else {
            $('#top').fadeOut();
        }
        if ((scroll >= (height/2)) && (width < 1024)) {
            $('.crosscut-block').fadeIn();
        } else {
            $('.crosscut-block').fadeOut();
        }
    });
})