var slides = document.querySelectorAll('.carousel__frame .carousel__slide'),
    currentSlide = 0,
    slideInterval = setInterval(nextSlide, 6000); // 6 second intervals between transitions

function nextSlide() {
  slides[currentSlide].className = 'carousel__slide'; // make current slide not show
  currentSlide = (currentSlide + 1) % slides.length; // increment/reset slide number
  slides[currentSlide].className = 'carousel__slide carousel__slide--showing'; // make slide visible
};
