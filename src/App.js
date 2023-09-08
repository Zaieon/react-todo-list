import React from 'react';
import { MenuBar } from './components/menu-bar/menu-bar.component';
import { MainArea } from './components/main-area/main-area.component';
import './App.css';


const App = () => {
  return (
      <div className='home'>
        <MenuBar />
        <MainArea/>
      </div>
    )
}


export default App;
