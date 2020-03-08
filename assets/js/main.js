$(function() {
    var width = $(window).width(),
        height = $(window).height();
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
            var groupHeight = $(this).outerHeight(),
                txtHeight = $(this).children().children('.half-txt-banner').outerHeight();
            $(this).children().children('.half-img-banner').height(groupHeight - txtHeight);
        });
    }
    $('.btn--modal').each(function() {
        $(this).click(function() {
            $('body').addClass('modal-open');
            $('.modal, .modal-backdrop').fadeIn();
        })
    })
    $('.modal-backdrop, modal, .modal-dialog, .modal-close').click(function() {
        $('body').removeClass('modal-open');
        $('.modal, .modal-backdrop').fadeOut();
    })
    $('.modal-content').click(function(e) {
        e.stopPropagation()
    })
    $(window).resize(function() {
        $('.half-banner-group').each(function() {
            var groupHeight = $(this).outerHeight(),
                txtHeight = $(this).children().children('.half-txt-banner').outerHeight();
            console.log(groupHeight, txtHeight);

            $(this).children().children('.half-img-banner').height(groupHeight - txtHeight);
        });
    });
    $(window).scroll(function() {});
})