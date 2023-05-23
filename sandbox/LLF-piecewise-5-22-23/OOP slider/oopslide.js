// Javascript Document
/*eslint-env es6*/

// Define the Slider class
class Slider {
  constructor(sliderSelector, controlsSelector) {
    // Initialize the slider and controls elements based on the provided selectors
    this.sliderElement = document.querySelector(sliderSelector);
    this.controlsElement = document.querySelector(controlsSelector);
    this.sectionIndex = 0;
    // get the number of slides from the current slider
    this.numberOfSlides = this.sliderElement.getElementsByTagName('section').length;
    // dynamically set the width of the current slider
    this.sliderElement.style.width = `${this.numberOfSlides * 100}%`;
  }

  slide(index) {
    // Remove 'selected' class from previously selected indicator
    const previousSelected = this.controlsElement.querySelector('.selected');
    if (previousSelected) previousSelected.classList.remove('selected');
    // Add 'selected' class to the current indicator
    const currentIndicator = this.controlsElement.children[index];
    if (currentIndicator) {
      currentIndicator.classList.add('selected');
    }

    // Slide to the current section
    this.sliderElement.style.transform = `translate(${index * -100}%)`;

    // Update the active indicator
    this.updateActiveIndicator();
  }

  updateActiveIndicator() {
    const indicators = this.controlsElement.querySelectorAll('li');

    // Remove the .selected class from all indicators
    indicators.forEach(indicator => {
      indicator.classList.remove('selected');
    });

    // Add the .selected class to the active indicator
    const activeIndicator = indicators[this.sectionIndex];
    if (activeIndicator) {
      activeIndicator.classList.add('selected');
    }
  }
	// Auto-scroll method (7s)
	autoScroll() {
		clearTimeout(this.autoScrollTimeout);
		this.autoScrollTimeout = setTimeout(() => {
			this.sectionIndex = (this.sectionIndex + 1) % this.numberOfSlides;
			if (this.sectionIndex >= this.numberOfSlides / this.visibleSlides) { //Check for multislider
				this.sectionIndex = 0; // Set sectionIndex to the first slide
			}
			this.slide(this.sectionIndex);
			this.autoScroll();
		}, 7000);
	}
	//.li indicator listener initialization method
    setupListeners() {
      // setup listeners for indicators and arrows
		this.controlsElement.querySelectorAll('li').forEach((indicator, ind) => {
			indicator.addEventListener('click', () => {
				this.sectionIndex = ind;
				this.slide(this.sectionIndex);
				this.autoScroll();
			});
		});
    }

	//Method to initialize controls and autoscrolling
    init() {
       this.setupListeners();
       this.autoScroll();
     }
   }

class MultiSlider {
  constructor(sliderSelector, controlsSelector, visibleSlides, slideMargin) {
    this.sliderElement = document.querySelector(sliderSelector);
    this.controlsElement = document.querySelector(controlsSelector);
    this.sectionIndex = 0;
    this.visibleSlides = visibleSlides;
    this.slideMargin = slideMargin;

    this.slideWidth = ((100 - (this.slideMargin * (this.visibleSlides - 1))) / this.visibleSlides).toFixed(2);
    this.numberOfSlides = this.sliderElement.getElementsByTagName('section').length;
    this.sliderElement.style.width = `${(this.numberOfSlides * (this.slideWidth + this.slideMargin)) - this.slideMargin}%`;
    this.sliderElement.style.transform = `translate(${this.sectionIndex * -(this.slideWidth + this.slideMargin) * this.visibleSlides}%)`;

    this.autoScrollTimeout = null; // Added to keep track of the auto-scroll timeout
  }
	// Multiple slides requires margin in between (or 0 last parameter if not)
	applySlideMargin() {
    const slides = this.sliderElement.querySelectorAll('section');
		slides.forEach(slide => {
			slide.style.marginRight = `${this.slideMargin}%`;
		});
	}
	
	slide(index) {
    // Remove 'selected' class from previously selected indicator
		const previousSelected = this.controlsElement.querySelector('.selected');
			if (previousSelected) previousSelected.classList.remove('selected');
		// Add 'selected' class to the current indicator
		const currentIndicator = this.controlsElement.children[index];
			if (currentIndicator) {
				currentIndicator.classList.add('selected');
			}

		// Slide to the current section
		this.sliderElement.style.transform = `translate(${index * -100}%)`;
		// Update the active indicator
		this.updateActiveIndicator();
  }

  updateActiveIndicator() {
    const indicators = this.controlsElement.querySelectorAll('li');

    // Remove the .selected class from all indicators
    indicators.forEach(indicator => {
      indicator.classList.remove('selected');
    });

    // Add the .selected class to the active indicator
    const activeIndicator = indicators[this.sectionIndex];
    if (activeIndicator) {
      activeIndicator.classList.add('selected');
    }
  }
	// Auto-scroll method (7s)
	autoScroll() {
		clearTimeout(this.autoScrollTimeout);
		this.autoScrollTimeout = setTimeout(() => {
			this.sectionIndex = (this.sectionIndex + 1) % this.numberOfSlides;
			if (this.sectionIndex >= this.numberOfSlides / this.visibleSlides) { //Check for multislider
				this.sectionIndex = 0; // Set sectionIndex to the first slide
			}
			this.slide(this.sectionIndex);
			this.autoScroll();
		}, 7000);
	}
	//.li indicator listener initialization method
    setupListeners() {
      // setup listeners for indicators and arrows
		this.controlsElement.querySelectorAll('li').forEach((indicator, ind) => {
			indicator.addEventListener('click', () => {
				this.sectionIndex = ind;
				this.slide(this.sectionIndex);
				this.autoScroll();
			});
		});
    }
	
	//Method to initialize controls and autoscrolling
    init() {
	   this.applySlideMargin();
       this.setupListeners();
       this.autoScroll();
     }
}
   // Create & Initialize new slider's here. (.slider_container.(*slider name by class (div parent of "slider")*) .slider, .slider_container.* .controls );
   // Place each used on each page in script tag of each page.

//   const narrowSlider = new Slider('.slider_container.narrow .slider', '.slider_container.narrow .controls');
//   narrowSlider.init();
//
//   const mainSlider = new Slider('.slider_container .slider', '.slider_container .controls');
//   mainSlider.init();
//
//   const wideSlider = new Slider('.slider_container.wide .slider', '.slider_container.wide .controls');
//   wideSlider.init();
//
//   const headerTestimonialSlider = new Slider('.slider_container.headerTestimonial .slider', '.slider_container.headerTestimonial .controls');
//   headerTestimonialSlider.init();

//   const headerTestimonialSliderMobile = new Slider('.slider_container.headerTestimonialMobile .slider', '.slider_container.headerTestimonial .controls');
//   headerTestimonialSlider.init();


