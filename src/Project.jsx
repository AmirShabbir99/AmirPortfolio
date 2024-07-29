import React from 'react'
import './Project.css'
import amazon1 from './image/amazon1.png'
import amazon2 from './image/amazon2.png'
import amazon3 from './image/amazon3.png'
const Project = () => {
  return (
    <>
    <div className="Project">
    <div className="educationIntro">
      <div className="career">Work</div>
      <div className="educationHeading"> <span className="eduh">Featured</span> &Project</div>
      <div className="clone">Amazon Clone</div>
    <img className='projectimg' src={amazon1} alt="" />
    <img className='projectimg' src={amazon2} alt="" />
    <img className='projectimg' src={amazon3} alt="" />
    </div>   
    </div>
    
    </>
  )
}

export default Project