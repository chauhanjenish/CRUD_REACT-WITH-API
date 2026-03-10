import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const EditUser = () => {
        const [name,setName]=useState('')
        const [age,setAge]=useState('')
        const [email,setEmail]=useState('')
        const {id}=useParams();
        const url="http://localhost:3000/user/"+id;
        const navigate=useNavigate();
    useEffect(()=>{
        getUserData()
    },[]);


    const getUserData= async () =>
    {
        let res = await fetch(url);
        res = await res.json();
        console.log(res);
        setName(res.name);
        setAge(res.age);
        setEmail(res.email);
    }
    const updateUserData =async () =>{
        let res=await fetch(url,{
            method:'PUT',
            body:JSON.stringify({name,age,email})
        });
        res= await res.json();
        console.log(res);
        if(res)        
        {
            alert("userdata Updateded!!");
        }
        navigate("/show");
        
    }
  return (
     <>
        <div style={{textAlign:'center'}}>
            <h1>EditUser</h1>
        <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/><br /><br />
        <input type="number" placeholder='Enter Age' value={age} onChange={(e)=>setAge(e.target.value)}/><br /><br />
        <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br /><br />
        <button onClick={updateUserData}>Update User</button>
        </div>
    </>
  )
}

export default EditUser