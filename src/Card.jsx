import React from 'react'
import './Card.css'

const Card = ({img,detail,funName}) => {


 


  return (
    <>
    <div className="Card">
        <div className="card-inner">
            <img className='card-img' src={img} alt="" />
            </div>
            <div className="card-data">
                <p className='card-detail'>{detail}</p>
                <button className="card-btn" onClick={funName}>Click here</button>
            </div>
    </div>
    </>
  )
}

export default Card