import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#f8f7ff] font-sans">
        <Navbar/>
        <Hero/>
      
    </div>
  )
}

export default Landing
