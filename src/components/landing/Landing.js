import React, { useRef, useEffect, useContext } from 'react';
import Context from '../../store/context';
import Cover from './Cover';
import Ido from './Ido';
import Who from './Who';
import Contact from './Contact';
import Work from './Work';
import useWindowSize from '../../hooks/useWindowSize';
import useWindowScroll from '../../hooks/useWindowScroll';

export default function Landing() {
  const { state, actions } = useContext(Context);
  const size = useWindowSize();
  const scrollContainer = useRef();
  const windowScroll = useWindowScroll();
  let data = {
    ease: 0.08,
    current: 0,
    previous: state.scroll.y,
    rounded: 0,
  };
  const requests = useRef([]);

  window.mobileAndTabletCheck = function () {
    let check = false;
    (function (a) {
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
          a
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          a.substr(0, 4)
        )
      )
        check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };

  useEffect(() => {
    if (!state.project.isOpened) {
      document.body.style.height = `${scrollContainer.current.offsetHeight}px`;
    }
  }, [
    window.mobileAndTabletCheck() ? size.width : size,
    state.project.isOpened,
  ]);

  //Run scrollrender once page is loaded.
  useEffect(() => {
    if (!state.project.isOpened) {
      requests.current.push(requestAnimationFrame(skewScrolling));
    } else {
      requests.current.map((i) => {
        cancelAnimationFrame(i);
      });
    }
  }, [state.project.isOpened]);

  useEffect(() => {
    if (
      document.querySelector("#work > :nth-child(1)[data-scroll='out']") &&
      document.querySelector("#work > :nth-child(2)[data-scroll='out']")
    ) {
      actions({
        type: 'setState',
        payload: { ...state, cursor: { type: 'default' } },
      });
    }
  }, [windowScroll]);

  const times = [];
  let fps;

  const mode = (a) =>
    Object.values(
      a.reduce((count, e) => {
        if (!(e in count)) {
          count[e] = [0, e];
        }

        count[e][0]++;
        return count;
      }, {})
    ).reduce((a, v) => (v[0] < a[0] ? a : v), [0, null])[1];

  const modes = useRef([]);

  // Scrolling
  const skewScrolling = () => {
    if (modes.current.length < 100) {
      //dynamic frame rate
      const now = performance.now();
      while (times.length > 0 && times[0] <= now - 1000) {
        times.shift();
      }
      times.push(now);
      fps = times.length;

      data.ease = (60 * 0.08) / fps;
      modes.current.push(data.ease);
    } else if (modes.current.length === 100) {
      modes.current.push(data.ease);
      data.ease = mode(modes.current);
    }

    const cta = document.querySelector('#cover .arrow +div');
    const arrow = document.querySelector('#cover .arrow');
    const hello = document.querySelector('#cover p');
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    let skew = velocity * 20;
    //skew limits
    switch (true) {
      case skew > 20:
        skew = 20;
        break;
      case skew < -20:
        skew = -20;
        break;
      case (skew > -0.01 && skew < 0) || (skew < 0.01 && skew > 0):
        skew = 0;
        break;

      default:
        break;
    }

    //Assign skew and smooth scrolling to the scroll container skewY(${skew}deg)
    scrollContainer.current.style.transform = `translateY(-${data.rounded}px)`;
    document
      .querySelectorAll('.project .title > div:not(.static)')
      .forEach((e) => {
        e.style.transform = `translateY(${skew * 0.8}vh)`;
      });
    document
      .querySelectorAll('.project .mockup img:first-child:not(.static)')
      .forEach((e) => {
        e.style.transform = `scale(${1 - Math.abs(skew / 200)})`;
      });

    if (window.pageYOffset < window.innerHeight) {
      cta.style.opacity = 1 - (data.rounded * 0.8) / 100;
      cta.style.top = `${data.rounded * 0.25}px`;

      arrow.style.opacity = 1 - data.rounded / 100;
      arrow.style.width = `calc(2rem + ${data.rounded * 2}px)`;
      arrow.style.transform = `translateY(${
        data.rounded * 0.5
      }px) rotate(90deg)`;

      hello.style.opacity = 1 - (data.rounded * 0.2) / 100;
    }

    //make it work on scroll only
    //loop vai raf
    requests.current.push(requestAnimationFrame(skewScrolling));
  };
  return (
    <div
      ref={scrollContainer}
      className={`sections lateral-margin ${
        state.project.isOpened ? 'project-open' : ''
      }`}
    >
      <Cover />
      <Work />
      <Ido />
      <Who />
      <Contact />
    </div>
  );
}
