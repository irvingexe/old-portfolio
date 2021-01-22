import React, { useState, useEffect, useContext } from "react";
import Lottie from "../Lottie";
import shineSVG from "../../assets/shine";
import Context from "../../store/context";

export default function Contact() {
  const [shining, setShining] = useState(false);
  const { state, actions } = useContext(Context);
  const mailHover = () => {
    changeCursor("hover");
    shine();
  };
  const changeCursor = (cursor) => {
    actions({
      type: "setState",
      payload: { ...state, cursor: { type: cursor } },
    });
  };
  const shine = () => {
    setShining(true);
  };

  useEffect(() => {
    setShining(false);
  }, [shining]);

  return (
    <div id="contact" className="center scrollOut" data-section="contact">
      <div>
        <h1 className="font-m">Let's get in touch</h1>
        <div>
          <p className="font-s">Do you have any proposal?</p>
          <ul>
            <li id="mailto" className="center">
              <div className="shine">
                <Lottie play={shining} animationData={shineSVG} />
              </div>
              <div className="link">
                <a
                  onMouseEnter={mailHover}
                  onMouseLeave={() => {
                    changeCursor("default");
                  }}
                  className="font-s"
                  href="mailto:hello@irving.work"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="line"></div>hello@irving.work
                </a>
              </div>
              <div className="shine">
                <Lottie play={shining} animationData={shineSVG} />
              </div>
            </li>
            <li className="link">
              <a
                onMouseEnter={() => {
                  changeCursor("hover");
                }}
                onMouseLeave={() => {
                  changeCursor("default");
                }}
                className="font-s"
                href="https://www.linkedin.com/in/irving-mariscales/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="line"></div>LinkedIn
              </a>
            </li>
            <li className="link">
              <a
                onMouseEnter={() => {
                  changeCursor("hover");
                }}
                onMouseLeave={() => {
                  changeCursor("default");
                }}
                className="font-s"
                href="https://github.com/irvingexe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="line"></div>GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-title font-xxl bold center unselectable">
        <h1>@</h1>
      </div>
    </div>
  );
}
