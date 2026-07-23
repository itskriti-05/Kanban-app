import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import BoardPage from './pages/BoardPage'
import { ProtectedRoute, GuestRoute } from './components/ProtectedRoute'
import Profile from './pages/Profile'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/login' element={<GuestRoute><Login /></GuestRoute>} />
      <Route path='/register' element={<GuestRoute><Register /></GuestRoute>} />
      <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path='/board/:id' element={<ProtectedRoute><BoardPage /></ProtectedRoute>} />
      <Route path='/profile' element={<ProtectedRoute><Profile/></ProtectedRoute>} />
    </Routes>
  )
}

export default App