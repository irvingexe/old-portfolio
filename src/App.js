import React from 'react';
import './App.css';
import Background from './components/landing/Background';
import Cover from './components/landing/Cover';
import Header from './components/fixed/Header';


function App() {
  return (
    <div className="App">
      <Background/>
      <Header/>
      <Cover/>
      <div className="asdf"></div>
    </div>
  );
}

export default App;
