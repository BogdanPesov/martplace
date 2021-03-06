$(function() {
    $(".slider__item-star").rateYo({
        rating: 4.5,
        starWidth: "14px",
        readOnly: true
    });

    $('.slider__inner').slick({

    });


    $('.feed__slider').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        edgeFriction: 0,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    $(".js-range-slider").ionRangeSlider({
        type: "double",
        hide_min_max: true,
        force_edges: true,
        min: 0,
        max: 320,
        from_min: 30,
        to_max: 300,
        prefix: "$",

    });


    $(".category__page-item-star").rateYo({
        rating: 4.5,
        starWidth: "17px",
        spacing: "3px",
        readOnly: true
    });

    $('.lnr-list').on('click', function() {
        $('.category__page-item').addClass('list');
        $('.lnr-list').addClass('active');
        $('.lnr-menu').removeClass('active');
    });

    $('.lnr-menu').on('click', function() {
        $('.category__page-item').removeClass('list');
        $('.lnr-menu').addClass('active');
        $('.lnr-list').removeClass('active');
    });

    $('.menu__btn').on('click', function() {
        $('.menu__list').slideToggle();
    });

    $('.user__btn').on('click', function() {

        $('.header__content-box').toggleClass('active');

    });

    $('input, select').styler();

    $('.single-product__tabs .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
        $('.single-product__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.single-product__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    var mixer = mixitup('.release__inner-box, .category__page-box');

});