// JavaScript Document
/*eslint-env es6*/

	//Drop down menu function
	const menuIcon = document.getElementById('menu_selector');
	const menu = document.querySelector('.menu');

	menuIcon.addEventListener('click', () => {
		menu.classList.toggle('show');
	});

	const servicesItem = document.querySelector('.menu > .list > li:nth-child(3)');
	const submenu = servicesItem.querySelector('.submenu');

	servicesItem.addEventListener('click', () => {
		submenu.classList.toggle('show');
	});
 

	//Accordion initializers
	const initializeAccordions = (container) => {
		const accordions = container.querySelectorAll('.accordion');
		accordions.forEach((accordionElement) => {
			new Accordion(accordionElement);
				const nestedAccordions = accordionElement.querySelectorAll('.accordion');
				nestedAccordions.forEach((nestedAccordionElement) => {
				initializeAccordions(nestedAccordionElement);
				});
			});
	};
	const mainAccordion = document.querySelector('.accordion');
	initializeAccordions(mainAccordion);

	const accordionElement = document.querySelector('.accordion');
	const accordionInstance = new Accordion(accordionElement);
	
	
	//Slider initializers
	const headerTestimonialSlider = new Slider('.slider_container.headerTestimonial .slider', '.slider_container.headerTestimonial .controls');
   	headerTestimonialSlider.init();
	
	const headerTestimonialMobileSlider = new Slider('.slider_container.headerTestimonialMobile .slider', '.slider_container.headerTestimonialMobile .controls');
   	headerTestimonialMobileSlider.init();
	
	const clientStoriesSlider = new MultiSlider('.slider_container.clientStories .slider', '.slider_container.clientStories .controls', 3, 2, 95);

	const ourResultsMobileSlider = new Slider('.slider_container.ourResultsMobile .slider', '.slider_container.ourResultsMobile .controls');
	ourResultsMobileSlider.init();
	

