import React, { useContext, useEffect } from "react";
import Context from "../../store/context";
import infoProjects from "../projects.json";
import mockup0 from "../../assets/projects/0/-1.png";
import mockup1 from "../../assets/projects/1/-1.png";
import mockup2 from "../../assets/projects/2/-1.png";

export default function Work() {
  const { state, actions } = useContext(Context);
  const mockups = [mockup0, mockup1, mockup2];

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
    document.querySelector(".modal-scroll").style.position = "fixed";
    document.querySelector(".sections").style.transition = "all .5s ease";
    document.querySelector(".sections").style.transform = `translateY(-${
      id + 1
    }00vh)`;
    setTimeout(() => {
      document.querySelector(".sections").style.transition = "none";
    }, 1000);
    actions({
      type: "setState",
      payload: {
        ...state,
        project: { isOpened: true, id: id },
        cursor: { type: "default" },
        scroll: window.innerHeight * (id + 1),
      },
    });
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
      e.style.transform = `translateX(calc(50% + (-1 * ${
        (screenX - window.innerWidth / 2) * 0.05
      }px))) translateY(calc(-1 * (50% + ${
        (screenY - window.innerHeight / 2) * 0.05
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
            changeCursor("hover");
          }}
          onMouseLeave={() => {
            changeCursor("default");
          }}
        >
          <img src={mockups[i]} alt={infoProjects[i].title} />
        </div>
        <div className="title parallax" data-speed="-0.2">
          <h1 className="font-xl">{infoProjects[i].splitTitle[0]}</h1>
          <h1 className="font-xl">{infoProjects[i].splitTitle[1]}</h1>
          <div
            className="font-xs"
            onMouseEnter={() => {
              changeCursor("hover");
            }}
            onMouseLeave={() => {
              changeCursor("default");
            }}
            onClick={() => {
              open(parseInt(i));
            }}
          >
            See project
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      id="work"
      className="scrollOut"
      onMouseMove={(e) => transform(e.screenX, e.screenY)}
    >
      {projects}
    </div>
  );
}
