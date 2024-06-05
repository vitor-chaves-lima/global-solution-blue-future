const section5 = "#section-5";

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
