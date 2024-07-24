import React from 'react'
import './App.css'
import Home from './Home'
import Education from './Education.jsx'
import Skill from './Skill.jsx'
import Project from './Project.jsx'
import Contact from './Contact.jsx'

function App() {
  
  return (
    <>
    <div className="app">
    <Home/>
    <Education></Education>
    <Skill></Skill>
    <Project></Project>
    <Contact></Contact>

    </div>
    </>
    )
}

export default App
