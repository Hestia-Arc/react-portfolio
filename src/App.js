import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";
import { Box, ThemeProvider, GlobalStyles, CssBaseline } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            "*::-webkit-scrollbar": {
              width: "3px",
              height: "3px",
            },
            "*::-webkit-scrollbar-track": {
              "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.4)",
              borderRadius: "24px",
            },
            "*::-webkit-scrollbar-thumb": {
              backgroundColor: "rgba(0,0,0,0.2)",
              borderRadius: "14px",

              outline: "1px solid slategrey",
            },
          }}
        />
        <Box
          sx={{
            
            // backgroundColor: "#f3f4f6",
            minWidth: { xs: "320px", sm: "600px", md: "1024px", lg: "1350px" },
            maxWidth: { xs: "599px", sm: "1023px", md: "1439px", lg: "1440px" },
            margin: "0 auto",
          }}
        >
          <CssBaseline />
          {/* ------------------------------ */}
          {/* ROUTES*/}
          {/* ------------------------------ */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="project" element={<Project />} />
          </Routes>

          {/* <small className={styles["copyright"]}>Built by Esther &copy;2023 </small>
          <small>
            <a href="https://github.com/Hestia-Arc/Portfolio-vercel">
              Source code
            </a>
          </small> */}
        </Box>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
