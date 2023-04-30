import './App.css';
import { Routes, Route, NavLink, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'


// Project inner
// import Todo from './components/Todo'
// import Blog from './components/Blog'
// import Booking from './components/Booking'
// import Chat from './components/Chat'
// import Dashboard from './components/Dashboard'
// import Review from './components/Review'


function App() {
  return (
    <div className="App">

          {/* Navigation */}
          <nav>
              <div className='nav-title'>AFOLABI ESTHER</div>

              {/* menu */}
              <div className='nav-menu'>
                  {/* Social Icons */}
                  <div className="top-icon">
                      <span><a href='https://github.com/Hestia-Arc' target='blank'><i className="fa-brands fa-github icon"></i></a></span>
                      <span><a href='https://www.linkedin.com/in/hestiaarc00' target='blank'><i className="fa-brands fa-linkedin icon"></i></a></span>
                      <span><a href='https://twitter.com/arc_hestia00' target='blank'><i className="fa-brands fa-twitter icon"></i></a></span>
                      <span><a href='mailto:hestia.dev005@gmail.com'><i className="fa-solid fa-envelope icon"></i></a></span>
                  </div>
                  <div className='nav-btn'><Link to='contact'>Contact</Link></div>
              </div>
          </nav>

        
              {/* contents */}
             {/* Routes */}
              <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='about' element={<About />} />
                      {/* <Route path='who' element={<Who />}/> */}
                      {/* <Route path='skill' element={<Skill />}/> */}
                      {/* <Route path='service' element={<Service />}/> */}
                  
                  <Route path='contact' element={<Contact />}/>
                  <Route path='project' element={<Project />} />
                     {/* <Route path='todo' element={<Todo />}/>
                     <Route path='blog' element={<Blog />}/>
                     <Route path='booking' element={<Booking />}/>
                     <Route path='chat' element={<Chat />}/>
                     <Route path='dashboard' element={<Dashboard />}/>
                     <Route path='review' element={<Review />}/> */}
                
              </Routes>


          {/* tabs */}
          <div className='header-tabs-container'>
              
              {/* Footer */}
              <span>
                <footer>
                    <div className="copyright">Built by Esther &copy;2023 </div>
                    {/* <div><a href="https://github.com/Hestia-Arc/Portfolio-vercel">Source code</a></div> */}
                </footer>
              </span>

              <hr className='horizontal-line'/>
              
             
              {/*  */}
              <div className='tab'><NavLink to='/'>HOME</NavLink></div>
              <div className='tab'><NavLink to='about'>ABOUT</NavLink></div>
              <div className='tab'><NavLink to='project'>PROJECTS</NavLink></div>
              <div className='tab'><NavLink to='contact'>CONTACT</NavLink></div>
          </div>

    </div>
  );
}

export default App;
