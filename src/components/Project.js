import React from 'react'
// import { Outlet, Link } from 'react-router-dom'
import picture from '../images/picture.jpg'

export default function Project() {
  return (
    <div className="project-section" >
         
          <div className="project-title">Projects</div>
          
          {/* main */}
          <div className="project-container">
            
                <div className='project-flex-one'>  
                    <div className="box box-1">
                        <img src={picture} alt="logo" className="box-image" /> 
                        <div className="box-content">
                            <div className='box-tag'>Book Review Application</div>
                            <p className='box-paragraph'>An application for Readers to share books they've read</p>
                        </div>
                    </div>
                    <div className="box box-2" >
                        <img src={picture} alt="" className="box-image" /> 
                        <div className="box-content">
                            <div className='box-tag'>Admin Dashboard</div>
                            <p className='box-paragraph'>An application for keeping track of your App</p>
                        </div>
                    </div>
                </div>


             {/* <div className='project-flex-two'>
                <div className="box box-3" >
                    <img src="images/picture.jpg" alt="" className="box-image" /> 
                    <div className="box-content">
                        <h3>Chat App</h3>
                        <p>A application for keeping track of expenses</p>
                    </div>
                </div>
                <div className="box box-4" >
                    <img src="images/picture.jpg" alt="" className="box-image" /> 
                    <div className="box-content">
                        <h3>Admin Dashboard App</h3>
                        <p>A application for keeping track of expenses</p>
                    </div>
                </div>
             </div>
               */}
          </div>

    </div>
  )
}
