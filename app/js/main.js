$(function(){

    $(".rate").rateYo({
        rating: 4.6,
        starWidth:"15px",
        readOnly: true,
        // normalFill: "#fff",
        ratedFill: "#ffc000",
        spacing: "3px"
      });


    $('.slider__inner').slick({
        dots:false,
        arrows:true,
    });

        
    $('.feed-slider__inner').slick({
        dots:false,
        arrows:true,
        slidesToScroll:2,
        slidesToShow:3,
    });

    $('.header__menu-btn').on('click', function(){
        $('.header__menu-inner ul').slideToggle();
    });

    var mixer = mixitup('.release__inner-box');

});