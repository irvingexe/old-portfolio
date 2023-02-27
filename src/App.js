import React, { useEffect, useRef, lazy } from 'react';
import './styles/app.css';
import Background from './components/fixed/Background';
import * as scratchCard from './scratchCard';
import cursorTracking from './cursorTracking';
import useWindowSize from './hooks/useWindowSize';
import Lottie from './components/Lottie';
import smile from './assets/smile.json';
import projects from './components/projects.json';

const Nav = lazy(() => import('./components/fixed/Nav'));
const Cursor = lazy(() => import('./components/fixed/Cursor'));
const Project = lazy(() => import('./components/fixed/Project'));
const Landing = lazy(() => import('./components/landing/Landing'));

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

  window.addEventListener('scroll', () => {
    if (document.querySelector('.modal').style.top !== '0px') {
      project.current =
        document.querySelector("#work > :nth-child(1)[data-scroll='in']") ||
        document.querySelector("#work > :nth-child(2)[data-scroll='in']") ||
        document.querySelector("#work > :nth-child(3)[data-scroll='in']") ||
        document.querySelector("#work > :nth-child(4)[data-scroll='in']") ||
        document.querySelector("#work > :nth-child(5)[data-scroll='in']");
      if (project.current !== lastProject.current) {
        color.current = document.querySelector(
          "#work > :nth-child(1)[data-scroll='in']"
        )
          ? { background: projects[0].background, brush: projects[0].brush } //1
          : document.querySelector("#work > :nth-child(2)[data-scroll='in']")
          ? { background: projects[1].background, brush: projects[1].brush } //2
          : document.querySelector("#work > :nth-child(3)[data-scroll='in']")
          ? { background: projects[2].background, brush: projects[2].brush } //3
          : document.querySelector("#work > :nth-child(4)[data-scroll='in']")
          ? { background: projects[3].background, brush: projects[3].brush } //4
          : document.querySelector("#work > :nth-child(5)[data-scroll='in']")
          ? { background: projects[4].background, brush: projects[4].brush } //5
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
        document.querySelector('#cursor').style.display = 'flex';
        scratchCard.pointerMove({ x: e.clientX, y: e.clientY });
        cursorTracking(e);
      }}
      onTouchMove={(e) => {
        document.querySelector('#cursor').style.display = 'none';
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
