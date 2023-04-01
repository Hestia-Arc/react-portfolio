import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'


function App() {
  return (
    <div className="App">

      
         {/* Header Section  */}
      <header >   

          {/* Navigation */}
          <nav>
              <div>Logo</div>

              {/* menu */}
              <div className='nav-menu'>
                  <div>Home</div>
                  <div>About</div>
                  <div>Services</div>
                  <div>Contact</div>
              </div>
          </nav>

          <div className='header-inner'>
              {/* contents */}
             {/* Routes */}
              <Routes>
                  <Route path='home' element={<Home />}/>
                  <Route path='about' element={<About />}/>
                  <Route path='contact' element={<Contact />}/>
                  <Route path='project' element={<Project />}/>
              </Routes>

          </div>
          {/* tabs */}
          <div className='header-tabs-container'>
              <hr className='horizontal-line'/>
              {/* Footer */}
              <footer>
                <div className="copyright">Built by Esther &copy;2023 </div>
                <div><a href="https://github.com/Hestia-Arc/Portfolio-vercel">Source code</a></div>
              </footer>
              
             
              {/*  */}
              <div className='tab'><NavLink to='home'>HOME</NavLink></div>
              <div className='tab'><NavLink to='about'>ABOUT</NavLink></div>
              <div className='tab'><NavLink to='project'>PROJECTS</NavLink></div>
              <div className='tab'><NavLink to='contact'>CONTACT</NavLink></div>
          </div>
          
                  
       {/* Social Icons */}
          {/* <div className="left-icon">
              <ul>
                  <li><i className="fa-brands fa-github"></i></li>
                  <li><i className="fa-brands fa-linkedin"></i></li>
                  <li><i className="fa-brands fa-twitter"></i></li>
                  <li><i className="fa-solid fa-envelope"></i></li>
              </ul>
          </div> */}
      </header>


      {/* About section  */}
      <section className="about-section">
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

      {/* Skills  */}
          <div className="skill-title"> Skills</div>
          <div className="skill-container">
                  <div className="skill">Languages/Libs <br />/Frameworks</div>
                  <div className="skill">Technologies</div>
                  <div className="skill">Programs/Tools</div>
                  <div className="skill">Website Builder</div>
          </div>

      </section>


      {/* Project Section */}
      <section className="project-section" >
          <div className="project-title">Projects</div>
          <div className="project-container">
              <div className="box box-1">
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
              </div>
          </div>
      </section>


      {/* Contact Section  */}
      <section className="contact-section" id="contact-page">

              <div className="contact-column-one">
                      <div className="contact-tag">Contact Me...</div>    
                      <div className="contact-tagline">Open to job and internship opportunities</div>
              </div>
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
                          <i className="fa-solid fa-pen icon-i shift"></i>
                          <textarea className="message input-i" rows="" cols="" placeholder="Message..."></textarea>
        
                      </div>
                      
                      <button type="submit" className="contact-button">Submit</button>
                  </form>
              </div>
          
      </section>

      
      


    </div>
  );
}

export default App;
