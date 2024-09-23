import React from 'react'
import './Project.css'
import Card from './Card.jsx'
import Recipe from './image/foods.png'
import Shop from './image/shoping.png'
import News from './image/news.png'
const FoodRecipe = () => {
  window.location.href = 'https://bejewelled-travesseiro-7fdaa9.netlify.app/';
};

const AmazoneClone = () => {
  window.location.href = 'https://amazonclone0122.netlify.app';
};

const NewsFunc = () => {
  window.location.href = 'https://main--newswebsite001.netlify.app/';
};

const Project = () => {

 
  return (
    <>
    <div className="Project">
    <div className="education-intro">
      <div className="heading-color-1">Work</div>
      <div className="heading-color-0"> <span className="heading-color-2">Featured</span> &Project</div>
      <div className="project-card">
        <Card 
        img={Recipe} 
        detail='Food Recipe'  
        funName={FoodRecipe}  
        linkPath='recipe'
        ></Card>
        <Card
        img={Shop} 
        detail='Amazon Clone' 
        funName={AmazoneClone}   
        linkPath='amazon'
        ></Card>
        <Card
        img={News} 
        detail='News Update'
        funName={NewsFunc}  
        linkPath='news'
        ></Card>
      </div>

    </div>   
    </div>
    
    </>
  )
}

export default Project
export {AmazoneClone,FoodRecipe,NewsFunc};