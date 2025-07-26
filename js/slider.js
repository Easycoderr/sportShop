// slider.js - Product slider functionality
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".slider-prev");
  const nextBtn = document.querySelector(".slider-next");
  const indicators = document.querySelectorAll(".slider-indicator");

  let currentIndex = 0;

  // Initialize slider
  function initSlider() {
    // Create indicators if they don't exist
    if (!document.querySelector(".slider-indicators")) {
      const indicatorsContainer = document.createElement("div");
      indicatorsContainer.className = "slider-indicators";

      slides.forEach((_, index) => {
        const indicator = document.createElement("button");
        indicator.className = "slider-indicator";
        if (index === 0) indicator.classList.add("active");
        indicator.addEventListener("click", () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
      });

      slider.parentNode.appendChild(indicatorsContainer);
    }

    updateSlider();
  }

  // Update slider state
  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.classList.toggle("active", index === currentIndex);
    });

    // Update indicators
    const allIndicators = document.querySelectorAll(".slider-indicator");
    allIndicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === currentIndex);
    });

    // Scroll to current slide
    slider.scrollTo({
      left: slider.offsetWidth * currentIndex,
      behavior: "smooth",
    });
  }

  // Navigation functions
  function goToSlide(index) {
    currentIndex = (index + slides.length) % slides.length;
    updateSlider();
  }

  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  // Event listeners
  if (nextBtn) nextBtn.addEventListener("click", nextSlide);
  if (prevBtn) prevBtn.addEventListener("click", prevSlide);

  // Auto-advance (optional)
  let slideInterval = setInterval(nextSlide, 5000);

  // Pause on hover
  slider.addEventListener("mouseenter", () => clearInterval(slideInterval));
  slider.addEventListener("mouseleave", () => {
    slideInterval = setInterval(nextSlide, 5000);
  });

  // Initialize
  initSlider();
});
