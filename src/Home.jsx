import { useState } from 'react'
import './Home.css'
import img1 from './image/im1.png'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const linkedIn=()=>{ 
    window.location.href = 'https://www.linkedin.com/in/amir-shabbir-74404b280/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2BIpBlYrfQOWNIbKr%2BZzGPg%3D%3D';
  }
  const github=()=>{ 
    window.location.href = 'https://github.com/AmirShabbir99';
  }
  const navigate =useNavigate();
  return (
    <>
    <div className="HomeScreen1">
            <div className="left">
            <img className='imgHome' src={img1} alt="" />
        <div className="socialIcons">
            <div className="social" onClick={linkedIn}>
            <i className="fa-brands fa-linkedin"></i>
            </div>
            <div className="social" onClick={github}>
            <i className="fa-brands fa-github" ></i>
            </div>
        </div>
        <button onClick={()=>navigate('/contact')} className='btnHire'>Hire Me</button>
        </div>
       

        <div className="rightScreen">
        <div className="homeIntro">
        <div className="port">Portfolio</div> 
        <div className="intro"><span className="hello"> Hello</span>, M.Amir Shabbir , Front End Developer </div>
        <div className="detail">Dynamic and detail-oriented web developer with a Bachelor of Computer Science from 
Lahore Garrison University. Proficient in HTML, CSS, JavaScript, and React.js, with over 5 
months of Experience & Practice in front end development. Skilled in both independent and 
collaborative projects, specializing in landing page and website development. Possesses 
foundational knowledge in Flutter and machine learning. Committed to delivering high
quality, user-friendly web solutions.</div>
            <div className="homeSocial">
              <span className="spanSocial">
              <i className="fa-solid fa-location-dot"></i>
              Lahore ,Pakistan
              </span>
              <span className="spanSocial">
              <i className="fa-solid fa-phone"></i>
              03092972551
              </span>
              <span className="spanSocial">
              <i className="fa-solid fa-envelope"></i>
                m.amirshabbir99@gmail.com
              </span>
           

            </div>
        </div>

        </div>
    </div>
    
    
    </>
  )
}

export default Home