// JavaScript Document
/*eslint-env es6*/

const slider = document.querySelector('.slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');

let sectionIndex = 0;
const numberOfSlides = slider.getElementsByTagName('*').length;
const slideWidthPercent = 100 / numberOfSlides;
let autoScrollTimeout;

// Dynamically set the width of the slider based on the number of slides
slider.style.width = `${numberOfSlides * 100}%`;

const slide = (index) => {
    // Remove 'selected' class from previously selected indicator
    document.querySelector('.controls .selected').classList.remove('selected');
    
    // Add 'selected' class to the current indicator
    indicatorParents.children[index].classList.add('selected');
    
    // Slide to the current section
    slider.style.transform = `translate(${index * -slideWidthPercent}%)`;
};

const autoScroll = () => {
    clearTimeout(autoScrollTimeout);
    autoScrollTimeout = setTimeout(() => {
        sectionIndex = (sectionIndex + 1) % numberOfSlides;
        slide(sectionIndex);
        autoScroll();
    }, 7000);
};

document.querySelectorAll('.controls li').forEach(function(indicator, ind){
	indicator.addEventListener('click', function(){
		sectionIndex = ind;
		slide(sectionIndex);
		autoScroll();
	});
});

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