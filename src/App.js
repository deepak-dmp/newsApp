import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        {/* //07abc97fe06a411bba409f74b9240dc5 */}
        <NavBar/>
        <News pageSize={6} />
      </div>
    )
  }
}
