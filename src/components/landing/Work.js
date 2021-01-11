import React, { useContext, useState } from "react";
import Context from "../../store/context";
import Mockup from "./Mockup";
import infoProjects from "../projects.json";

export default function Work() {
  const { state, actions } = useContext(Context);
  const [axis, setAxis] = useState({
    phone: { x: -20, y: -85 },
    desk: { x: -10, y: -90 },
  });
  const [transition, setTransition] = useState("all 0.2s ease");
  const [dimensions, setDimensions] = useState({ width: window.innerWidth });

  const cursorHover = () => {
    actions({
      type: "setState",
      payload: { ...state, cursor: { type: "hover", msg: "See project" } },
    });
  };
  const cursorProject = () => {
    actions({
      type: "setState",
      payload: { ...state, cursor: { type: "project", msg: "See project" } },
    });
  };
  const resetCursor = () => {
    actions({
      type: "setState",
      payload: { ...state, cursor: { type: "default", msg: "See project" } },
    });
  };
  const open = (id) => {
    window.scrollBy(0, -window.scrollY);
    actions({
      type: "setState",
      payload: {
        ...state,
        project: { isOpened: true, id: id },
        cursor: { type: "default" },
      },
    });
  };
  const transform = (e) => {
    let xAxisP = e.screenX / 2 / 30 - 30;
    let yAxisP = -e.screenY / 2 / 30 - 75;
    let xAxisD = e.screenX / 2 / 30 - 20;
    let yAxisD = -e.screenY / 2 / 30 - 80;
    setAxis({
      phone: { x: xAxisP, y: yAxisP },
      desk: { x: xAxisD, y: yAxisD },
    });
  };
  const stopTransform = () => {
    setAxis({ phone: { x: -20, y: -85 }, desk: { x: -10, y: -90 } });
    setTransition("all 0.5s ease");
  };
  const fastTransition = () => {
    setTransition("all 0.2s ease");
  };

  React.useEffect(() => {
    function handleResize() {
      setDimensions({ width: window.innerWidth });
    }

    window.addEventListener("resize", handleResize);

    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const scale =
    ((dimensions.width - dimensions.width * 0.4) * 0.7) / 921.5 > 0.45
      ? ((dimensions.width - dimensions.width * 0.4) * 0.7) / 921.5
      : 0.45;
  const projects = [];

  for (let i in infoProjects) {
    projects.push(
      <div key={i} className="center scrollOut" data-section="work">
        <div
          onClick={() => {
            open(parseInt(i));
          }}
          className={
            "mockup center unselectable" +
            (state.project.isOpened ? " open" : "")
          }
          onMouseEnter={cursorProject}
          onMouseLeave={resetCursor}
        >
          <Mockup
            style={{
              phone: {
                transform: `rotateX(${axis.phone.y}deg) rotateZ(${axis.phone.x}deg) scale3d(${scale},${scale},${scale})`,
                transition: transition,
              },
              desk: {
                transform: `rotateX(${axis.desk.y}deg) rotateZ(${axis.desk.x}deg) scale3d(${scale}, ${scale}, ${scale})`,
                transition: transition,
              },
            }}
            device={infoProjects[i].device}
            img1={"../../assets/projects/" + i + "/-1.png"}
            img2={"../../assets/projects/" + i + "/-2.png"}
          />
        </div>
        <div className="title parallax" data-speed="-0.2">
          <h1 className="font-xl">{infoProjects[i].splitTitle[0]}</h1>
          <h1 className="font-xl">{infoProjects[i].splitTitle[1]}</h1>
          <div
            className="font-xs"
            onMouseEnter={cursorHover}
            onMouseLeave={resetCursor}
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
      onMouseMove={transform}
      onMouseLeave={stopTransform}
      onMouseEnter={fastTransition}
    >
      {projects}
      <div className="bg-title font-xxl bold center unselectable">
        <h1>Work</h1>
      </div>
    </div>
  );
}
