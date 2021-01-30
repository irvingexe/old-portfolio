import React, { useEffect, useRef } from "react";
import "./styles/app.css";
import Background from "./components/fixed/Background";
import Nav from "./components/fixed/Nav";
import Cursor from "./components/fixed/Cursor";
import Project from "./components/fixed/Project";
import Landing from "./components/landing/Landing";
import * as scratchCard from "./scratchCard";
import cursorTracking from "./cursorTracking";
import useWindowSize from "./hooks/useWindowSize";

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
        scratchCard.pointerMove({ x: e.clientX, y: e.clientY });
        cursorTracking(e);
      }}
      onTouchMove={(e) => {
        scratchCard.pointerMove({
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        });
      }}
    >
      <Cursor />
      <Background />
      <Nav />
      <Project />
      <Landing />
    </div>
  );
}
