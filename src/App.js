import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'


// About inner
import Who from './components/Who'
import Skill from './components/Skill'
import Service from './components/Service'

// Project inner
import Todo from './components/Todo'
import Blog from './components/Blog'
import Booking from './components/Booking'
import Chat from './components/Chat'
import Dashboard from './components/Dashboard'
import Review from './components/Review'


function App() {
  return (
    <div className="App">

      
         {/* Header Section  */}
      <header >   

          {/* Navigation */}
          <nav>
              <div>AFOLABI ESTHER</div>

              {/* menu */}
              <div className='nav-menu'>
                  {/* Social Icons */}
                  <div className="left-icon">
                      <span><i className="fa-brands fa-github"></i></span>
                      <span><i className="fa-brands fa-linkedin"></i></span>
                      <span><i className="fa-brands fa-twitter"></i></span>
                      <span><i className="fa-solid fa-envelope"></i></span>
                  </div>
                  <div>Contact</div>
              </div>
          </nav>

          <div className='header-inner'>
              {/* contents */}
             {/* Routes */}
              <Routes>
                  <Route path='home' element={<Home />}/>
                  <Route path='about' element={<About />}>
                      <Route path='who' element={<Who />}/>
                      <Route path='skill' element={<Skill />}/>
                      <Route path='service' element={<Service />}/>
                  </Route>
                  <Route path='contact' element={<Contact />}/>
                  <Route path='project' element={<Project />} >
                     <Route path='todo' element={<Todo />}/>
                     <Route path='blog' element={<Blog />}/>
                     <Route path='booking' element={<Booking />}/>
                     <Route path='chat' element={<Chat />}/>
                     <Route path='dashboard' element={<Dashboard />}/>
                     <Route path='review' element={<Review />}/>
                  </Route>
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
          
                  
       
      </header>

    </div>
  );
}

export default App;
