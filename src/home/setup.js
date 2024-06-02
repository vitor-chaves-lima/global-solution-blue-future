gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const main = document.querySelector("main");

const scrollbar = Scrollbar.init(main, {
  damping: 0.01,
  delegateTo: document,
});

scrollbar.setPosition(0, 0);
scrollbar.track.xAxis.element.remove();

scrollbar.addListener(ScrollTrigger.update);

ScrollTrigger.scrollerProxy(document.body, {
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
});
