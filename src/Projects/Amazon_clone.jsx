import React from 'react'
import './Amazon_clone.css'
import { AmazoneClone } from '../Project'
import Amazon1 from './images/Amazon1.png'
import Amazon2 from './images/Amazon2.png'
import Amazon3 from './images/Amazon3.png'
import Amazon4 from './images/Amazon4.png'
import Amazon5 from './images/Amazon5.png'
import Amazon6 from './images/Amazon6.png'

const Amazon_clone = () => {
  return (
    <>

<div className="heading-color-1 project-name">Project</div>
    <div className="heading-color-0 project-name"> <span className="heading-color-2">Amazon</span> Clone</div>
    <div className='visit-project'>Explore the Project    : 
       <span><button onClick={AmazoneClone} className="card-btn visit-btn">Click Here</button></span></div> 
      
      
      
       <div className="project-data">
     <span className="project-img-heading">Introduction: </span>
     <span className="project-img-detail">Developed an Amazon clone with a user-friendly shopping cart and checkout process. 
Implemented Redux for efficient state management, enabling seamless product addition     
and removal from the cart. </span>
     </div>
      <img className='images'  src={Amazon1} alt="" />
      <img className='images' src={Amazon2} alt="" />

      <div className="project-data">
     <span className="project-img-heading">Daily Gift Discount:</span>
     <span className="project-img-detail">
      Enjoy exclusive daily discounts and gift offers.
     </span>
     </div>
      <img className='images'  src={Amazon3} alt="" />
      
      <div className="project-data">
     <span className="project-img-heading">Dynamic Cart Add:</span>
     <span className="project-img-detail">
      Effortlessly add items to your cart in real-time.
     </span>
     </div>
      <img className='images' src={Amazon4} alt="" />
      
      <div className="project-data">
     <span className="project-img-heading">Cart Total:</span>
     <span className="project-img-detail">
 View your cart's total cost instantly as you shop.
     </span>
     </div>
      <img className='images' src={Amazon5} alt="" />
      
      <div className="project-data">
     <span className="project-img-heading">Remove from Cart:</span>
     <span className="project-img-detail">
      Easily remove items from your cart with a simple action.
     </span>
     </div>
      <img className='images'  src={Amazon6} alt="" />
    
 
    </>
  )
}

export default Amazon_clone