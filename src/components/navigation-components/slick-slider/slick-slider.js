import '../../../vendors/slick-slider/slick.min'

$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        adaptiveHeight: true,
        slidesToShow: 1,
        infinite: false,
        touchMove: true,
    });
});