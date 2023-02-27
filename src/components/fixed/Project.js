import React, { useContext, useRef, useEffect } from 'react';
import '../../styles/project.css';
import Context from '../../store/context';
import infoProjects from '../projects.json';
import useWindowSize from '../../hooks/useWindowSize';

export default function Project() {
  const { state, actions } = useContext(Context);
  const size = useWindowSize();
  const scrollContainer = useRef();
  let data = {
    ease: 0.08,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  const requests = useRef([]);

  useEffect(() => {
    if (state.project.isOpened) {
      document.body.style.height = `${
        scrollContainer.current.getBoundingClientRect().height
      }px`;
    }
  }, [
    size,
    state.project.isOpened,
    scrollContainer.current
      ? scrollContainer.current.getBoundingClientRect().height
      : state.project.isOpened,
  ]);

  // Run scrollrender once page is loaded.
  useEffect(() => {
    if (state.project.isOpened) {
      requests.current.push(requestAnimationFrame(skewScrolling));
    } else {
      requests.current.map((i) => {
        cancelAnimationFrame(i);
      });
    }
  }, [state.project.isOpened]);

  const changeCursor = (cursor) => {
    actions({
      type: 'setState',
      payload: { ...state, cursor: { type: cursor } },
    });
  };

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

    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    /*
    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    let skew = velocity * 20;
    if (skew > 20) {
      skew = 20;
    } else if (skew < -20) {
      skew = -20;
    }
    */

    //Assign skew and smooth scrolling to the scroll container skewY(${skew}deg)
    scrollContainer.current.style.transform = `translateY(-${data.rounded}px)`;

    //modal margins
    /*
    document.querySelector(".modal-content").style.marginLeft = `max(${
      3 - (data.rounded * 0.8) / 100
    }vw, 0rem)`;
    document.querySelector(".modal-content").style.marginRight = `max(${
      3 - (data.rounded * 0.8) / 100
    }vw, 0rem`;
    */

    //loop vai raf
    requests.current.push(requestAnimationFrame(skewScrolling));
  };

  let id = state.project.id;

  let role = [];
  for (let i in infoProjects[id].role) {
    role.push(<li key={i}>{infoProjects[id].role[i]}</li>);
  }

  let process = [];
  process.push(
    <div key={process.length} className="item">
      <h2 className="font-s">{infoProjects[id].process[0][0]}</h2>
      <div>
        {infoProjects[id].process[0][1] && (
          <p
            className="font-s"
            dangerouslySetInnerHTML={{
              __html: infoProjects[id].process[0][1],
            }}
          ></p>
        )}
      </div>
    </div>
  );

  try {
    process.push(
      <div key={process.length} className="img">
        <img
          className="undragable unselectable"
          alt=""
          src={require(`../../assets/projects/${state.project.id}/1.webp`)}
        />
      </div>
    );
  } catch (error) {}

  process.push(
    <p
      key={process.length}
      className="font-m conclution"
      dangerouslySetInnerHTML={{
        __html: infoProjects[id].process[6][1],
      }}
    ></p>
  );

  return (
    <div id="project">
      <div></div>
      <div
        className="modal"
        style={{ top: state.project.isOpened ? 0 : '100vh' }}
      >
        <div ref={scrollContainer} className="modal-scroll">
          <div className="modal-content">
            <div>
              <div className="description">
                <div className="font-xs">
                  <h2 className="font-s">Role</h2>
                  <ul>{role}</ul>
                </div>
                <div>
                  <p className="font-m">{infoProjects[id].abstract}</p>
                </div>
                <div className="img">
                  <img
                    className="undragable unselectable"
                    alt=""
                    src={require(`../../assets/projects/${state.project.id}/0.webp`)}
                  />
                </div>
              </div>
              <hr />
              <div className="process">{process}</div>
            </div>
          </div>
        </div>
        {infoProjects[id].site && (
          <a
            className="site"
            href={infoProjects[id].site}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => {
              changeCursor('hover arrow');
            }}
            onMouseLeave={() => {
              changeCursor('default');
            }}
          >
            Visit website
          </a>
        )}
      </div>
    </div>
  );
}
