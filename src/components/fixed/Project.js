import React, { useContext, useRef, useEffect } from "react";
import "../../styles/project.css";
import Context from "../../store/context";
import infoProjects from "../projects.json";
import useWindowSize from "../../hooks/useWindowSize";

export default function Project() {
  const { state } = useContext(Context);
  const size = useWindowSize();
  const scrollContainer = useRef();
  const data = {
    ease: 0.07,
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
  }, [size, state.project.isOpened]);

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

  // Scrolling
  const skewScrolling = () => {
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

    document.querySelectorAll(".project .title").forEach((e) => {
      e.style.transform = `scale(${1 - (data.rounded * 0.025) / 100})`;
    });

    document.querySelectorAll(".project .mockup").forEach((e) => {
      e.style.transform = `scale(${1 - (data.rounded * 0.05) / 100})`;
    });

    //loop vai raf
    requests.current.push(requestAnimationFrame(skewScrolling));
  };

  let id = state.project.id;

  let role = [];
  for (let i in infoProjects[id].role) {
    role.push(<li key={i}>{infoProjects[id].role[i]}</li>);
  }

  let process = [];
  for (let i = 0; i < infoProjects[id].process.length; i++) {
    process.push(
      <h2 className="font-m" key={`h2-${i}`}>
        {infoProjects[id].process[i][0]}
      </h2>
    );
    process.push(
      <p className="font-s" key={`p-${i}`}>
        {infoProjects[id].process[i][1]}
      </p>
    );
    switch (i) {
      case 0:
        break;
      case 1:
      case 2:
        process.push(
          <div key={`img-${i}`} className="img">
            <img
              className="undragable unselectable"
              alt=""
              src={require(`../../assets/projects/${
                state.project.id
              }/${parseInt(i)}.jpg`)}
            />
          </div>
        );
        process.push(
          <p className="font-s" key={`p-${i}.1`}>
            {infoProjects[id].process[i][2]}
          </p>
        );
        process.push(
          <div key={`img-${i}.1`} className="img">
            <img
              className="undragable unselectable"
              alt=""
              src={require(`../../assets/projects/${
                state.project.id
              }/${parseInt(i)}.1.jpg`)}
            />
          </div>
        );

        break;

      default:
        process.push(
          <div key={`img-${i}`} className="img">
            <img
              className="undragable unselectable"
              alt=""
              src={require(`../../assets/projects/${
                state.project.id
              }/${parseInt(i)}.jpg`)}
            />
          </div>
        );
        break;
    }
  }

  return (
    <div id="project">
      <div></div>
      <div
        className="modal"
        style={{ top: state.project.isOpened ? 0 : "100vh" }}
      >
        <div ref={scrollContainer} className="modal-scroll">
          <div className="modal-content">
            <div>
              <div className="description">
                <div className="font-xs">
                  <h2 className="font-m">Role</h2>
                  <ul>{role}</ul>
                </div>
                <div>
                  <p className="font-m">{infoProjects[id].abstract}</p>
                </div>
                <div className="img">
                  <img
                    className="undragable unselectable"
                    alt=""
                    src={require(`../../assets/projects/${state.project.id}/0.jpg`)}
                  />
                </div>
              </div>
              <div className="process">{process}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
