// JavaScript Document
/*eslint-env es6*/

class Accordion {
  constructor(element) {
    this.element = element;
    this.contentBoxes = element.getElementsByClassName('contentBx');
    this.lastSelected = null;

    for (let i = 0; i < this.contentBoxes.length; i++) {
      this.contentBoxes[i].addEventListener('click', this.toggleAccordion.bind(this));
    }
  }

  toggleAccordion(event) {
    const selectedContentBox = event.currentTarget;

    if (this.lastSelected !== null && this.lastSelected !== selectedContentBox) {
      this.lastSelected.classList.remove('active');
      this.lastSelected.querySelector('.content').style.height = null;
    }

    selectedContentBox.classList.toggle('active');
    const content = selectedContentBox.querySelector('.content');
    if (content.style.height) {
      content.style.height = null;
    } else {
      content.style.height = content.scrollHeight + 'px';
    }

    this.lastSelected = selectedContentBox;
  }
}
