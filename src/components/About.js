import React from 'react'
import myPicture from '../images/myPicture.jpg'
// import { Outlet, NavLink } from 'react-router-dom'

export default function About() {
  return (
    <div className="about-section">

        <div className='box1'>
            <div className='skill-content'>
                <div className='skill-content-header'>SKILLS</div>
            </div>
        </div>
        <div className='box2'>
            <img src={myPicture} alt="Esther" className="about-image" />
        </div>
        <div className='box3'>
            <div className="who-content">
                <h2 className="who-tag"> Meet Me...</h2>
                <div className='who-tag2'>Esther is an avid learner who is :</div> <br /> 
                <div className='who-p-flex'>
                    <div className='who-dot-box'></div> 
                    <div className='line w-1'> Genuinely interested in technology and
                    passionate about bringing digital experiences to life.</div>
                </div>

                <div className='who-p-flex'>
                    <div className='who-dot-box'></div> 
                    <div className='line w-2'> Keen to evaluate and learn new technologies </div>
                </div>

                <div className='who-p-flex'>
                    <div className='who-dot-box'></div> 
                    <div className='line w-4'> Collaborative with great communication skills </div>
                </div>

                <div className='who-p-flex'>
                    <div className='who-dot-box'></div> 
                    <div className='line w-3'> Focused on developing high quality products and services</div>
                </div>

                <div className='who-p-flex'>
                    <div className='who-dot-box'></div> 
                    <div className='line w-5'> Eager to obtain an internship role where I can apply my developing skills
                    and contribute to the company's reputation
                    while gaining more experience. </div>
                </div>
            </div>
        </div>




      {/* ---------------------------------- */}
        
        {/* container 1
        <div className='left'>
            <div className='about-left-tag'><NavLink to='who'>WHO AM I?</NavLink></div>
            <div className='about-left-tag'><NavLink to='skill'>SKILLS</NavLink></div>
            <div className='about-left-tag'><NavLink to='service'>SERVICES</NavLink></div>
        </div> */}

        {/* container2
        <div className='right'>
            <Outlet />
        </div> */}
        
    </div>
  )
}
