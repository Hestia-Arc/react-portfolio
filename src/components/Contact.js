import React from 'react'

export default function Contact() {
  return (
    <div className="contact-section">
         
        {/* Column 1 */}
        <div className="contact-column-one">
            <div className='column-one-inner'>
                <div className="contact-tag">Contact Me...</div>    
                <div className="contact-tagline">Open to job and internship opportunities</div>
            </div>
        </div>

        {/* Column 2 */}
        <div className="contact-column-two">
            <form action="" className="contact-form">
                <div className="input-container">
                    <i className="fa-solid fa-user icon-i"></i>
                    <input type="text" className="form-name input-i" placeholder="Name" />
                </div>
                <div className="input-container">
                    <i className="fa-solid fa-envelope icon-i"></i>
                    <input type="text" className="email input-i" placeholder="Email" />
                </div>
                <div className="input-container">
                    <i className="fa-solid fa-pen icon-i-message"></i>
                    <textarea className="input-i-message message" rows="" cols="" placeholder="Message..."></textarea>

                </div>
                
                <button type="submit" className="contact-button">Submit</button>
            </form>
        </div>


    </div>
  )
}
