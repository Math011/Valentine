const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-track img");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let index = 0;

function getSlideWidth() {
  return slides[0].getBoundingClientRect().width;
}

function updateCarousel() {
  const slideWidth = getSlideWidth();
  track.style.transform = `translateX(-${index * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  updateCarousel();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  updateCarousel();
});

// 🔥 IMPORTANT : recalculer au resize
window.addEventListener("resize", updateCarousel);