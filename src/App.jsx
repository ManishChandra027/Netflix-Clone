import React, { useEffect } from 'react'
import Home from './pages/Home/Home';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Player from './pages/Player/Player';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firbase';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  const nevigate=useNavigate(); //hook
  useEffect(()=>{

    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("Logged in")
        nevigate('/')
      }else{
        console.log("loged out")
        nevigate('/login')
      }
    })
  },[])

  return (
    <div>
        <ToastContainer theme='dark' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/player/:id' element={<Player/>} />
        <Route path='/player/main' element={<Player main="_InqQJRqGW4"/>} />
      </Routes>
    </div>
  )
}

export default App;
