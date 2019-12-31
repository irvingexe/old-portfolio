import React from 'react';
import './styles/app.css';
import Background from './components/landing/Background';
import Cover from './components/landing/Cover';
import Nav from './components/fixed/Nav';
import Ido from './components/landing/Ido';


function App() {
  return (
    <div className="App lateral-margin">
      <Background/>
      <Nav/>
      <Cover/>
      <Ido/>
    </div>
  );
}

export default App;
