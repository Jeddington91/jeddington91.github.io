// JavaScript Document
/*eslint-env es6*/

	//Drop down menu function
	const menuIcon = document.getElementById('menu_selector');
	const menu = document.querySelector('.menu');

	menuIcon.addEventListener('click', () => {
		menu.classList.toggle('show');
	});

	const teamClick = document.querySelector('.has_submenu.team');
	const servicesClick = document.querySelector('.has_submenu.services');

	const servicesSubmenu = servicesClick.querySelector('.servicesSubmenu');
	const teamSubmenu = teamClick.querySelector('.teamSubmenu');

	servicesClick.addEventListener('click', () => {
		servicesSubmenu.classList.toggle('show');
	});

	teamClick.addEventListener('click', () => {
		teamSubmenu.classList.toggle('show');
	});

	//Drop down mobile menu
	const menuIconMobile = document.getElementById('menu_selector_mobile');
	const menuMobile = document.querySelector('.menu_mobile');

	menuIconMobile.addEventListener('click', () => {
		menuMobile.classList.toggle('show');

		// Submenu toggle
		const teamClickMobile = document.querySelector('.menu_mobile .has_submenu.team');
		const servicesClickMobile = document.querySelector('.menu_mobile .has_submenu.services');

		const teamSubmenuMobile = teamClickMobile.querySelector('.teamSubmenu');
		const servicesSubmenuMobile = servicesClickMobile.querySelector('.servicesSubmenu');


		servicesClickMobile.addEventListener('click', () => {
			servicesSubmenuMobile.classList.toggle('show');
		});

		teamClickMobile.addEventListener('click', () => {
			teamSubmenuMobile.classList.toggle('show');
		});
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

	function loadGoogleMap() {
		var mapContainer = document.getElementById('map_container');
		var iframe = document.createElement('iframe');
		iframe.src = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12432.191883948808!2d-104.8241523!3d38.8313622!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8713452b8791e0ed%3A0x1c73286afca53d36!2sThe%20Lux%20Law%20Firm%2C%20PLLC!5e0!3m2!1sen!2sus!4v1689787170277!5m2!1sen!2sus';
		iframe.width = '100%'; // Set the desired width of the map
		iframe.height = '240';
		iframe.frameborder = '0';
		iframe.style.border = '0';
		mapContainer.innerHTML = ''; // Remove the image
		mapContainer.appendChild(iframe); // Add the iframe
}
	

	//Google Maps script -* Update here once Google API key available, see dimensions to site
//		document.getElementById('footer_image').addEventListener('click', function() {
//		  var mapFrame = document.createElement('iframe');
//		  mapFrame.setAttribute('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_PLACE_ID!2dLONGITUDE!2dLATITUDE!3s0x0:0x0!5m1!1e1');
//		  mapFrame.setAttribute('width', '600');
//		  mapFrame.setAttribute('height', '450');
//		  mapFrame.setAttribute('frameborder', '0');
//		  mapFrame.setAttribute('style', 'border:0;');
//		  this.parentNode.replaceChild(mapFrame, this);
//		});
	
	//Slider initializers
	const headerTestimonialSlider = new Slider('.slider_container.headerTestimonial .slider', '.slider_container.headerTestimonial .controls');
   	headerTestimonialSlider.init();
	
	const headerTestimonialMobileSlider = new Slider('.slider_container.headerTestimonialMobile .slider', '.slider_container.headerTestimonialMobile .controls');
   	headerTestimonialMobileSlider.init();
	
//	const clientStoriesSlider = new MultiSlider('.slider_container.clientStories .slider', '.slider_container.clientStories .controls', 3, 2, 95); //Using slick temporarily

	const ourResultsMobileSlider = new Slider('.slider_container.ourResultsMobile .slider', '.slider_container.ourResultsMobile .controls');
	ourResultsMobileSlider.init();
	

