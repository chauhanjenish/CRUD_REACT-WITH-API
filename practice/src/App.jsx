import './App.css';
import { Routes, Route, useParams } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
import UserDetails from './UserDetails';
import Adduser from './Adduser';
import DataFetch from './dataFetch';
import AddEmp from './AddEmp';
import FetchEmp from './FetchEmp';
import EditUser from './editUser';
import Editemp from './Editemp';
import { useState } from 'react';
import User from './User';

const App = () => {
  const id=useParams();
  const eid=useParams();


 
  return (
    <>
    <Test/>
    <User/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/add' element={<Adduser/>}/>
        <Route path='/addEmp' element={<AddEmp/>}/>
        <Route path='/show' element={<DataFetch/>}/>
        <Route path='/showEmp' element={<FetchEmp/>}/>
        <Route path='/edit/:id' element={<EditUser/>}/>
        <Route path='/editemp/:eid' element={<Editemp/>}/>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<h1>About Page</h1>} />
        <Route path='/contact' element={<h1>Contact page</h1>} />
        <Route path='/collage' element={<h1>College Page</h1>} />
        <Route path='/users' element={<Userdata />} />
        <Route path='/users/:name/:email' element={<UserDetails />} />
      </Routes>
    </>
  );
}

export default App;