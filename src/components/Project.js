import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function Project() {
  return (
    <div className="project-section" >
         
          <div className="project-title">Projects</div>
          
          {/* main */}
          <div className="project-container">
                <Outlet />
              {/* <div className="box box-1">
                  <img src="images/picture.jpg" alt="logo" className="box-image" /> 
                  <div className="box-content">
                      <h3>To Do App</h3>
                      <p>A application for keeping track of expenses</p>
                  </div>
              </div>
              <div className="box box-2" >
                  <img src="images/picture.jpg" alt="" className="box-image" /> 
                  <div className="box-content">
                      <h3>Weather App</h3>
                      <p>A application for keeping track of expenses</p>
                  </div>
              </div>
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
              <div className="box box-5">
                  <img src="images/picture.jpg" alt="" className="box-image" /> 
                  <div class="box-content">
                      <h3>Photography Website</h3>
                      <p>A application for keeping track of expenses</p>
                  </div>
              </div>
              <div className="box box-6">
                  <img src="images/picture.jpg" alt="" className="box-image" /> 
                  <div className="box-content">
                      <h3>E-commerce App</h3>
                      <p>A application for keeping track of expenses</p>
                  </div>
              </div> */}
          </div>
          
          {/* sidebar */}
          <div className='sidebar'>
              <div><Link to='todo'>TO-DO APP</Link></div>
              <div><Link to='chat'>CHAT APP</Link></div>
              <div><Link to='dashboard'>ADMIN DASHBOARD</Link></div>
              <div><Link to='review'>REVIEW APP</Link></div>
              <div><Link to='booking'>BOOKING SYSTEM</Link></div>
              <div><Link to='blog'>BLOG</Link></div>
          </div>
  



    </div>
  )
}
