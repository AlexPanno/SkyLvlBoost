'use strict';

/*=================jQuery=================*/

$('.services-slider').slick({
  slidesToShow: 3,
  infinite: false,
  centerMode: true,
  centerPadding: '0',
  initialSlide: 1,
})

/*=================Native JavaScript=================*/

// Question buttons on section "FAQ"

let questionButtons = document.querySelectorAll('.question-button');

questionButtons.forEach((item) => {
  item.onclick = function () {
    let currentAnswer = this.parentElement.nextElementSibling;
    currentAnswer.classList.toggle("active-answer");
    this.classList.toggle("active-question-button");
  }
});
