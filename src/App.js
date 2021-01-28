import React, { useEffect } from "react";
import "./styles/app.css";
import Background from "./components/landing/Background";
import Nav from "./components/fixed/Nav";
import Cursor from "./components/fixed/Cursor";
import Project from "./components/fixed/Project";
import Landing from "./components/landing/Landing";
import * as scratchCard from "./scratchCard";
import cursorTracking from "./cursorTracking";

export default function App() {
  useEffect(() => {
    scratchCard.create();
  }, []);

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
