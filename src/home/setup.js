gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);

const main = document.querySelector("main");
const platformAccessButtons = document.querySelector("#platform-access-btns");

const scrollbar = Scrollbar.init(main, {
  damping: 0.01,
  delegateTo: document,
});

window.addEventListener("load", () => {
  const isLogged = localStorage.getItem("signedBool") == "true";
  if (isLogged) {
    platformAccessButtons.innerHTML = `<a class="btn" href="../dashboard">Entrar na plataforma</a>`;
  } else {
    platformAccessButtons.innerHTML = `<a class="btn" href="../signin">Cadastrar</a><a href="../login">Já tenho uma conta</a>`;
  }
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
