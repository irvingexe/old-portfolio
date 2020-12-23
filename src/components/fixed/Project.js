import React, { useContext } from "react";
import "../../styles/project.css";
import Context from "../../store/context";
import github from "../../assets/github.svg";
import infoProjects from "../projects.json";

export default function Project() {
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

  let id = state.project.id;

  let role = "";
  for (let i in infoProjects[id].role) {
    role += i > 0 ? " ● " + infoProjects[id].role[i] : infoProjects[id].role[i];
  }

  let technologies = [];
  for (let i in infoProjects[id].technologies) {
    technologies.push(<li key={i}>{infoProjects[id].technologies[i]}</li>);
  }

  return (
    <div id="project">
      <div></div>
      <div
        className="modal"
        style={{ top: state.project.isOpened ? 0 : "100vh" }}
      >
        <div
          className="modal-scroll"
          style={{ top: state.project.isOpened ? 0 : "100vh" }}
        >
          <div className="modal-content">
            <div className="center">
              <label className="btn-repo center">
                <img alt="" src={github} />
                Source code
              </label>
            </div>

            <div className="font-xs role">{role}</div>

            <h1 className="font-m">{infoProjects[id].title}</h1>
            <h2 className="font-xs">{infoProjects[id].subtitle}</h2>
            <div className="description">
              <p className="font-s">{infoProjects[id].abstract}</p>
              <div className="font-xs">
                <h2 className="font-xs">Tecnologies</h2>
                <ul>{technologies}</ul>
              </div>
            </div>
            <div className="center img">
              <img alt="" src={"../../assets/projects/" + id + "/0.png"} />
            </div>
            <div className="screens" style={{ background: "#EED3D3" }}>
              <section>
                <div className="center">
                  <img alt="" src={"../../assets/projects/" + id + "/1.png"} />
                  <p className="font-s center">{infoProjects[id].details[0]}</p>
                </div>
                <div className="center reverse">
                  <p className="font-s center">{infoProjects[id].details[1]}</p>
                  <img alt="" src={"../../assets/projects/" + id + "/2.png"} />
                </div>
                <div className="three">
                  <div className="center">
                    <img
                      alt=""
                      src={"../../assets/projects/" + id + "/3.png"}
                    />
                  </div>
                  <div className="center">
                    <img
                      alt=""
                      src={"../../assets/projects/" + id + "/4.png"}
                    />
                  </div>
                  <div className="center">
                    <img
                      alt=""
                      src={"../../assets/projects/" + id + "/5.png"}
                    />
                  </div>
                </div>
                <div className="center">
                  <img alt="" src={"../../assets/projects/" + id + "/6.png"} />
                </div>
              </section>
              <label
                className="center"
                onMouseEnter={cursorProject}
                onMouseLeave={resetCursor}
              >
                <h1 className="font-m center">
                  {infoProjects[id > infoProjects.lenght ? 0 : id].title}
                </h1>
                <img
                  className="unselectable"
                  alt=""
                  src={
                    "../../assets/projects/" +
                    (id > infoProjects.lenght ? 0 : id) +
                    "/7.png"
                  }
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
