import React, { useContext, useEffect } from "react";
import Context from "../../store/context";
import infoProjects from "../projects.json";
import useWindowSize from "../../hooks/useWindowSize";

export default function Work() {
  const { state, actions } = useContext(Context);
  const size = useWindowSize();

  /*
  useEffect(() => {
    transform();
  }, [size.width]);
  */

  const changeCursor = (cursor) => {
    actions({
      type: "setState",
      payload: { ...state, cursor: { type: cursor } },
    });
  };
  const open = (id) => {
    actions({
      type: "setState",
      payload: {
        ...state,
        project: { isOpened: true, id: id },
        cursor: { type: "default" },
        scroll: {
          y: window.innerHeight * (id + 1) + window.innerHeight / 4,
          transform: document.querySelector(".sections").style.transform,
        },
      },
    });

    document.querySelectorAll(".project .title > div").forEach((e) => {
      e.classList.add("static");
      e.style.transform = "none";
    });
    document.querySelectorAll(".project .mockup img").forEach((e) => {
      e.classList.add("static");
      e.style.transform = "none";
    });
    document.querySelector(".modal-scroll").style.position = "fixed";
    document.querySelector(".sections").style.transition = "all .5s ease";
    document.querySelector(".sections").style.transform = `translateY(-${
      window.innerHeight * (id + 1) + window.innerHeight / 4
    }px)`;
    setTimeout(() => {
      document.querySelector(".sections").style.transition = "none";
    }, 500);
    window.scrollBy(0, -window.scrollY);
  };

  /*
  const transform = (screenX, screenY) => {
    document.querySelectorAll(".mockup").forEach((e) => {
      e.style.transform = `translateX(calc((-1 * ${
        (screenX - window.innerWidth / 2) * 0.05
      }px))) translateY(calc(-1 * ( ${
        (screenY - window.innerHeight / 2) * 0.05
      }px)))`;
    });
    document.querySelectorAll(".mockup +.title").forEach((e) => {
      e.style.transform = `translateX(calc((-1 * ${
        (screenX - window.innerWidth / 2) * 0.02
      }px))) translateY(calc(-1 * ( ${
        (screenY - window.innerHeight / 2) * 0.02
      }px)))`;
    });
  };
  */

  /*
  const stopTransform = () => {
    setAxis({ phone: { x: -20, y: -85 }, desk: { x: -10, y: -90 } });
  };
*/

  const projects = [];

  for (let i in infoProjects) {
    projects.push(
      <div key={i} className="center project scrollOut" data-section="work">
        <div
          className={
            "mockup center unselectable" +
            (state.project.isOpened ? " open" : "")
          }
        >
          <img
            src={require(`../../assets/projects/${i}/-1.webp`)}
            alt={infoProjects[i].title}
          />
        </div>
        <div className="title parallax" data-speed="-0.2">
          <div>
            <label
              className="font-xl name"
              onClick={() => {
                open(parseInt(i));
              }}
              onMouseLeave={() => {
                changeCursor("default");
              }}
              onMouseEnter={() => {
                changeCursor("hover eye");
              }}
            >
              {infoProjects[i].title}
            </label>
            <div
              className="font-xs open"
              onMouseEnter={() => {
                changeCursor("hover eye");
              }}
              onMouseLeave={() => {
                changeCursor("default");
              }}
              onClick={() => {
                open(parseInt(i));
              }}
            >
              See case study
              <div className="arrow"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <div id="work">{projects}</div>;
}
