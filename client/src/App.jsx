import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './context/AuthContext'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'


const App = () => {
  const {user} = useAuth()
  return (
   <Routes>
    <Route path='/' element={<Landing/>}  />
    <Route path='/login' element ={!user ? <Login /> : <Navigate to="/dashboard"/>} />
    <Route path='/register' element ={!user ? <Register /> : <Navigate to="/dashboard"/>} />
     <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />

   
   </Routes>
  )
}

export default App