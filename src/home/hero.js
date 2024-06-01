const hero = "#hero";
const heroScrollIndicator = ".hero-scroll-icon-wrapper";
const highlightedText = ".hero-content>h2>span";
const highlightedTextElement = document.querySelector(highlightedText);
const fish1 = ".fish-1";
const fish2 = ".fish-2";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const heroScrollIndicatorTween = gsap.to(heroScrollIndicator, {
  duration: 2,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  y: 30,
});

const textsValues = ["Lorem Ipsum", "Dolor sit", "consectetur adipiscing"];
let currentIndex = 0;

const highlightTimeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });
highlightTimeline
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
  x: "-30vw",
  y: "-70vh",
});

gsap.to(fish1, {
  scrollTrigger: {
    trigger: hero,
    scrub: true,
    start: "center center",
  },
  x: "-30vw",
});

gsap.to(fish2, {
  scrollTrigger: {
    trigger: hero,
    scrub: true,
    start: "center center",
  },
  x: "0",
});
