import React, {Component} from 'react';
import './App.css';
import FullWidthGrid from './components/eventos';
import MenuITGirls from './components/menu';

 
function App() {
  return (
    <div className="App">
      <MenuITGirls/>
      <FullWidthGrid/>
    </div>
  );
}

export default App;