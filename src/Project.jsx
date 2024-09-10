import React from 'react'
import './Project.css'
import Card from './Card.jsx'
import Recipe from './image/foods.png'
import Shop from './image/shoping.png'
import News from './image/news.png'

const Project = () => {

  const FoodRecipe = () => {
    window.location.href = 'https://bejewelled-travesseiro-7fdaa9.netlify.app/';
  };

  const AmazoneClone = () => {
    window.location.href = 'https://amazonclone0122.netlify.app';
  };

  const NewsFunc = () => {
    window.location.href = 'https://main--newswebsite001.netlify.app/';
  };
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
        funName={FoodRecipe}  
        ></Card>
        <Card
        img={Shop} 
        detail='Amazon Clone' 
        funName={AmazoneClone}   
        ></Card>
        <Card
        img={News} 
        detail='News Update'
        funName={NewsFunc}  
        ></Card>
      </div>

    </div>   
    </div>
    
    </>
  )
}

export default Project