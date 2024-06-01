const section1 = "#section-1";
const animationBackgroundCircle = ".section-1-background>svg>.main-circle";
const section1BackgroundSvg = document.querySelector(
  ".section-1-background>svg"
);
const svgHeight = section1BackgroundSvg.height.baseVal.value;

ScrollTrigger.create({
  trigger: section1,
  start: "top 0",
  end: "bottom 0",
  scrub: 0.001,
  animation: gsap.to(
    animationBackgroundCircle,
    {
      y: svgHeight - 500,
    },
    0
  ),
  scroller: "main",
});

ScrollTrigger.create({
  trigger: section1,
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
  scroller: "main",
});
