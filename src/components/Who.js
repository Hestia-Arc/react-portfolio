import React from 'react'

function Who() {
  return (
    <div>
        <div className="about-title">PROFILE</div>
          <div className="about-me">
              <div className="content">
                  <h2 className="about-tag"> <span className="about-circle"></span>Meet Me...</h2>
                  <div>Esther is an avid learner who is :</div> <br /> 
                  <div>Genuinely<b /> interested in technology</div>
                  <div>▶Keen to evaluate and learn new technologies </div>
                  <div>Focused on developing high quality finished products by using 
                      design and developing skills with relevant tools</div>
                  <div>Collaborative with great communication skills </div>
                  <div>Eager to obtain an internship role where i can apply my passion for 
                      coding so as to contributing to the company's reputation
                      and expand my learning and build upon my developer skills </div>
              </div>

              <div className="about-image-container">
                  <img src="images/myPicture.jpg.jpg" alt="Esther" className="about-image" />
                  <div className="about-image-dash">
                      <div className="dash"></div>
                      <div className="dash"></div>
                      <div className="dash"></div>
                      <div className="dash"></div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Who