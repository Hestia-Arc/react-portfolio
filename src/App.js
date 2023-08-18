import React from "react";
import styles from "./App.module.css";
// import Box from "@mui/material/Box";
// import Stack from '@mui/material/Stack';
// import Container from '@mui/material/Container';
import { Routes, Route, NavLink } from "react-router-dom";
import Home from './components/Home'
import NavBar from "./UI/NavBar";
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
    <div className={styles["App"]}>
      
      <NavBar />
      


      {/* contents */}
      {/* Routes */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />}/>
        <Route path='project' element={<Project />} />
        {/* <Route path='todo' element={<Todo />}/>
                     <Route path='blog' element={<Blog />}/>
                     <Route path='booking' element={<Booking />}/>
                     <Route path='chat' element={<Chat />}/>
                     <Route path='dashboard' element={<Dashboard />}/>
                     <Route path='review' element={<Review />}/> */}
      </Routes>

      {/* ---------------------------- */}
      {/* TABS */}
      {/* ---------------------------- */}
      <div className={styles["tabs-container"]}>
        <span>
            <footer>
                <div className={styles["copyright"]}>Built by Esther &copy;2023 </div>
                <div><a href="https://github.com/Hestia-Arc/Portfolio-vercel">Source code</a></div>
            </footer>
        </span>

        <hr className={styles['horizontal-line']}/>     
              
        <div className={styles['tab']}><NavLink to='/'>HOME</NavLink></div>
        <div className={styles['tab']}><NavLink to='about'>ABOUT</NavLink></div>
        <div className={styles['tab']}><NavLink to='project'>PROJECTS</NavLink></div>
        <div className={styles['tab']}><NavLink to='contact'>CONTACT</NavLink></div>
      </div>
    </div>
  );
}

export default App;
