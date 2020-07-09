import React, {Component} from 'react';
import './App.css';
import MenuITGirls from './components/menu';
import News from './components/news';

 
function App() {
  return (
    <div className="App">
      <MenuITGirls/>
      <div className="container">
        <News/>
      </div>
    </div>
  );
}

export default App;