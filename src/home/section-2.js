const section2 = "#section-2";
const section2SectionContent = `.section-2-content`;
const section2Left = `${section2SectionContent}>.left`;
const section2Center = `${section2SectionContent}>.center`;

ScrollTrigger.create({
  trigger: section2,
  start: "top top",
  end: "bottom center",
  animation: gsap
    .timeline({ immediateRender: false })
    .to(
      navMenuButton,
      {
        color: primaryColor,
        backgroundColor: secondaryColor,
        duration: 0.3,
      },
      ".1"
    )
    .to(
      navHomeButton,
      {
        color: secondaryColor,
        duration: 0.3,
      },
      ".1"
    ),
  toggleActions: "restart none none reverse",
  preventOverlaps: true,
});

const right = document.querySelector(".right");

ScrollTrigger.create({
  trigger: section2SectionContent,
  scrub: true,
  start: "top top",
  end: "bottom center",
  pin: section2Left,
  pinSpacing: false,
  pinType: "sticky",
});

ScrollTrigger.create({
  trigger: section2SectionContent,
  scrub: true,
  start: "top top",
  end: "bottom center",
  pin: section2Center,
  pinSpacing: false,
  pinType: "sticky",
});
