import React, { useEffect,useState } from "react";
import './../styles/App.css';
import {Switch,Route, Link } from "react-router-dom";
import Home from './Home'
import User1 from "./User1";
const App = () => {    
  return (
    <div>
          <Switch>
            <Route exact path='/' component={Home}/> 
           <Route path="/users/:id" component={User1} />
          </Switch>
    </div>
  )
}

export default App
