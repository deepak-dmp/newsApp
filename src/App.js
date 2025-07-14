import './App.css';
import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";


export default function App () {
  let pageSize = 6
  let apiKey=process.env.REACT_APP_NEWS_API
  const [progress, setProgress]=useState(0)
    return (  
      <div>
        {/* //07abc97fe06a411bba409f74b9240dc5 */}
        <Router>
        <NavBar/>
         <LoadingBar
        color="#f11946"
        progress={progress}
         height = {3}
      />
        <Routes>
          <Route exact path="/"  element={<News  setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" country={"us"} category={"general"}/>} />
          <Route exact path="business"  element={<News  setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="business" country={"us"} category={"business"}/>} />
          <Route exact path="/entertainment"  element={<News  setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="entertainment" country={"us"} category={"entertainment"}/>} />
          <Route exact path="/general"  element={<News  setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="general" country={"us"} category={"general"}/>} />
          <Route exact path="/health"  element={<News  setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="health" country={"us"} category={"health"}/>} />
          <Route exact path="/science"  element={<News  setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="science" country={"us"} category={"science"}/>} />
          <Route exact path="/sports"  element={<News  setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="sports" country={"us"} category={"sports"}/>} />
          <Route exact path="/technology"  element={<News  setProgress={setProgress} apiKey={apiKey}  pageSize={pageSize} key="technology" country={"us"} category={"technology"}/>} />
        </Routes>
        </Router>
      </div>
    )
}

