import React, { useEffect, useRef, lazy } from "react";
import "./styles/app.css";
import Background from "./components/fixed/Background";
import * as scratchCard from "./scratchCard";
import cursorTracking from "./cursorTracking";
import useWindowSize from "./hooks/useWindowSize";
import Lottie from "./components/Lottie";
import smile from "./assets/smile.json";
const Nav = lazy(() => import("./components/fixed/Nav"));
const Cursor = lazy(() => import("./components/fixed/Cursor"));
const Project = lazy(() => import("./components/fixed/Project"));
const Landing = lazy(() => import("./components/landing/Landing"));

export default function App() {
  const windowSize = useWindowSize();
  const isInitialMount = useRef(true);
  const project = useRef(null);
  const lastProject = useRef(null);
  const color = useRef(null);

  useEffect(() => {
    scratchCard.create();
  }, []);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      scratchCard.resize();
    }
  }, [windowSize]);

  window.addEventListener("scroll", () => {
    if (document.querySelector(".modal").style.top !== "0px") {
      project.current =
        document.querySelector("#work > :nth-child(1)[data-scroll='in']") ||
        document.querySelector("#work > :nth-child(2)[data-scroll='in']");
      if (project.current !== lastProject.current) {
        color.current = document.querySelector(
          "#work > :nth-child(1)[data-scroll='in']"
        )
          ? { background: 0xfde8d7, brush: 0xffcca5 }
          : document.querySelector("#work > :nth-child(2)[data-scroll='in']")
          ? { background: 0xccdaf5, brush: 0xa6c0f4 }
          : { background: 0xf2ebe3, brush: 0xd9c7ad };
        scratchCard.repaint(color.current);
        lastProject.current = project.current;
      }
    }
  });

  return (
    <div
      className="App"
      onMouseMove={(e) => {
        document.querySelector("#cursor").style.display = "flex";
        scratchCard.pointerMove({ x: e.clientX, y: e.clientY });
        cursorTracking(e);
      }}
      onTouchMove={(e) => {
        document.querySelector("#cursor").style.display = "none";
        scratchCard.pointerMove({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        });
      }}
    >
      <Background />
      <Cursor />
      <Nav />
      <Project />
      <Landing />
      <div className="center logo">
        <Lottie
          play={isInitialMount.current}
          animationData={smile}
          speed={0.5}
        />
      </div>
    </div>
  );
}
