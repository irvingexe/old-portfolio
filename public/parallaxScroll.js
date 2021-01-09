let parallax = () => {
  const parallax = document.querySelectorAll(".parallax");
  const works = document.querySelectorAll("*[data-section=work]");
  const arrow = document.querySelector("#cover .arrow");
  const cta = document.querySelector("#cover .arrow +div");

  prevScroll = 0;
  window.addEventListener("scroll", () => {
    let scroll;
    parallax.forEach((e, i) => {
      scroll = e.offsetTop + works.item(i).offsetTop - window.pageYOffset;
      let speed = e.dataset.speed;
      e.style.transform = `translateY(${scroll * speed}px)`;
    });

    arrow.style.transition =
      window.pageYOffset < prevScroll
        ? "opacity 0.5s ease, transform 0.5s ease, width 1s ease"
        : "opacity 0.5s ease, transform 0.5s ease, width 0s";
    arrow.style.top = `${window.pageYOffset * 0.5}px`;
    arrow.style.opacity = 1 - (window.pageYOffset * 0.8) / 100;
    arrow.style.width = `calc(10rem + ${window.pageYOffset * 2}px)`;
    cta.style.opacity = 1 - (window.pageYOffset * 0.8) / 100;
    cta.style.top = `${window.pageYOffset * 0.25}px`;

    prevScroll = window.pageYOffset;
  });
};
