const parallax = () => {
  const parallax = document.querySelectorAll(".parallax");
  const works = document.querySelectorAll("*[data-section=work]");
  const arrow = document.querySelector("#cover .arrow");
  const cta = document.querySelector("#cover .arrow +div");
  const modal = document.querySelector(".modal-content");
  const hello = document.querySelector("#cover p");
  let timeout;

  let scrollDirY, speed;
  window.addEventListener("scroll", () => {
    clearTimeout(timeout);
    //debounce this
    scrollDirY = document.documentElement.dataset.scrollDirY;

    if (document.querySelector(".modal").style.top === "0px") {
      //modal margins
      modal.style.marginLeft = `max(${
        3 - (window.pageYOffset * 0.8) / 100
      }vw, 0rem)`;
      modal.style.marginRight = `max(${
        3 - (window.pageYOffset * 0.8) / 100
      }vw, 0rem`;
    } else if (
      document.querySelector("#cover[data-scroll = 'in']") ||
      window.pageYOffset === 0
    ) {
      /*
      //project names
      parallax.forEach((e, i) => {
        scroll = e.offsetTop + works.item(i).offsetTop - window.pageYOffset;
        speed = e.dataset.speed;
        e.style.transform = `translateY(${scroll * speed}px)`;
      });

      //cover
      arrow.style.transition =
        scrollDirY === -1 || window.pageYOffset === 0
          ? "opacity 0.5s ease, transform 0.5s ease, width 1.3s ease"
          : "opacity 0.5s ease, transform 0.5s ease, width 0s";
      arrow.style.top = `${window.pageYOffset * 0.5}px`;
      arrow.style.opacity = 1 - (window.pageYOffset * 0.8) / 100;
      arrow.style.width = `calc(10rem + ${window.pageYOffset * 2}px)`;
      */
      cta.style.opacity = 1 - (window.pageYOffset * 0.8) / 100;
      cta.style.top = `${window.pageYOffset * 0.25}px`;
      arrow.style.transition =
        (scrollDirY === "-1" &&
          window.pageYOffset !== 0 &&
          document.querySelector("#cover[data-scroll = 'in']")) ||
        (scrollDirY === "-1" && window.pageYOffset === 0) ||
        document.querySelector("#cover[data-scroll = 'out']")
          ? "width 1.3s ease, opacity 1.3s ease"
          : "none";
      arrow.style.opacity = 1 - window.pageYOffset / 100;
      arrow.style.width = `calc(10rem + ${window.pageYOffset * 2}px)`;
      arrow.style.transform = `translateY(${window.pageYOffset}px) rotate(90deg)`;

      hello.style.opacity = 1 - (window.pageYOffset * 0.2) / 100;

      timeout = setTimeout(() => {
        arrow.style.transition =
          "transform 1.3s ease, width 1.3s ease, opacity 1.3s ease";
      }, 100);
    }
  });
};
