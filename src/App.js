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


export default function App() {
  const [x, setX] = useState(0), [y, setY] = useState(0);
  return (
    <div className="App lateral-margin" onMouseMove={(e) => {setX(e.clientX);setY(e.clientY);}}>
      <Cursor/>
      <Background/>
      <Nav/>
      <section id="sections">
        <Cover/>
        <Ido/>
        <Work/>
        <Who x={x} y={y}/>
        <Contact/>
      </section>
    </div>
  );
}
