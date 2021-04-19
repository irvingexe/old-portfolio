import React, { useState, useEffect, useContext, useRef } from "react";
import Lottie from "../Lottie";
import shineSVG from "../../assets/shine";
import Context from "../../store/context";

export default function Contact() {
  const [shining, setShining] = useState(false);
  const [word, setWord] = useState("proposal?");
  const { state, actions } = useContext(Context);
  const words = ["project?", "idea?", "proposal?"];
  const currentWord = useRef(0);
  const currentLength = useRef(words[0].length);
  const dir = useRef(false);

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

  useEffect(() => {
    setTimeout(() => {
      if (currentLength.current > 0 && !dir.current) {
        currentLength.current--;
        setWord(words[currentWord.current].substring(0, currentLength.current));
      } else if (currentLength.current === 0) {
        dir.current = true;
        currentWord.current =
          currentWord.current < words.length - 1 ? currentWord.current + 1 : 0;
        currentLength.current++;
        setWord(words[currentWord.current].substring(0, currentLength.current));
      } else if (currentLength.current === words[currentWord.current].length) {
        setTimeout(() => {
          dir.current = false;
          currentLength.current--;
          setWord(
            words[currentWord.current].substring(0, currentLength.current)
          );
        }, 1500);
      } else {
        currentLength.current++;
        setWord(words[currentWord.current].substring(0, currentLength.current));
      }
    }, 50);
  }, [word]);

  return (
    <div id="contact" className="center scrollOut" data-section="contact">
      <div>
        <h1 className="font-xl">
          Do you have any <br /> {word}&nbsp;
        </h1>
        <div>
          <p className="font-m">Let's get in touch</p>
          <ul>
            <li>
              <div className="arrow"></div>
              <div id="mailto" className="center">
                <div className="shine">
                  <Lottie play={shining} animationData={shineSVG} />
                </div>
                <div className="link">
                  <a
                    onMouseEnter={mailHover}
                    onMouseLeave={() => {
                      changeCursor("default");
                    }}
                    className="font-l bold"
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
          <p className="love font-s"></p>
        </div>
      </div>
    </div>
  );
}
