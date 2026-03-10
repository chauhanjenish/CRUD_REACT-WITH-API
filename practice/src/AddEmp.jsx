import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AddEmp = () => {
    const [name,setName]=useState('')
    const [age,setAge]=useState('')
    const [dept,setDept]=useState('')
    const navigate=useNavigate();
    const AddEmployee = async () =>{
        if(name=='' || age=='' || dept==''){
            alert("All Field Medtory");
            return ;
        }
            const url="http://localhost:3000/emp";
            let res= await fetch(url,{
                method:"POST",
                body:JSON.stringify({name,age,dept})
            })
             res=await res.json()
            if(res){
                alert("Employee Added Successfully!!");
            }
            setName('')
            setAge('')
            setDept('')
            navigate('/showEmp')
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1>Add Emplyee</h1>
        <input type="text" placeholder='Enter Employee Name' value={name} onChange={(e)=>setName(e.target.value)}/><br /><br />
        <input type='number' placeholder='Enter Age'  value={age} onChange={(e)=>setAge(e.target.value)}/><br /><br />
        <select  value={dept} onChange={(e)=>setDept(e.target.value)}>
            <option value="/">Select Department</option>
            <option value="Manager">Manager</option>
            <option value="Salesman">Salesman</option>
        </select><br /><br />
        <button onClick={AddEmployee}>Add Employee</button>
    </div>
  )
}

export default AddEmp