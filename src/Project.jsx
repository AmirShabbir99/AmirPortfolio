import React from 'react'
import './Project.css'
import Card from './Card.jsx'
import Recipe from './image/foods.png'
import Shop from './image/shoping.png'
import News from './image/news.png'

const Project = () => {
  return (
    <>
    <div className="Project">
    <div className="education-intro">
      <div className="education-career">Work</div>
      <div className="education-heading"> <span className="eduh">Featured</span> &Project</div>
      <div className="project-card">
        <Card 
        img={Recipe} 
        detail='Food Recipe'  
        ></Card>
        <Card
        img={Shop} 
        detail='Amazon Clone'  
        ></Card>
        <Card
        img={News} 
        detail='News Update'  
        ></Card>
      </div>

    </div>   
    </div>
    
    </>
  )
}

export default Project