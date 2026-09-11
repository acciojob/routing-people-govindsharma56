import React, { useState, useEffect } from "react";
import 'regenerator-runtime/runtime'
const User1 = (props) => {
   const id = props.match.params.id;
   let [user, setUser] = useState([]);
   let [loading, setLoading] = useState(true);
   let getdata = async () => {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
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

   

   return (
      <div>   
          <h1>User Details</h1>
      <p>
        <strong>Name:</strong> {user.name}
      </p>
      <p>
        <strong>Username:</strong> {user.username}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Phone:</strong> {user.phone}
      </p>
      <p>
        <strong>Website:</strong> {user.website}
      </p>
    </div>
   );
};

export default User1;