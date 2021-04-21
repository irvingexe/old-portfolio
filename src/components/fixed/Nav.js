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

  const changeCursor = (cursor) => {
    actions({
      type: "setState",
      payload: { ...state, cursor: { type: cursor } },
    });
  };

  const changeSection = (section) => {
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
      payload: {
        ...state,
        section,
        project: { isOpened: false, id: state.project.id },
      },
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
        setTimeout(() => {
          document.querySelectorAll(".project .title > div").forEach((e) => {
            e.classList.remove("static");
          });
          document.querySelectorAll(".project .mockup img").forEach((e) => {
            e.classList.remove("static");
          });
        }, 1000);
        window.scrollBy(
          0,
          document.querySelector(`#work >:nth-child(${state.project.id + 1})`)
            .offsetTop - window.scrollY
        );
      }

      document.querySelectorAll(".project .title").forEach((e) => {
        e.style.transform = `none`;
      });

      document.querySelectorAll(".project .mockup").forEach((e) => {
        e.style.transform = `none`;
      });
    }, 1);

    document.body.style.overflow = "overlay";
    setMenu(false);
  };

  return (
    <nav id="nav" className="fixed font-xs">
      <label
        htmlFor="#home"
        className="App-logo"
        onMouseEnter={() => {
          changeCursor("hover");
        }}
        onMouseLeave={() => {
          changeCursor("default");
        }}
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
          onMouseEnter={() => {
            changeCursor("hover");
          }}
          onMouseLeave={() => {
            changeCursor("default");
          }}
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
          onMouseEnter={() => {
            changeCursor("hover");
          }}
          onMouseLeave={() => {
            changeCursor("default");
          }}
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
          onMouseEnter={() => {
            changeCursor("hover");
          }}
          onMouseLeave={() => {
            changeCursor("default");
          }}
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
          onMouseEnter={() => {
            changeCursor("hover");
          }}
          onMouseLeave={() => {
            changeCursor("default");
          }}
        >
          <div>
            <div className="line"></div>Contact
          </div>
        </li>
      </ul>
      <label
        id="toggle"
        onClick={menuState}
        onMouseEnter={() => {
          changeCursor("hover");
        }}
        onMouseLeave={() => {
          changeCursor("default");
        }}
      >
        <ul className={"buns" + (menu ? " active" : "")}>
          <li className="bun"></li>
          <li className="bun"></li>
        </ul>
      </label>
    </nav>
  );
}
