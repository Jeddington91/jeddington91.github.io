// JavaScript Document
/*eslint-env es6*/

const slider = document.querySelector('.slider');
const sliderMobile = document.querySelector('.slider_mobile');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');
const indicatorParentsMobile = document.querySelector('.controls_mobile ul');

let sectionIndex = 0;
const numberOfSlides = slider.getElementsByTagName('section').length;
const slideWidthPercent = 100 / numberOfSlides;
let autoScrollTimeout;

// Dynamically set the width of the slider based on the number of slides
slider.style.width = `${numberOfSlides * 100}%`;
sliderMobile.style.width = `${numberOfSlides * 100}%`;

const slide = (index) => {
    // Remove 'selected' class from previously selected indicator
    const previousSelected = document.querySelector('.controls .selected');
    if (previousSelected) previousSelected.classList.remove('selected');

    // Add 'selected' class to the current indicator
    const currentIndicator = indicatorParents.children[index];
    if (currentIndicator) currentIndicator.classList.add('selected');

    // Slide to the current section
    slider.style.transform = `translate(${index * -slideWidthPercent}%)`;
};

const slideMobile = (index) => {
    // Remove 'selected' class from previously selected indicator
    const previousSelected = document.querySelector('.controls_mobile .selected');
    if (previousSelected) previousSelected.classList.remove('selected');

    // Add 'selected' class to the current indicator
    const currentIndicator = indicatorParentsMobile.children[index];
    if (currentIndicator) currentIndicator.classList.add('selected');

    // Slide to the current section
    sliderMobile.style.transform = `translate(${index * -slideWidthPercent}%)`;
};

const autoScroll = () => {
    clearTimeout(autoScrollTimeout);
    autoScrollTimeout = setTimeout(() => {
        sectionIndex = (sectionIndex + 1) % numberOfSlides;
        slide(sectionIndex);
        autoScroll();
    }, 7000);
};
//
// const autoScrollMobile = () => {
//     clearTimeout(autoScrollTimeout);
//     autoScrollTimeout = setTimeout(() => {
//         sectionIndex = (sectionIndex + 1) % numberOfSlides;
//         slideMobile(sectionIndex);
//         autoScrollMobile();
//     }, 7000);
// };

document.querySelectorAll('.controls li').forEach(function(indicator, ind){
	indicator.addEventListener('click', function(){
		sectionIndex = ind;
		slide(sectionIndex);
		autoScroll();
	});
});
//
// document.querySelectorAll('.controls_mobile li').forEach(function(indicator, ind){
// 	indicator.addEventListener('click', function(){
// 		sectionIndex = ind;
// 		slideMobile(sectionIndex);
// 		autoScrollMobile();
// 	});
// });

rightArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex + 1) % numberOfSlides;
    slide(sectionIndex);
    autoScroll();
});

leftArrow.addEventListener('click', function() {
    sectionIndex = (sectionIndex - 1 + numberOfSlides) % numberOfSlides;
    slide(sectionIndex);
    autoScroll();
});

// Start the auto-scroll when the page loads
autoScroll();
autoScrollMobile();
