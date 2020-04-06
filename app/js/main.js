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
        variableWidth: true,

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

    $('input:checkbox, select').styler();

    var mixer = mixitup('.release__inner-box, .category__page-box');

});