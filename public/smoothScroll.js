let smoothScroll = () => {
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 1,
  };
  //needs to work not only on scroll
  window.addEventListener("scroll", () => {
    for (let i = 0; i < 20; i++) {
      console.log(data.rounded, window.scrollY);
      //Set Current to the scroll position amount
      data.current = window.scrollY;
      // Set Previous to the scroll previous position
      data.previous += (data.current - data.previous) * data.ease;
      // Set rounded to
      data.rounded = Math.round(data.previous * 100) / 100;

      document.querySelector(
        ".scrollContainer"
      ).style.top = `${-window.scrollY}px`;

      //for until those two are the same
    }
  });
};
