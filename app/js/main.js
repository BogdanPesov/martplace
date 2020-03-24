$(function() {
    $(".slider__item-star").rateYo({
        rating: 4.5,
        starWidth: "14px",
        readOnly: true
    });

    $('.slider__inner').slick({
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/arrow-left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/arrow-right.png" alt=""></button>',

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
        $('.lnr-sort-amount-asc').removeClass('active');
    });

    $('.lnr-sort-amount-asc').on('click', function() {
        $('.category__page-item').removeClass('list');
        $('.lnr-sort-amount-asc').addClass('active');
        $('.lnr-list').removeClass('active');
    });


    var mixer = mixitup('.release__inner-box, .category__page-box');

});