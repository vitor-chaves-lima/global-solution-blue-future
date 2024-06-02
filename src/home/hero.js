const hero = "#hero";
const heroScrollIndicator = ".hero-scroll-icon-wrapper";
const highlightedText = ".hero-content>h2>span";
const highlightedTextElement = document.querySelector(highlightedText);
const fish1 = ".fish-1";
const fish2 = ".fish-2";

const heroScrollIndicatorTween = gsap.to(heroScrollIndicator, {
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  y: 30,
  scrollTrigger: {
    trigger: hero,
    start: "top center",
    end: "bottom top",
    toggleActions: "play pause resume reset",
  },
});

const textsValues = ["Lorem Ipsum", "Dolor sit", "consectetur adipiscing"];
let currentIndex = 0;

const highlightTimeline = gsap
  .timeline({
    repeat: -1,
    repeatDelay: 2,
    scrollTrigger: {
      trigger: hero,
      start: "top center",
      end: "bottom top",
      toggleActions: "play pause resume reset",
    },
  })
  .to(highlightedText, {
    duration: 1,
    opacity: 0,
    onComplete: () => {
      highlightedTextElement.innerText = textsValues[currentIndex];
      currentIndex = (currentIndex + 1) % textsValues.length;
    },
  })
  .to(highlightedText, { duration: 1, opacity: 1 });

TweenLite.set(fish1, {
  x: "0",
  y: "-45vh",
});

TweenLite.set(fish2, {
  x: "-20vw",
  y: "-70vh",
});

const fishesTimeline = gsap
  .timeline({})
  .to(fish1, {
    scrollTrigger: {
      trigger: hero,
      scrub: 0.001,
      start: "center center",
      end: "bottom center",
    },
    x: "-25vw",
  })
  .to(fish2, {
    scrollTrigger: {
      trigger: hero,
      scrub: 0.001,
      start: "center center",
      end: "bottom center",
    },
    x: "0",
  });

ScrollTrigger.create({
  trigger: hero,
  start: "top 0",
  end: "bottom 0",
  animation: gsap
    .timeline({ immediateRender: false })
    .to(
      navMenuButton,
      {
        color: primaryColor,
        backgroundColor: secondaryColor,
        duration: 0.4,
      },
      0
    )
    .to(
      navHomeButton,
      {
        color: secondaryColor,
        duration: 0.4,
      },
      0
    ),
  toggleActions: "restart none none reverse",
  preventOverlaps: true,
});
