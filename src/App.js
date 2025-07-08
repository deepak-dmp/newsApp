import './App.css';
import React, { Component } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


export default class App extends Component {
  pageSize = 6
  state ={
    progress:0
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (  
      <div>
        {/* //07abc97fe06a411bba409f74b9240dc5 */}
        <Router>
        <NavBar/>
         <LoadingBar
        color="#f11946"
        progress={this.state.progress}
         height = {3}
      />
        <Routes>
          <Route exact path="/"  element={<News  setProgress={this.setProgress} pageSize={this.pageSize} key="general" country={"us"} category={"general"}/>} />
          <Route exact path="business"  element={<News  setProgress={this.setProgress}  pageSize={this.pageSize} key="business" country={"us"} category={"business"}/>} />
          <Route exact path="/entertainment"  element={<News  setProgress={this.setProgress}  pageSize={this.pageSize} key="entertainment" country={"us"} category={"entertainment"}/>} />
          <Route exact path="/general"  element={<News  setProgress={this.setProgress}  pageSize={this.pageSize} key="general" country={"us"} category={"general"}/>} />
          <Route exact path="/health"  element={<News  setProgress={this.setProgress}  pageSize={this.pageSize} key="health" country={"us"} category={"health"}/>} />
          <Route exact path="/science"  element={<News  setProgress={this.setProgress}  pageSize={this.pageSize} key="science" country={"us"} category={"science"}/>} />
          <Route exact path="/sports"  element={<News  setProgress={this.setProgress}  pageSize={this.pageSize} key="sports" country={"us"} category={"sports"}/>} />
          <Route exact path="/technology"  element={<News  setProgress={this.setProgress}  pageSize={this.pageSize} key="technology" country={"us"} category={"technology"}/>} />
        </Routes>
        </Router>
      </div>
    )
  }
}
