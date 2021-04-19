import React, { useContext, useEffect } from "react";
import Context from "../../store/context";
import infoProjects from "../projects.json";

export default function Work() {
  const { state, actions } = useContext(Context);

  useEffect(() => {
    transform();
  }, [window.innerWidth]);

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

  const transform = (screenX, screenY) => {
    /*
    //only if scrolling
    if (!state.project.isOpened) {
      const xAxisP = (screenX ? screenX : window.innerWidth / 2) / 2 / 30 - 30;
      const yAxisP = -(screenY ? screenY : window.innerWidth / 2) / 2 / 30 - 75;
      const xAxisD = (screenX ? screenX : window.innerWidth / 2) / 2 / 30 - 20;
      const yAxisD = -(screenY ? screenY : window.innerWidth / 2) / 2 / 30 - 80;

      document.querySelectorAll(".phone .scene ").forEach((e) => {
        e.style.transform = `rotateX(${yAxisP}deg) rotateZ(${xAxisP}deg) scale3d(${scale},${scale},${scale})`;
      });
      document.querySelectorAll(".desktop .scene").forEach((e) => {
        e.style.transform = `rotateX(${yAxisD}deg) rotateZ(${xAxisD}deg) scale3d(${scale},${scale},${scale})`;
      });
    }
    */
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
          onClick={() => {
            open(parseInt(i));
          }}
          className={
            "mockup center unselectable" +
            (state.project.isOpened ? " open" : "")
          }
          onMouseEnter={() => {
            changeCursor("hover eye");
          }}
          onMouseLeave={() => {
            changeCursor("default");
          }}
        >
          <img
            src={require(`../../assets/projects/${i}/-1.webp`)}
            alt={infoProjects[i].title}
          />
        </div>
        <div className="title parallax" data-speed="-0.2">
          <div>
            <h1 className="font-xl">{infoProjects[i].title}</h1>
            <div
              className="font-xs"
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

  return (
    <div id="work" onMouseMove={(e) => transform(e.screenX, e.screenY)}>
      {projects}
    </div>
  );
}
