import React from 'react'
import './Food_Recipe.css'
import { FoodRecipe } from '../Project'
import Recipe1 from './images/Recipe1.png'
import Recipe2 from './images/Recipe2.png'
import Recipe3 from './images/Recipe3.png'
import Recipe4 from './images/Recipe4.png'
import Recipe5 from './images/Recipe5.png'

const Food_Recipe = () => {
  return (
    <>
      <div className="heading-color-1 project-name">Project</div>
    <div className="heading-color-0 project-name"> <span className="heading-color-2">Food</span> Recipe</div>
    
    <div className='visit-project'>Explore the Project    :  
         <span><button onClick={FoodRecipe} className="card-btn visit-btn">Click Here</button></span></div> 
     
         <div className="project-data">
     <span className="project-img-heading">Introduction: </span>
     <span className="project-img-detail">Developed a food recipe website utilizing API data to display recipes, instructions, and 
ingredients dynamically. Implemented filtering options to enhance user experience and facilitate easy recipe 
search. </span>
     </div>
      <img className='images'  src={Recipe1} alt="" />
      
      <div className="project-data">
     <span className="project-img-heading"> Ingredient Button :  </span>
     <span className="project-img-detail">Quickly access a detailed list of ingredients for every recipe.</span>
     </div>
     <img className='images'  src={Recipe2} alt="" />
      
     <div className="project-data">
     <span className="project-img-heading">Instruction Button:</span>
     <span className="project-img-detail">
      View step-by-step cooking instructions with a single click.
</span>
     </div>
      <img className='images'  src={Recipe3} alt="" />
      
      <div className="project-data">
     <span className="project-img-heading">Countries Recipe: </span>
     <span className="project-img-detail">Discover diverse recipes from different countries and cuisines.
     </span>
     </div>
     <img className='images' src={Recipe4} alt="" />
     <div className="project-data">
     <span className="project-img-heading">Search Data: </span>
     <span className="project-img-detail">Easily search and find recipes tailored to your preferences.</span>
     </div>
      <img className='images' src={Recipe5} alt="" />
    </>
  )
}

export default Food_Recipe