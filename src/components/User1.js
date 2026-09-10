import React, { useState, useEffect } from "react";
import 'regenerator-runtime/runtime'
const User1 = (props) => {
   const id = props.match.params.id;
   let [user, setUser] = useState([]);
   let [loading, setLoading] = useState(true);
   let getdata = async () => {
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      let res = await response.json();
      setUser(res);
      setLoading(false);
   };

   useEffect(() => {
      getdata();
   }, []);
   if (loading) {
   return <div>Loading...</div>;
}

   let userfind = user.find((item) => item.id == id);

   console.log(userfind);
   

   return (
      <div>   
          <h1>User Details</h1>
      <p>
        <strong>Name:</strong> {userfind.name}
      </p>
      <p>
        <strong>Username:</strong> {userfind.username}
      </p>
      <p>
        <strong>Email:</strong> {userfind.email}
      </p>
      <p>
        <strong>Phone:</strong> {userfind.phone}
      </p>
      <p>
        <strong>Website:</strong> {userfind.website}
      </p>
    </div>
   );
};

export default User1;