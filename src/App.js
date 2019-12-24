import React from 'react';
import './App.css';
import Background from './components/landing/Background';
import Cover from './components/landing/Cover';
import Nav from './components/fixed/Nav';


function App() {
  return (
    <div className="App">
      <Background/>
      <Nav/>
      <Cover/>
      <Cover/>
    </div>
  );
}

export default App;
