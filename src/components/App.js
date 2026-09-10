import React, { useEffect,useState } from "react";
import './../styles/App.css';
import {Switch,Route, Link } from "react-router-dom";
import Home from './Home'
import User1 from "./user1";
const App = () => {
     let [user,setUser]=useState([]);
            let getdata=async ()=>{
                 let response=await fetch('https://jsonplaceholder.typicode.com/users');
                 let res=await response.json();
                 setUser(res);
            }
         useEffect(()=>{
             getdata();
         },[])   
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
