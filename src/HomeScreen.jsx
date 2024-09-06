import React from 'react'
import Home from './Home'
import './HomeScreen.css'
import Education from './Education.jsx'
import Skill from './Skill.jsx'
import Project from './Project.jsx'
import Contact from './Contact.jsx'
import Card from './Card.jsx'

const HomeScreen = () => {
  return (
    <>
    <div className="HomeScreen">
    <Home/>
    <Education></Education>
    <Skill></Skill>
    <Project></Project>
    <Contact></Contact> 
    </div>
    
    </>
  )
}

export default HomeScreen