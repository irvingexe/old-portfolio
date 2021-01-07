import React, { useContext } from "react";
import "../../styles/landing.css";
import arrow from "../../assets/arrow.svg";
import Context from "../../store/context";

export default function Cover() {
  const { state, actions } = useContext(Context);
  const changeSection = () => {
    window.scrollBy(
      0,
      document.querySelector("#work").offsetTop - window.scrollY
    );
  };
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
      payload: {
        ...state,
        cursor: {
          type: "default",
          msg: (
            <div>
              Take a look <br /> at my work
            </div>
          ),
        },
      },
    });
  };
  return (
    <div id="cover" className="scrollOut" data-section="cover">
      <div>
        <p className="center">
          Hey! <br />
          I’m Irving Mariscales, <br />a software developer with a taste for
          design and interactivity
        </p>

        <label
          id="arrow"
          className="center"
          onMouseEnter={cursorMsg}
          onMouseLeave={resetCursor}
          onClick={() => changeSection()}
        >
          <img alt="" src={arrow} className="up" />
        </label>
      </div>
    </div>
  );
}
