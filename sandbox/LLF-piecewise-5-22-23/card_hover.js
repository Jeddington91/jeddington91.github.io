// JavaScript Document
/*eslint-env es6*/

// Optional JavaScript code for smooth scrolling to the respective service pages on click
document.addEventListener("DOMContentLoaded", function() {
  const readmoreLinks = document.querySelectorAll(".readmore_link");
  
  readmoreLinks.forEach(function(link) {
    link.addEventListener("click", function(event) {
      event.preventDefault();
      const servicePageId = this.getAttribute("href");
      const servicePage = document.querySelector(servicePageId);
      
      if (servicePage) {
        servicePage.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});