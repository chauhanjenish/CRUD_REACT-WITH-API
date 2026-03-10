import React, { use } from 'react'
const fetchData = ()=>fetch('http://localhost:3000/user').then((res)=>res.json());
const useData=fetchData();
const User = () => {
  return (
    <>
        <h1>this is fetch api file</h1>
        {Users()}
    </>
  )
}

export default User

const Users = () =>{
  const userData=use(useData);
    return(
        <>
          {
            userData.map((user)=>(
              <ul>
                <li key={user.id}>{user.name}</li>
              </ul>
            ))
          }
        </>
    )
}