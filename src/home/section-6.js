const section6 = "#section-6";

ScrollTrigger.create({
  trigger: section6,
  start: "top 20",
  end: "bottom 0",
  onEnter: (_) => {
    fadeOutAndChangeText("Como a solução ajuda as pessoas");
  },
  onEnterBack: () => {
    fadeOutAndChangeText("Como a solução ajuda as pessoas");
  },
  toggleActions: "restart none none reverse",
  preventOverlaps: true,
});

ScrollTrigger.create({
  trigger: section6,
  start: "top 20",
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
