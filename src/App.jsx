import React from 'react'
import './App.css'
import HomeScreen from './HomeScreen.jsx'
import Contact from './Contact.jsx'
import { Route,Routes } from 'react-router-dom'


function App() {
  
  return (
    <>
    <div className="app">
    <Routes>
    <Route path='/' element={<HomeScreen/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    </div>
    </>
    )
}

export default App
