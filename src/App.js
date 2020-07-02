import React, {Component} from 'react';
import './App.css';
import MenuITGirls from './components/menu';
import News from './components/news';

 
function App() {
  return (
    <div className="App"> 
      <MenuITGirls/>
      <News/>
    </div>
  );
}

export default App;