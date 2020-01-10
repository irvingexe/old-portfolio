import React, { useState } from 'react';
import './styles/app.css';
import Background from './components/landing/Background';
import Cover from './components/landing/Cover';
import Nav from './components/fixed/Nav';
import Ido from './components/landing/Ido';
import Who from './components/landing/Who';
import Contact from './components/landing/Contact';
import Cursor from './components/fixed/Cursor';
import Work from './components/landing/Work';
import Project from './components/fixed/Project';


export default function App() {
  const [x, setX] = useState(0), [y, setY] = useState(0);
  return (
    <div className="App" onMouseMove={(e) => {setX(e.clientX);setY(e.clientY);}}>
      <Cursor/>
      <Background/>
      <Nav/>
      <Project/>
      <section className="lateral-margin">
        <Cover/>
        <Ido/>
        <Work/>
        <Who x={x} y={y}/>
        <Contact/>
      </section>
    </div>
  );
}
