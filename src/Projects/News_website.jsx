import React from 'react'
import './News_website.css'
import { NewsFunc } from '../Project'
import News1 from './images/News1.png'
import News2 from './images/News2.png'
import News3 from './images/News3.png'
import News4 from './images/News4.png'

const News_website = () => {
  return (
    <>
    <div className="heading-color-1 project-name">Project</div>
    <div className="heading-color-0 project-name"> <span className="heading-color-2">News</span> Website</div>

    <div className='visit-project'>Explore the Project   : 
         <span><button onClick={NewsFunc} className="card-btn visit-btn">Click Here</button></span></div> 
     
    
         <div className="project-data">
     <span className="project-img-heading">Introduction: </span>
     <span className="project-img-detail">Developed a dynamic, responsive news website using React, integrating API data with 
real-time search functionality. 
Built a user-friendly interface for fetching and displaying filtered news articles. </span>
     </div>
      <img className='images' src={News1} alt="" />
     
      <div className="project-data">
     <span className="project-img-heading"> Interactive News Cards: </span>
     <span className="project-img-detail">
    Click on any news card to explore detailed stories on a separate screen.
 </span>
     </div>
      <img className='images' src={News2} alt="" />
      
      <div className="project-data">
     <span className="project-img-heading">Dynamic Navigation Links: </span>
     <span className="project-img-detail">
     Easily access different news categories through an adaptive navigation bar.
 </span>
     </div>
      <img className='images' src={News3} alt="" />
      
      <div className="project-data">
     <span className="project-img-heading">API-Powered Search Functionality:</span>
     <span className="project-img-detail">
      Quickly find relevant news by searching real-time data from our API integration.
 </span>
     </div>
      <img className='images' src={News4} alt="" />
    </>
  )
}

export default News_website