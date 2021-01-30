import React, { useContext, useEffect } from "react";
import "../../styles/background.css";
import projects from "../projects.json";
import Context from "../../store/context";

export default function Background() {
  const { state } = useContext(Context);
  return (
    <div
      id="background"
      style={{
        background: state.project.isOpened
          ? projects[state.project.id].color
          : "#00000000",
      }}
    >
      <div
        id="doodle"
        style={{
          opacity: state.project.isOpened ? 0 : 1,
        }}
      ></div>
    </div>
  );
}
