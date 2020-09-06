const carousel = document.querySelector('.slider');

const slides = Array.from(carousel.children);

const nextButton = document.querySelector('.goToNext');
const prevButton = document.querySelector('.goToPrev');


function setSlidePosition() {
  const slideWidth = slides[0].getBoundingClientRect().width;

  const slidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
  };

  slides.forEach(slidePosition);

}

const moveToSlide = (carousel, currentSlide, targetSlide) => {
  carousel.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

// Next Button
function goToNextSlide() {
  setSlidePosition();
  const currentSlide = carousel.querySelector('.current-slide');
  const nextSlide = currentSlide.nextElementSibling;
  if (!carousel.lastElementChild.classList.contains('current-slide')) {
    moveToSlide(carousel, currentSlide, nextSlide);
  }
};

// Prev Button
function goToPrevSlide() {
  setSlidePosition();
  const currentSlide = carousel.querySelector('.current-slide');
  const prevSlide = currentSlide.previousElementSibling;
  if (!carousel.firstElementChild.classList.contains('current-slide')) {
    moveToSlide(carousel, currentSlide, prevSlide);
  }
};

// Next Button
nextButton.addEventListener('click', goToNextSlide);

// Prev Button
prevButton.addEventListener('click', goToPrevSlide);

// Right and Left Arrows
window.addEventListener("keydown", event => {
  event.preventDefault();
  if (event.key === 'ArrowRight') {
    goToNextSlide();
  }
  if (event.key === 'ArrowLeft') {
    goToPrevSlide();
  }
})