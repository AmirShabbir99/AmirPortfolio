import React from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
const Card = ({img,detail,funName,linkPath}) => {


 


  return (
    <>
    <div className="Card">
        <div className="card-inner">
          <Link to={`/${linkPath}`}>
            <img className='card-img' src={img} alt="" />
            </Link>
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