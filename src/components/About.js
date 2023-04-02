import React from 'react'
import { Outlet, Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="about-section">
        
        {/* container 1 */}
        <div className='left'>
            <div><Link to='who'>WHO AM I?</Link></div>
            <div><Link to='skill'>SKILLS</Link></div>
            <div><Link to='service'>SERVICES</Link></div>
        </div>

        {/* container2 */}
        <div className='right'>
            <Outlet />
        </div>
        
    </div>
  )
}
