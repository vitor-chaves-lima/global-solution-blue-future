const heroScrollIndicator = ".hero-scroll-icon-wrapper";
const highlightedText = ".hero-content>h2>span";
const highlightedTextElement = document.querySelector(highlightedText);

gsap.registerPlugin(TextPlugin);

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
