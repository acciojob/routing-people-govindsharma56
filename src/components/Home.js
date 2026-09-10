import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "regenerator-runtime/runtime";

const Home=()=>{
       let [user,setUser]=useState([]);
     const [loading,setLoading] = useState(true)
       let getdata=async ()=>{
            let response=await fetch('https://jsonplaceholder.typicode.com/users');
            let res=await response.json();
            setUser(res);
             setLoading(false);
       }
       useEffect(()=>{
         getdata();
       },[])
        if(loading)return(<h2>Loading...</h2>)
      return(
        <div>
            <h1>User Details</h1>
             {user?.map((item) => (
         <ul key={item.id}>
            <Link to={`/users/${item.id}`}>
               <li>{item.name}</li>
            </Link>
        </ul>
))}
        </div>
      )
}
export default Home