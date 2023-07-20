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
	
	//Slider initializers
	// Create & Initialize new slider's here. (.slider_container.(*slider name by class (div parent of "slider")*) .slider, .slider_container.* .controls );
	//
	const headerTestimonialSlider = new Slider('.slider_container.headerTestimonial .slider', '.slider_container.headerTestimonial .controls');
	headerTestimonialSlider.init();
	
	const headerTestimonialMobileSlider = new Slider('.slider_container.headerTestimonialMobile .slider', '.slider_container.headerTestimonialMobile .controls');
	headerTestimonialMobileSlider.init();
	

