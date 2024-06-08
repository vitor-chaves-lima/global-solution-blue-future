const section4 = "#section-4";

ScrollTrigger.create({
  trigger: section4,
  start: "top 0",
  end: "bottom 0",
  onEnter: (_) => {
    fadeOutAndChangeText("Objetivos");
  },
  onEnterBack: () => {
    fadeOutAndChangeText("Objetivos");
  },
  toggleActions: "restart none none reverse",
  preventOverlaps: true,
});

ScrollTrigger.create({
  trigger: section4,
  start: "top 0",
  end: "bottom 0",
  animation: gsap
    .timeline({ immediateRender: false })
    .to(navSectionTitle, { color: secondaryColor, duration: 0.4 })
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
