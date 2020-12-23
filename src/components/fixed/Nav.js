import React, { useContext, useState } from "react";
import Logo from "./Logo";
import "../../styles/nav.css";
import Context from "../../store/context";

export default function Nav() {
  const [menu, setMenu] = useState(false);
  const { state, actions } = useContext(Context);
  const menuState = () => {
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
    actions({
      type: "setState",
      payload: { ...state, section, project: { isOpened: false, id: 0 } },
    });
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
        <a id="home" href="#cover">
          <Logo />
        </a>
      </label>
      <ul id="menu-items" className={"center links" + (menu ? " active" : "")}>
        <li
          className={"link" + (state.section === "ido" ? " active" : "")}
          onClick={() => changeSection("ido")}
        >
          <a onMouseEnter={cursorHover} onMouseLeave={resetCursor} href="#ido">
            <div className="line"></div>I do
          </a>
        </li>
        <li
          className={"link" + (state.section === "work" ? " active" : "")}
          onClick={() => changeSection("work")}
        >
          <a onMouseEnter={cursorHover} onMouseLeave={resetCursor} href="#work">
            <div className="line"></div>Works
          </a>
        </li>
        <li
          className={"link" + (state.section === "who" ? " active" : "")}
          onClick={() => changeSection("who")}
        >
          <a onMouseEnter={cursorHover} onMouseLeave={resetCursor} href="#who">
            <div className="line"></div>Who
          </a>
        </li>
        <li
          className={
            "contact link" + (state.section === "contact" ? " active" : "")
          }
          onClick={() => changeSection("contact")}
        >
          <a
            onMouseEnter={cursorHover}
            onMouseLeave={resetCursor}
            href="#contact"
          >
            <div className="line"></div>Contact
          </a>
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