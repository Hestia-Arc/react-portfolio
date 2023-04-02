import React from 'react'
import myPicture from '../images/myPicture.jpg'

function Who() {
  return (
    <div className='who'>
        {/* <div className="about-title">PROFILE</div> */}
        
        <div className="who-content">
            <h2 className="about-tag"> Meet Me...</h2>
            <div>Esther is an avid learner who is :</div> <br /> 
            <div className='line w-1'>- Genuinely interested in technology</div>
            <div className='line w-2'>- Keen to evaluate and learn new technologies </div>
            <div className='line w-4'>- Collaborative with great communication skills </div>
            <div className='line w-3'>- Focused on developing high quality finished products by using 
                design and developing skills with relevant tools</div>
            <div className='line w-5'>- Eager to obtain an internship role where i can apply my passion for 
                coding so as to contributing to the company's reputation
                and expand my learning and build upon my developer skills </div>
        </div>

        <div className="who-image-container">
            <img src={myPicture} alt="Esther" className="who-image" />
            <hr className='who-hr hr1'/>
            <hr className='who-hr hr2'/>
            {/* <div className="about-image-dash">
                <div className="dash"></div>
                <div className="dash"></div>
                <div className="dash"></div>
                <div className="dash"></div>
            </div> */}
        </div>
         
    </div>
  )
}

export default Who