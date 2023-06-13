// JavaScript Document
/*eslint-env es6*/

$(document).ready(function(){
	$('.client-success').slick({
	dots: true,
	arrows: true,
	centerMode: true,
	infinite: true,
	pause: true,
	centerPadding: '0px',
	speed: 300,
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [
	{
		breakpoint: 860,
		settings: {
		slidesToShow: 1,
		slidesToScroll: 1,
		infinite: true,
		dots: true,
		centerMode: true,
		}
	},
	// You can unslick at a given breakpoint now by adding:
	// settings: "unslick"
	// instead of a settings object
	]
	});
});