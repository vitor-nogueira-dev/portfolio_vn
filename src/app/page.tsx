'use client'
import React from 'react'

import { Hero, About, Projects, HardSkills, SoftSkills, Footer, Contact } from '@/sections'
import { Navbar } from '@/components'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'rsuite/dist/rsuite.min.css';
import '@/app/global.css';

function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Projects />
      </div>
      <div className="relative">
        <HardSkills />
        <div className="gradient-04 z-0" />
        <SoftSkills />
      </div>
      <div className="relative">
        <Contact />
        <div className="gradient-04 z-0" />
        <Footer />
      </div>
    </div>
  )
}

export default Home
