// JavaScript Document
/*eslint-env es6*/

const slider = document.querySelector('.multi_slider');

const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');

var sectionIndex = 1;


rightArrow.addEventListener('click', function() {
	slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
	sectionIndex =+ 1;
})


leftArrow.addEventListener('click', function() {
	slider.style.transform = 'translate(33%)';
})