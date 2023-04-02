import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

export default function About() {
  return (
    <div className="about-section">
        
        {/* container 1 */}
        <div className='left'>
            <div className='about-left-tag'><NavLink to='who'>WHO AM I?</NavLink></div>
            <div className='about-left-tag'><NavLink to='skill'>SKILLS</NavLink></div>
            <div className='about-left-tag'><NavLink to='service'>SERVICES</NavLink></div>
        </div>

        {/* container2 */}
        <div className='right'>
            <Outlet />
        </div>
        
    </div>
  )
}
