import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (  
      <div>
        {/* //07abc97fe06a411bba409f74b9240dc5 */}
        <Router>
        <NavBar/>
        <Routes>
          <Route exact path="/"  element={<News pageSize={6} key="general" country={"us"} category={"general"}/>} />
          <Route exact path="business"  element={<News pageSize={6} key="business" country={"us"} category={"business"}/>} />
          <Route exact path="/entertainment"  element={<News pageSize={6} key="entertainment" country={"us"} category={"entertainment"}/>} />
          <Route exact path="/general"  element={<News pageSize={6} key="general" country={"us"} category={"general"}/>} />
          <Route exact path="/health"  element={<News pageSize={6} key="health" country={"us"} category={"health"}/>} />
          <Route exact path="/science"  element={<News pageSize={6} key="science" country={"us"} category={"science"}/>} />
          <Route exact path="/sports"  element={<News pageSize={6} key="sports" country={"us"} category={"sports"}/>} />
          <Route exact path="/technology"  element={<News pageSize={6} key="technology" country={"us"} category={"technology"}/>} />
        </Routes>
        </Router>
      </div>
    )
  }
}
