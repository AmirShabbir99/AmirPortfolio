import React from 'react'
import './App.css'
import HomeScreen from './HomeScreen.jsx'
import Contact from './Contact.jsx'
import Amazon from './Projects/Amazon_clone.jsx'
import Recipe from './Projects/Food_Recipe.jsx'
import News from './Projects/News_website.jsx'
import { Route,Routes } from 'react-router-dom'


function App() {
  
  return (
    <>
    <div className="app">
    <Routes>
    <Route path='/' element={<HomeScreen/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/amazon' element={<Amazon/>}></Route>
      <Route path='/recipe' element={<Recipe/>}></Route>
      <Route path='/news' element={<News/>}></Route>
    </Routes>
    </div>
    </>
    )
}

export default App
