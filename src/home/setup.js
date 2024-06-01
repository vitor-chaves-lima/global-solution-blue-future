gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  ScrollTrigger.refresh(); // RESET SCROLL TRIGGER TO PREVENT SCRUB ERRORS
});

// INITIALIZE SCROLLBAR
const scrollbar = Scrollbar.init(
  document.querySelector("#scroll-container main"),
  {
    damping: 0.01,
    thumbMinSize: 20,
  }
);

ScrollTrigger.scrollerProxy("#scroll-container main", {
  scrollTop(value) {
    if (arguments.length) {
      scrollbar.scrollTop = value;
    }
    return scrollbar.scrollTop;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
  pinType: document.querySelector("#scroll-container main").style.transform
    ? "transform"
    : "fixed",
});

scrollbar.addListener(ScrollTrigger.update);
