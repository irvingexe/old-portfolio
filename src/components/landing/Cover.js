import React, { useContext, useState, useEffect } from "react";
import "../../styles/landing.css";
import Context from "../../store/context";
import useWindowScroll from "../../hooks/useWindowScroll";

export default function Cover() {
  const scroll = useWindowScroll();
  const { state, actions } = useContext(Context);
  const [transition, setTransition] = useState(
    "transform 0.5s ease, width 0.7s ease, opacity 0.5s ease"
  );

  useEffect(() => {
    if (scroll && transition !== "none") {
      setTransition("none");
    }
  }, [scroll]);

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
        <div className="center">
          <p>
            Hello! I'm Irving. I'm a software developer with a taste for design
            and interactivity
          </p>
          <div
            className="font-xs"
            onMouseEnter={() => {
              changeCursor("hover");
              setTransition(
                "transform 0.5s ease, width 0.7s ease, opacity 0.5s ease"
              );
            }}
            onMouseLeave={() => {
              changeCursor("default");
            }}
            onClick={changeSection}
          >
            <div className="arrow" style={{ transition: transition }} />
            <div>Take a look at my work</div>
          </div>
        </div>
      </div>
    </div>
  );
}
