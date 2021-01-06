let parallax = () => {
  const parallax = document.querySelectorAll(".parallax");
  const works = document.querySelectorAll("*[data-section=work]");

  window.addEventListener("scroll", () => {
    let scroll;
    parallax.forEach((e, i) => {
      scroll = e.offsetTop + works.item(i).offsetTop - window.pageYOffset;
      let speed = e.dataset.speed;
      e.style.transform = `translateY(${scroll * speed}px)`;
    });
  });
};
