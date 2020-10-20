import React from 'react';
import Slider from './components/Slider';
import SidebarItem from './components/SidebarItem';
import './App.css';

function App() {
  return (
    <div className="container">
      <div class="main-image"></div>
      <div className="sidebar">
        <SidebarItem />
        <SidebarItem />
      </div>
      <Slider />
    </div>
  );
}

export default App;
