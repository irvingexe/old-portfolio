import React, { useState, useRef, useEffect, useContext } from "react";
import "./styles/app.css";
import Context from "./store/context";
import Background from "./components/landing/Background";
import Cover from "./components/landing/Cover";
import Nav from "./components/fixed/Nav";
import Ido from "./components/landing/Ido";
import Who from "./components/landing/Who";
import Contact from "./components/landing/Contact";
import Cursor from "./components/fixed/Cursor";
import Work from "./components/landing/Work";
import Project from "./components/fixed/Project";
import useWindowSize from "./hooks/useWindowSize";

export default function App() {
  const { state, actions } = useContext(Context);
  const [x, setX] = useState(0),
    [y, setY] = useState(0);
  const size = useWindowSize();
  const scrollContainer = useRef();
  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };
  const requests = useRef([]);

  useEffect(() => {
    if (!state.project.isOpened) {
      document.body.style.height = `${
        scrollContainer.current.getBoundingClientRect().height
      }px`;
    }
  }, [size.height, state.project.isOpened]);

  // Run scrollrender once page is loaded.
  useEffect(() => {
    if (!state.project.isOpened) {
      requests.current.push(requestAnimationFrame(skewScrolling));
    } else {
      requests.current.map((i) => {
        cancelAnimationFrame(i);
      });
    }
  }, [state.project.isOpened]);

  // Scrolling
  const skewScrolling = () => {
    //console.log(!state.project.isOpened);
    //Set Current to the scroll position amount
    data.current = window.scrollY;
    // Set Previous to the scroll previous position
    data.previous += (data.current - data.previous) * data.ease;
    // Set rounded to
    data.rounded = Math.round(data.previous * 100) / 100;

    // Difference between
    const difference = data.current - data.rounded;
    const acceleration = difference / size.width;
    const velocity = +acceleration;
    const skew = velocity * 20;

    //Assign skew and smooth scrolling to the scroll container
    scrollContainer.current.style.transform = `translateY(-${data.rounded}px) skewY(${skew}deg)`;

    //make it work on scroll only
    //loop vai raf
    requests.current.push(requestAnimationFrame(skewScrolling));
  };

  return (
    <div
      className="App"
      onMouseMove={(e) => {
        setX(e.clientX);
        setY(e.clientY);
      }}
    >
      <Cursor />
      <Background />
      <Nav />
      <Project />
      <div ref={scrollContainer} className="sections lateral-margin">
        <Cover />
        <Work />
        <Ido />
        <Who x={x} y={y} />
        <Contact />
      </div>
    </div>
  );
}
