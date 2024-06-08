const section3 = "#section-3";

ScrollTrigger.create({
  trigger: section3,
  start: "top 0",
  end: "bottom 0",
  onEnter: (_) => {
    fadeOutAndChangeText("Tecnologias utilizadas");
  },
  onEnterBack: () => {
    fadeOutAndChangeText("Tecnologias utilizadas");
  },
  toggleActions: "restart none none reverse",
  preventOverlaps: true,
});

ScrollTrigger.create({
  trigger: section3,
  start: "top 0",
  end: "bottom 0",
  animation: gsap
    .timeline({ immediateRender: false })
    .to(navSectionTitle, { color: primaryColor, duration: 0.4 })
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
