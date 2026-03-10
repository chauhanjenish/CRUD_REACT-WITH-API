import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Editemp = () => {
    const [name,setName]=useState('')
    const[age,setAge]=useState('')
    const[dept,setDept]=useState('')
    const {eid}=useParams();
    const url="http://localhost:3000/emp/"+eid;
    const navigate=useNavigate();
    useEffect(()=>{
        getEmpData();
    },[])
     const getEmpData= async () =>
    {
        let res = await fetch(url);
        res = await res.json();
        setName(res.name);
        setAge(res.age);
        setDept(res.dept);
        console.log(name,age,dept);
    }
    const editEmpData = async() =>{
        let res= await fetch(url,{
            method:'PUT',
            body:JSON.stringify({name,age,dept})
        });
        res=await res.json();
        if(res)
        {
            alert("Employee Details Updated");
        }
        navigate("/showEmp")
    }
  return (
   <>
        <div style={{textAlign:'center'}}>
        <h1>Edit Emplyee</h1>
        <input type="text" placeholder='Enter Employee Name' value={name} onChange={(e)=>setName(e.target.value)}/><br /><br />
        <input type='number' placeholder='Enter Age'  value={age} onChange={(e)=>setAge(e.target.value)}/><br /><br />
        <select value={dept} onChange={(e)=>setDept(e.target.value)}>
            <option value="/">Select Department</option>
            <option value="Manager">Manager</option>
            <option value="Salesman">Salesman</option>
        </select><br /><br />
        <button onClick={editEmpData}>Update Employee</button>
    </div>
   </>
  )
}

export default Editemp