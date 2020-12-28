import React, { useContext } from "react";
import "../../styles/landing.css";
import arrow from "../../assets/arrow.svg";
import Context from "../../store/context";

export default function Cover() {
  const { state, actions } = useContext(Context);
  const cursorMsg = () => {
    actions({
      type: "setState",
      payload: {
        ...state,
        cursor: {
          type: "project",
          msg: (
            <div>
              Take a look <br /> at my work
            </div>
          ),
        },
      },
    });
  };
  const resetCursor = () => {
    actions({
      type: "setState",
      payload: { ...state, cursor: { type: "default" } },
    });
  };
  return (
    <div id="cover">
      <div>
        <p className="center">
          Hey! <br />
          I’m Irving Mariscales, <br />a software developer with a taste for
          design and interactivity
        </p>

        <a href="#work">
          <label
            id="arrow"
            className="center"
            onMouseEnter={cursorMsg}
            onMouseLeave={resetCursor}
          >
            <img alt="" src={arrow} className="up" />
          </label>
        </a>
      </div>
    </div>
  );
}
