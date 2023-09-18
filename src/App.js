import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";
import { Box, ThemeProvider } from "@mui/material";
import ImgIcon from "./components/project/ImgIcon";
import { theme } from "./theme";


function App() {
  return (
    <ThemeProvider theme={theme}>
    
    <Box sx={{p: '0 200px', }}>
      

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
      {/* <div className={styles["tabs-container"]}>
        {/* <Box sx={{
            display: "flex",
            flexDirection: 'column',
            alignItems: "center",
          }}
          className={styles['m-copyright']}
          >
          <small className={styles["copyright"]}>Built by Esther &copy;2023 </small>
          <small>
            <a href="https://github.com/Hestia-Arc/Portfolio-vercel">
              Source code
            </a>
          </small>
        </Box> 

        {/* <hr className={styles["horizontal-line"]} /> *
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className={`${styles['l-tabs']} ${styles['m-tabs']}`}
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
          </NavLink> 
        </Box>
      </div> */}
    </Box>
    
    </ThemeProvider>
  );
}

export default App;
