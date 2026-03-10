import React, { useState } from 'react'

const Adduser = () => {
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [email,setEmail]=useState('')

    const createUser = async() =>{
        if(name==''||age==''||email=='')
        {
            alert("All Field Mendtory");
            return;
        }
        const url="http://localhost:3000/user";
        let res=await fetch(url,{
            method:"POST",
            body:JSON.stringify({name,age,email})
        })
        res=await res.json();
        if(res){
            alert("User Added SuccesFully");
        }
        
        setName('')
        setAge('')
        setEmail('')
    }
  return (
    <>
        <div style={{textAlign:'center'}}>
            <h1>Add New User</h1>
        <input type="text" placeholder='Enter Name' value={name}onChange={(e)=>setName(e.target.value)}/><br /><br />
        <input type="number" placeholder='Enter Age' value={age}onChange={(e)=>setAge(e.target.value)}/><br /><br />
        <input type="email" placeholder='Enter Email'value={email}onChange={(e)=>setEmail(e.target.value)}/><br />
        <button onClick={createUser}>Add User</button>
        </div>
    </>
  )
}

export default Adduser