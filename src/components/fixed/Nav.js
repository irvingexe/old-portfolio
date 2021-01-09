import React, { useContext, useState } from "react";
import Logo from "./Logo";
import "../../styles/nav.css";
import Context from "../../store/context";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const { state, actions } = useContext(Context);
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
    //document.querySelector("." + section).classList.add("clicked");
    actions({
      type: "setState",
      payload: { ...state, section, project: { isOpened: false, id: 0 } },
    });
    window.scrollBy(
      0,
      document.querySelector("#" + section).offsetTop - window.scrollY
    );
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
          <Logo />
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
        >
          <div onMouseEnter={cursorHover} onMouseLeave={resetCursor}>
            <div className="line"></div>Work
          </div>
        </li>
        <li
          className={
            "ido link" + (state.section === "ido" ? " clicked active" : "")
          }
          onClick={() => changeSection("ido")}
        >
          <div onMouseEnter={cursorHover} onMouseLeave={resetCursor}>
            <div className="line"></div>I do
          </div>
        </li>
        <li
          className={
            "who link" + (state.section === "who" ? " clicked active" : "")
          }
          onClick={() => changeSection("who")}
        >
          <div onMouseEnter={cursorHover} onMouseLeave={resetCursor}>
            <div className="line"></div>Who
          </div>
        </li>
        <li
          className={
            "contact link" +
            (state.section === "contact" ? " clicked active" : "")
          }
          onClick={() => changeSection("contact")}
        >
          <div onMouseEnter={cursorHover} onMouseLeave={resetCursor}>
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
