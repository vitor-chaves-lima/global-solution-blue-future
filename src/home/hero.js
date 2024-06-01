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

function updateText() {
  highlightedTextElement.innerText = textsValues[currentIndex];
  currentIndex = (currentIndex + 1) % textsValues.length;
}

const highlightTimeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });
highlightTimeline
  .to(highlightedText, { duration: 1, opacity: 0, onComplete: updateText })
  .to(highlightedText, { duration: 1, opacity: 1 });

updateText();

gsap.fromTo(
  fish1,
  {
    scrollTrigger: {
      trigger: hero,
      scrub: true,
      start: "top center",
    },
    x: 300,
  },
  {
    scrollTrigger: {
      trigger: hero,
      scrub: true,
      start: "top center",
    },
    x: -400,
  }
);

gsap.fromTo(
  fish2,
  {
    scrollTrigger: {
      trigger: hero,
      scrub: true,
      start: "top center",
    },
    y: 120,
    x: -1000,
  },
  {
    scrollTrigger: {
      trigger: hero,
      scrub: true,
      start: "top center",
    },
    x: 100,
    y: 50,
  }
);
