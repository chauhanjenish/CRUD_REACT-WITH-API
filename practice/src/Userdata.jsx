import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Userdata = () => {
    const [userdata,setUserdata]=useState([])
    const url="http://localhost:3000/user";
  fetch(url)
  .then(response => response.json())
  .then(data => setUserdata(data))
  .catch(error => console.error('Error:', error));
    return (
        <div style={{ padding: '20px' }}>
            <h1>User List</h1>
            <ul>
                {/* {userdata.map((user) => (
                    <li key={user.id} style={{ marginBottom: '10px' }}>
                        <Link to={`/users/${user.id}/${user.name}/${user.email}`}>
                            View Profile: {user.name}
                        </Link>
                    </li>
                ))} */}
                {
                   userdata.map((user)=>(
                    <ul>
                        <li key={user.name}>
                            <Link to={`/users/${user.name}/${user.email}`}>{user.name}</Link>
                        </li>
                    </ul>
                   ))
                }
            </ul>
        </div>
    );
}

export default Userdata;