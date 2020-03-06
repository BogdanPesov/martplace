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

    var mixer = mixitup('.release__inner-box');
});