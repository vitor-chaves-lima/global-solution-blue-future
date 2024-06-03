const primaryColor = "#070e16";
const secondaryColor = "#a6d1ff";

const navMenuButton = "#nav-menu-btn";
const navMenuContent = "#nav-menu-content";
const navMenuAnimation = "#nav-menu-animation";
const navSectionButton = "#nav-section-btn";
const navHomeButton = "#nav-home-btn";

let isNavMenuOpen = false;

const navmenuOpenEvent = new CustomEvent("navmenu", {
  detail: {
    open: true,
  },
});

const navmenuCloseEvent = new CustomEvent("navmenu", {
  detail: {
    open: false,
  },
});

const scrollTo = (elementSelector) => {
  const element = document.querySelector(elementSelector);

  if (element) {
    const offset = element.offsetTop;
    scrollbar.scrollTo(0, offset, 1000);
  }
};

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
    navHomeButton,
    { duration: 0.3 },
    { color: secondaryColor, duration: 0.3 },
    "+.1"
  );
  navMenuTimeline.fromTo(
    navMenuAnimation,
    { bottom: "-100vh", duration: 0.4 },
    { bottom: 0, duration: 0.4 },
    0
  );
  if (mobile) {
    navMenuTimeline.fromTo(
      navMenuButton,
      { color: secondaryColor, duration: 0.3 },
      { color: secondaryColor, backgroundColor: "transparent", duration: 0.3 },
      "+.1"
    );
  } else {
    navMenuTimeline.fromTo(
      navMenuButton,
      { color: secondaryColor, duration: 0.3 },
      { color: primaryColor, backgroundColor: "transparent", duration: 0.1 },
      "+.3"
    );
  }
};

window.addEventListener("load", () => {
  document
    .querySelector(navMenuButton)
    .addEventListener("click", toggleNavMenu);

  document.querySelector(navHomeButton).addEventListener("click", () => {
    if (isNavMenuOpen) {
      navMenuTimeline.eventCallback("onReverseComplete", () => {
        toggleNavMenu();
        scrollTo(hero);
        navMenuTimeline.eventCallback("onReverseComplete", () => {});
      });

      navMenuTimeline.reverse();
    } else {
      scrollTo(hero);
    }
  });

  document.querySelectorAll(navSectionButton).forEach((b) => {
    b.addEventListener("click", function () {
      const target = this.getAttribute("data-target");

      navMenuTimeline.eventCallback("onReverseComplete", () => {
        toggleNavMenu();
        scrollTo(target);
        navMenuTimeline.eventCallback("onReverseComplete", () => {});
      });

      navMenuTimeline.reverse();
    });
  });
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

window.addEventListener("navmenu", (e) => {
  if (e.detail.open === true) {
    navMenuTimeline.play();
  } else if (e.detail.open === false) {
    navMenuTimeline.reverse();
  }
});

const toggleNavMenu = () => {
  isNavMenuOpen = !isNavMenuOpen;

  if (isNavMenuOpen) {
    window.dispatchEvent(navmenuOpenEvent);
  } else {
    window.dispatchEvent(navmenuCloseEvent);
  }
};
