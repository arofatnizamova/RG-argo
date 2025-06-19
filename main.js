
$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 1,
        slidesToScroll: 1,
		dots: false,
        responsive: [

        ]
});
$('.slick-metal').slick({
	arrows: true,
	prevArrow: $('.metal-slider-prev'),
	nextArrow: $('.metal-slider-next'),
	autoplay: true,
	autoplaySpeed: 2000,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: false,
	responsive: [

	]
});
$('.slider-items').slick({
	arrows: false,
	slidesToShow: 3,
	slidesToScroll: 1,
	dots: false,
	responsive: [
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				autoplay: false,
				autoplaySpeed: 2000,
				arrows: false,
				dots: false,
			}
		},{
			breakpoint: 520,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: false,
				autoplaySpeed: 2000,
				arrows: false,
				dots: true,
			}
		}, {
			breakpoint: 2194,
			settings: "unslick"
		}

	]
});
$('.slider-recomended').slick({
	arrows: false,
	slidesToShow: 2,
	slidesToScroll: 1,
	dots: false,
	responsive: [
		{
			breakpoint: 990,
			settings: {
				slidesToShow: 1.1,
				slidesToScroll: 1,
				autoplay: false,
				autoplaySpeed: 2000,
				arrows: false,
				dots: false,
			}
		},{
			breakpoint: 520,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: false,
				autoplaySpeed: 2000,
				arrows: false,
			}
		}

	]
});
  });
  