import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#f8f7ff] font-sans">
        <Navbar/>
        <Hero/>
        <Features/>
        <CTA/>
        <Footer/>
      
    </div>
  )
}

export default Landing
