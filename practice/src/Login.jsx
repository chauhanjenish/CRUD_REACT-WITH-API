import React from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
   const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  const isLoggin=username==='admin' && password==='password';
  const navigate=useNavigate();
  const checkAdmin = () =>{
    if(isLoggin)
    {
      navigate()
    }
  }
  return (
    <>
        <input type='text' placeholder='enter username' value={username} onChange={(e)=>setUsername(e.target.value)}/><br /><br />
      <input type="text" placeholder='enteer password' value={password} onChange={(e)=>setPassword(e.target.value)}/><br /><br />
      <button onClick={checkAdmin}>Login</button>
    </>
  )
}

export default Login