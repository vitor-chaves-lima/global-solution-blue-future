const mobileResolutionEvent = new CustomEvent("mobileResolution");
const desktopResolutionEvent = new CustomEvent("desktopResolution");
let isMobile = false;

window.addEventListener("load", () => {
  if (window.innerWidth <= 576) {
    isMobile = true;
    window.dispatchEvent(mobileResolutionEvent);
  } else if (window.innerWidth > 576) {
    isMobile = false;
    window.dispatchEvent(desktopResolutionEvent);
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= 576 && isMobile === false) {
    isMobile = true;
    window.dispatchEvent(mobileResolutionEvent);
  } else if (window.innerWidth > 576 && isMobile === true) {
    isMobile = false;
    window.dispatchEvent(desktopResolutionEvent);
  }
});
