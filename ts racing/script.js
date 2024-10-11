let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;

function showSlide(index) {
  const slideWidth = document.querySelector('.carousel').offsetWidth;
  slides.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

