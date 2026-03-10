import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const dataFetch = () => {
  const [user, setUsers] = useState([]);
  const navigate=useNavigate();
  useEffect(()=>{
    getUsers()
  },[])

  const getUsers = async () => {
    const url = "http://localhost:3000/user";
    const data = await fetch(url);
    const res = await data.json();
    setUsers(res);
  };
  const deleteUser = async (id) =>{
    const url="http://localhost:3000/user";
    let res=await fetch(url+"/"+id,{
      method:"DELETE"
    })
    res=await res.json();
    if(res){
      alert("Record Delete");
    }
    getUsers();
    console.log(id);
  }
const editUser = (id) => {
  navigate(`/edit/${id}`);
};

  return (
    <>
        <h1 className='text-center text-decoration-underline'>Users</h1>
      <div style={{ textAlign: 'center',border:'1px solid black' }} className='m-2'>
       <ul className='m-2' style={{border:'1px solid black',display:'flex',justifyContent:'space-between',padding:'0.5rem',listStyle:'none'}}>
        <li>Name</li>
       <li>Age</li>
       <li>Email</li>
       <li>Action</li>
       </ul>
          {user.map((user,i) => (
                 <ul style={{display:'flex',justifyContent:'space-between',padding:'0.5rem',listStyle:'none'}}key={i}>
                <li key={1}>{user.name}</li>
                <li key={2}>{user.age}</li>
                <li key={3}>{user.email}</li>
                <li style={{display:'flex',gap:'1rem'}}>
                  <button onClick={()=>deleteUser(user.id)}>Delete</button>
                  <button onClick={()=>editUser(user.id)}>Edit</button>
                </li>
            </ul>
          ))}
      </div>
      <Link to='/add'>Go to Add a User</Link>
    </>
  );
};   

export default dataFetch