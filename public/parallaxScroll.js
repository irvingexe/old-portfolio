let parallax = () => {
  const parallax = document.querySelectorAll(".parallax");
  const works = document.querySelectorAll("*[data-section=work]");
  const arrow = document.querySelector("#cover .arrow");
  const cta = document.querySelector("#cover .arrow +div");
  const modal = document.querySelector(".modal-content");
  const hello = document.querySelector("#cover p");

  let scrollDirY, speed;
  window.addEventListener("scroll", () => {
    scrollDirY = document.documentElement.dataset.scrollDirY;

    parallax.forEach((e, i) => {
      scroll = e.offsetTop + works.item(i).offsetTop - window.pageYOffset;
      speed = e.dataset.speed;
      e.style.transform = `translateY(${scroll * speed}px)`;
    });

    arrow.style.transition =
      scrollDirY === -1 || window.pageYOffset === 0
        ? "opacity 0.5s ease, transform 0.5s ease, width 1.3s ease"
        : "opacity 0.5s ease, transform 0.5s ease, width 0s";
    arrow.style.top = `${window.pageYOffset * 0.5}px`;
    arrow.style.opacity = 1 - (window.pageYOffset * 0.8) / 100;
    arrow.style.width = `calc(10rem + ${window.pageYOffset * 2}px)`;
    cta.style.opacity = 1 - (window.pageYOffset * 0.8) / 100;
    cta.style.top = `${window.pageYOffset * 0.25}px`;

    modal.style.marginLeft = `max(${
      3 - (window.pageYOffset * 0.8) / 100
    }vw, 0rem)`;
    modal.style.marginRight = `max(${
      3 - (window.pageYOffset * 0.8) / 100
    }vw, 0rem`;

    hello.style.opacity = 1 - (window.pageYOffset * 0.15) / 100;
  });
};
