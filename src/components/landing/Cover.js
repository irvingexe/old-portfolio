import React, { useContext } from "react";
import "../../styles/landing.css";
import Context from "../../store/context";

export default function Cover() {
  const { state, actions } = useContext(Context);

  const changeSection = () => {
    window.scrollBy(
      0,
      document.querySelector("#work").offsetTop - window.scrollY
    );
  };

  const changeCursor = (cursor) => {
    actions({
      type: "setState",
      payload: { ...state, cursor: { type: cursor } },
    });
  };

  return (
    <div id="cover" className="scrollOut" data-section="cover">
      <div className="center">
        <div>
          <p>
            Hello! <br />
            My name is Irving, <br />a software developer with a taste for
            design and interactivity
          </p>
          <div
            className="font-xs"
            onMouseEnter={() => {
              changeCursor("hover");
            }}
            onMouseLeave={() => {
              changeCursor("default");
            }}
            onClick={changeSection}
          >
            <div className="arrow" />
            <div>Take a look at my work</div>
          </div>
        </div>
      </div>
    </div>
  );
}
