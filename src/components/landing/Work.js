import React, { useContext } from "react";
import Context from "../../store/context";
import Mockup from "./Mockup";
import infoProjects from "../projects.json";

export default function Work() {
  const { state, actions } = useContext(Context);

  const cursorProject = () => {
    actions({
      type: "setState",
      payload: { ...state, cursor: { type: "project" } },
    });
  };
  const resetCursor = () => {
    actions({
      type: "setState",
      payload: { ...state, cursor: { type: "default" } },
    });
  };
  const open = (id) => {
    actions({
      type: "setState",
      payload: {
        ...state,
        project: { isOpened: true, id: id },
        cursor: { type: "default" },
      },
    });
  };

  const projects = [];

  for (let i in infoProjects) {
    projects.push(
      <div key={i} className="center scrollOut">
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
            device={infoProjects[i].device}
            img1={"../../assets/projects/" + i + "/0.png"}
            img2={"../../assets/projects/" + i + "/-1.png"}
          />
        </div>
        <h1 className="title font-xl">{infoProjects[i].splitTitle[0]}</h1>
        <h1 className="title font-xl">{infoProjects[i].splitTitle[1]}</h1>
      </div>
    );
  }

  return (
    <div id="work">
      {projects}
      <div className="bg-title font-xxl bold center unselectable">
        <h1>Works</h1>
      </div>
    </div>
  );
}
