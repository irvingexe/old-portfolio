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

  console.log("app");
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
