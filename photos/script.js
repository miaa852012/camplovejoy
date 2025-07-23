const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;

function updateSlide() {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % images.length;
  updateSlide();
}

function prevSlide() {
  index = (index - 1 + images.length) % images.length;
  updateSlide();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Optional: auto slide every 4 seconds
setInterval(nextSlide, 4000);
