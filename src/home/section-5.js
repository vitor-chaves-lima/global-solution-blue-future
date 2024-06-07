const section5 = "#section-5";
const leftSlideButton = document.querySelector("#left-slideshow-button");
const rightSlideButton = document.querySelector("#right-slideshow-button");
const slidesWrapper = document.querySelector(
  ".slideshow-wrapper > .slideshow-slide-wrapper"
);

const slides = document.querySelectorAll(
  ".slideshow-wrapper > .slideshow-slide-wrapper > .slide"
);
const slide1 = slides[0];
const slide2 = slides[1];
const slide3 = slides[2];

var currentSlide = 0;

ScrollTrigger.create({
  trigger: section5,
  start: "top 0",
  end: "bottom 0",
  animation: gsap
    .timeline({ immediateRender: false })
    .to(
      navMenuButton,
      {
        color: secondaryColor,
        backgroundColor: primaryColor,
        duration: 0.4,
      },
      0
    )
    .to(
      navHomeButton,
      {
        color: primaryColor,
        duration: 0.4,
      },
      0
    ),
  toggleActions: "restart none none reverse",
  preventOverlaps: true,
});

const hideSlides = (keepSlideIndex) => {
  slides.forEach((s, i) => {
    if (keepSlideIndex !== i) {
      s.classList.add("hide");
    } else {
      s.classList.remove("hide");
    }
  });
};

leftSlideButton.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = 2;
  } else {
    currentSlide--;
  }

  hideSlides(currentSlide);
});

rightSlideButton.addEventListener("click", () => {
  if (currentSlide === 2) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  hideSlides(currentSlide);
});
