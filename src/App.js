import React, { Component } from 'react';
import { MenuBar } from './components/menu-bar/menu-bar.component';
import { MainArea } from './components/main-area/main-area.component';
import './App.css';


class App extends Component {

  render() {
    return (
      <div className='home'>
        <MenuBar />
        <MainArea/>
      </div>
    )
  }
}


export default App;
