import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FetchEmp = () => {
    const [getUser,setGetUser]=useState([])
    const navigate=useNavigate();
    useEffect(()=>{
        getEmp();
    },[])
    const getEmp = async () =>{
        const url="http://localhost:3000/emp";
        let res=await fetch(url);
        res = await res.json();
        setGetUser(res);
    };
    const delEmp =async (id) =>{
        const url="http://localhost:3000/emp";
        let res=await fetch(url +"/" +id,{
            method:"DELETE"
        })
        res=await res.json();
        if(res)
        {
            alert("Employee Delete");
        }
        getEmp();
    }
    const editEmp = (eid) =>{
        navigate(`/editemp/${eid}`)
    }
  return (
    <>
    <div style={{textAlign:'center'}}>
    <h1>Employee</h1>
    <ul style={{display:'flex',justifyContent:'space-evenly',listStyle:'none',border:'1px solid black',margin:'1rem'}}>
        <li>Name</li>
        <li>Age</li>
        <li>Department</li>
        <li>Action</li>
    </ul>
    {
        getUser.map((emp)=>(
            <ul style={{display:'flex',justifyContent:'space-evenly',listStyle:'none'}}>
                <li key={1}>{emp.name}</li>
                <li key={2}>{emp.age}</li>
                <li key={3}>{emp.dept}</li>
                <li>
                    <button onClick={()=>delEmp(emp.id)}>Delete</button>
                    <button onClick={()=>editEmp(emp.id)}>Edit</button>
                </li>
            </ul>
        ))
    }
    </div>
    </>
  )
}

export default FetchEmp