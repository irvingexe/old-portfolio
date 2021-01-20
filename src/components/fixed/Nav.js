import React, { useContext, useState, useEffect } from "react";
import Logo from "./Logo";
import Lottie from "../Lottie";
import "../../styles/nav.css";
import Context from "../../store/context";
import backSVG from "../../assets/back.json";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const { state, actions } = useContext(Context);
  const [isBack, setBack] = useState(true);
  const [isClose, setClose] = useState(false);
  const [playClose, setPlayClose] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBack(!state.project.isOpened);
    }, 100);
  }, [state.project.isOpened]);

  const menuState = () => {
    document.body.style.overflow = menu ? "overlay" : "hidden";
    setMenu(!menu);
  };
  const cursorHover = () => {
    actions({
      type: "setState",
      payload: { ...state, cursor: { type: "hover" } },
    });
  };
  const resetCursor = () => {
    actions({
      type: "setState",
      payload: { ...state, cursor: { type: "default" } },
    });
  };
  const changeSection = (section) => {
    document.body.style.overflow = "overlay";

    if (document.querySelector(".arrow.active")) {
      setClose(true);
      setTimeout(() => {
        setPlayClose(true);
      }, 300);
      setTimeout(() => {
        setClose(false);
        setPlayClose(false);
      }, 800);
    }

    actions({
      type: "setState",
      payload: { ...state, section, project: { isOpened: false, id: 0 } },
    });
    setTimeout(() => {
      if (!state.project.isOpened || section !== "cover") {
        document.querySelector(".modal-scroll").style.position = "unset";
        window.scrollBy(
          0,
          document.querySelector("#" + section).offsetTop - window.scrollY
        );
      } else {
        document.querySelector(".modal-scroll").style.position = "unset";
        //window.scrollBy(0, );
        window.scrollBy(0, state.scroll - window.scrollY);
      }
    }, 1);

    setMenu(false);
  };

  return (
    <nav id="nav" className="fixed font-xs">
      <label
        htmlFor="#home"
        className="App-logo"
        onMouseEnter={cursorHover}
        onMouseLeave={resetCursor}
        onClick={() => changeSection("cover")}
      >
        <div id="home">
          {!state.project.isOpened && !isClose ? (
            <Logo />
          ) : (
            <Lottie
              play={isBack && state.project.isOpened}
              playReverse={playClose}
              animationData={backSVG}
            />
          )}
          <div
            className={`arrow ${state.project.isOpened ? "active" : "close"}`}
          ></div>
        </div>
      </label>
      <ul
        id="menu-items"
        className={"center links" + (menu ? " clicked active" : "")}
      >
        <li
          className={
            "work link" + (state.section === "work" ? " clicked active" : "")
          }
          onClick={() => changeSection("work")}
          onMouseEnter={cursorHover}
          onMouseLeave={resetCursor}
        >
          <div>
            <div className="line"></div>Work
          </div>
        </li>
        <li
          className={
            "ido link" + (state.section === "ido" ? " clicked active" : "")
          }
          onClick={() => changeSection("ido")}
          onMouseEnter={cursorHover}
          onMouseLeave={resetCursor}
        >
          <div>
            <div className="line"></div>I do
          </div>
        </li>
        <li
          className={
            "who link" + (state.section === "who" ? " clicked active" : "")
          }
          onClick={() => changeSection("who")}
          onMouseEnter={cursorHover}
          onMouseLeave={resetCursor}
        >
          <div>
            <div className="line"></div>Who
          </div>
        </li>
        <li
          className={
            "contact link" +
            (state.section === "contact" ? " clicked active" : "")
          }
          onClick={() => changeSection("contact")}
          onMouseEnter={cursorHover}
          onMouseLeave={resetCursor}
        >
          <div>
            <div className="line"></div>Contact
          </div>
        </li>
      </ul>
      <label
        id="toggle"
        onClick={menuState}
        onMouseEnter={cursorHover}
        onMouseLeave={resetCursor}
      >
        <ul className={"buns" + (menu ? " active" : "")}>
          <li className="bun"></li>
          <li className="bun"></li>
        </ul>
      </label>
    </nav>
  );
}
