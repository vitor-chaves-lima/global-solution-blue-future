const primaryColor = "#070e16";
const secondaryColor = "#a6d1ff";

const navMenuButton = "#nav-menu-btn";
const navMenuContent = "#nav-menu-content";
const navMenuAnimation = "#nav-menu-animation";
const navTitle = "nav>h1";

let isNavMenuOpen = false;

const navMenuTimeline = gsap.timeline({
  paused: true,
  duration: 0.4,
});

const generateNavMenuTimeline = (mobile) => {
  navMenuTimeline.clear();

  navMenuTimeline.fromTo(
    navMenuContent,
    { top: "-100vh", duration: 0.4 },
    { top: 0, duration: 0.4 },
    0
  );
  navMenuTimeline.fromTo(
    navMenuAnimation,
    { bottom: "-100vh", duration: 0.4 },
    { bottom: 0, duration: 0.4 },
    0
  );
  navMenuTimeline.fromTo(
    navTitle,
    { color: "black", duration: 0.3 },
    { color: secondaryColor, duration: 0.3 },
    "+.1"
  );

  if (mobile) {
    navMenuTimeline.fromTo(
      navMenuButton,
      { color: "black", duration: 0.3 },
      { color: secondaryColor, duration: 0.3 },
      "+.1"
    );
  } else {
    navMenuTimeline.fromTo(
      navMenuButton,
      { color: "black", duration: 0.3 },
      { color: primaryColor, duration: 0.1 },
      "+.3"
    );
  }
};

window.addEventListener("load", () => {
  document.querySelector(navMenuButton).onclick = toggleNavMenu;
});

window.addEventListener("mobileResolution", () => {
  generateNavMenuTimeline(true);

  if (isNavMenuOpen === true) {
    navMenuTimeline.progress(1);
  }
});

window.addEventListener("desktopResolution", () => {
  generateNavMenuTimeline(false);

  if (isNavMenuOpen === true) {
    navMenuTimeline.progress(1);
  }
});

const toggleNavMenu = () => {
  isNavMenuOpen = !isNavMenuOpen;

  if (isNavMenuOpen) {
    navMenuTimeline.play();
  } else {
    navMenuTimeline.reverse();
  }
};
