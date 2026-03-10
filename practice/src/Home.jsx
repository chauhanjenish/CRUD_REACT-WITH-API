import React, { useEffect, useState } from 'react'

const Home = () => {
  const[user,setUser]=useState([]);
  const[emp,setEmp]=useState([]);
  useEffect(()=>{
    getUser();
    getEmp();
  },[])
  const getUser = async ()=>{
    const url="http://localhost:3000/user";
    let res=await fetch(url);
    res= await res.json();
    setUser(res)
  }

  const getEmp = async ()=>{
    const url="http://localhost:3000/emp";
    let res=await fetch(url);
    res= await res.json();
    setEmp(res)
  }
  
  return (
    <>
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div className='border m-2 card' style={{width:'20rem'}}>
        <h6 className='text-center'>Total User in Our Industy</h6>
        {
          <p className='text-center'>{user.length}</p>
        }
        </div>


         <div className='border m-2 card' style={{width:'20rem'}}>
        <h6 className='text-center'>Total Employeee in Our Industy</h6>
        {
          <p className='text-center'>{emp.length}</p>
        }
        </div>
      </div>
    </>
  )
}

export default Home