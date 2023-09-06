import React from "react";
import styles from "./App.module.css";
// import Box from "@mui/material/Box";
// import Stack from '@mui/material/Stack';
// import Container from '@mui/material/Container';
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/home/Home";
import NavBar from "./UI/NavBar";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";
import { Box } from "@mui/material";
import ImgIcon from "./components/project/ImgIcon";

// Project inner
// import Todo from './components/Todo'
// import Blog from './components/Blog'
// import Booking from './components/Booking'
// import Chat from './components/Chat'
// import Dashboard from './components/Dashboard'
// import Review from './components/Review'

function App() {
  return (
    <>
    
    <div className={styles["App"]}>
      <NavBar />

      {/* ------------------------------ */}
      {/* ROUTES*/}
      {/* ------------------------------ */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="project" element={<Project />} >
          <Route path='project/imgicon' element={<ImgIcon />}/>
        </Route>
      </Routes>

      {/* ---------------------------- */}
      {/* TABS */}
      {/* ---------------------------- */}
      <div className={styles["tabs-container"]}>
        <Box sx={{
            display: "flex",
            // flexDirection: 'column',
            alignItems: "center",
          }}
          className={styles['m-copyright']}
          >
          <small className={styles["copyright"]}>Built by Esther &copy;2023 </small>
          {/* <small>
            <a href="https://github.com/Hestia-Arc/Portfolio-vercel">
              Source code
            </a>
          </small> */}
        </Box>

        <hr className={styles["horizontal-line"]} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className={styles['m-tabs']}
        >
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? styles["nav-active"] : styles["nav-link"]
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="about"
            className={(navData) =>
              navData.isActive ? styles["nav-active"] : styles["nav-link"]
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="project"
            className={(navData) =>
              navData.isActive ? styles["nav-active"] : styles["nav-link"]
            }
          >
            PROJECTS
          </NavLink>
          {/* <NavLink
            to="contact"
            className={(navData) =>
              navData.isActive ? styles["nav-active"] : styles["nav-link"]
            }
          >
            CONTACT
          </NavLink> */}
        </Box>
      </div>
    </div>
    
    </>
  );
}

export default App;
