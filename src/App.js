import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Project from "./components/project/Project";
import {
  Box,
  ThemeProvider,
  GlobalStyles,
  CssBaseline,
  Stack,
  Typography,
  Avatar,
} from "@mui/material";
import { ColorModeContext, tokens, useMode } from "./theme";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import { motion } from "framer-motion";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import picture from "./images/image2.jpg";

function App() {
  const [theme, colorMode] = useMode();
  // const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isOpen, setIsOpen] = useState(false);

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
            position: "relative",
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
            <Route
              path="/"
              element={
                <Home isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
              }
            />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="project" element={<Project />} />
          </Routes>

          {/* SLIDE BOX */}
          <Box
            sx={{
              // backgroundColor: "#9ca3af60",
              display: isOpen ? "flex" : "none",
              justifyContent: "flex-end",
              height: "100vh",
              position: "fixed",
              top: 0,
              right: 0,
              left: 0,
              // bottom: 0,
            }}
          >
            {/* ------- sidebar */}
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, x: "-0.5%" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 43,
                  damping: 12,
                  delay: 0.4,
                  duration: 0.8,
                }}
                onClick={() => setIsOpen(false)}
                style={{
                  backgroundColor: "#37415175",
                  display: "flex",
                  justifyContent: "flex-end",
                  height: "100vh",
                  position: "absolute",
                  top: 0,
                  right: 0,
                  left: 0,
                  // bottom: 0,
                  transition: "all 600ms ease-in",
                }}

                // className="hidden sm:flex absolute top-0 right-0 left-0 bottom-0 bg-[rgba(0,0,0,0.5)] items-center z-[800] "
              >
                <motion.div
                  // whileHover={{scale: [1, 2, 1]}}
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: "0", position: "fixed" }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{
                    type: "spring",
                    stiffness: 43,
                    damping: 12,
                    delay: 0.8,
                  }}
                  style={{ height: "100%" }}
                >
                  <Stack
                    alignItems="flex-end"
                    justifyContent="space-between"
                    sx={{
                      opacity: 0.982,
                      display: isOpen ? "flex" : "none",
                      width: "270px",
                      height: "100%",
                      backgroundColor: colors.grey[900],
                      borderLeft: `1px solid ${colors.grey[700]}`,
                      zIndex: 999,
                      transform: isOpen
                        ? "translateX(-0px)"
                        : "translateX(-200px)",
                      // transition: "all 500ms",

                      a: {
                        textDecoration: "none",
                        color: colors.grey[400],
                        transition: "transform 0.5s",

                        "&:hover": {
                          color: colors.goldAccent[300],
                          transform: "translateY(-3px)",
                        },

                        "&:active": {
                          color: colors.goldAccent[300],
                          transform: "translateY(-3px)",
                        },
                      },

                      [`@media screen and (min-width: ${theme.breakpoints.values.sm}px)`]:
                        {
                          display: "none",
                        },
                    }}
                    px={1.5}
                    pt={3}
                    pb={4}
                  >
                    <Stack
                      alignItems="flex-end"
                      spacing={4}
                      sx={{ width: "100%" }}
                    >
                      <Box
                        sx={{
                          height: "50px",
                          width: "100%",
                          borderBottom: `1px solid ${colors.grey[700]}`,
                          display: "flex",
                          justifyContent: "flex-end"
                        }}
                      >
                        <Box
                          sx={{ height: "40px", width: "40px", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "50%", background: colors.grey[800], border: `1px solid ${colors.grey[800]}` }}
                        >
                        <CloseRoundedIcon onClick={() => setIsOpen(false)} sx={{ color: colors.grey[400] }} />
                        </Box>
                      </Box>
                      {/* ------- */}
                      <Link to="about">
                        <Typography variant="xlText">About</Typography>
                      </Link>

                      <Link to="project">
                        <Typography variant="xlText">Portfolio</Typography>
                      </Link>
                    </Stack>

                    {/* =============== pic & links */}
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 1 }}
                    >
                      <Stack
                        alignItems="flex-end"
                        sx={{
                          borderBottom: `1px solid ${colors.grey[700]}`,
                          paddingBottom: "4px",
                        }}
                      >
                        <Box
                          sx={{
                            width: "fit-content",
                            borderRadius: "50%",
                            border: `1px solid ${colors.grey[800]}`,
                            padding: "4px",
                          }}
                        >
                          <Avatar
                            src={picture}
                            variant="circle"
                            alt="Hestia-Arcbyte"
                            sx={{
                              width: 80,
                              height: 80,
                              border: `1px solid ${colors.goldAccent[800]}`,
                              padding: "4px",
                            }}
                            loading="lazy"
                          />
                        </Box>
                        <Typography
                          variant="mdText"
                          sx={{ color: colors.grey[400], textAlign: "right" }}
                        >
                          Building Intuitive Web Experience.
                        </Typography>
                      </Stack>
                      {/* =============== links */}
                      <Stack
                        spacing={1}
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        sx={{
                          height: "50px",
                          width: "100%",
                          backgroundColor: colors.goldAccent[500],
                          // border: `1px solid ${colors.grey[900]}`,
                          borderRadius: "4px",
                          // p: "0px 15px",
                        }}
                      >
                        <span>
                          <a
                            href="https://github.com/Hestia-Arc"
                            target="blank"
                          >
                            <GitHubIcon />
                          </a>
                        </span>
                        <span>
                          <a
                            href="https://www.linkedin.com/in/hestiaarc00"
                            target="blank"
                          >
                            <LinkedInIcon />
                          </a>
                        </span>
                        <span>
                          <a
                            href="https://twitter.com/arc_hestia00"
                            target="blank"
                          >
                            <TwitterIcon />
                          </a>
                        </span>
                        <span>
                          <a href="mailto:hestia.dev005@gmail.com">
                            <MarkEmailUnreadRoundedIcon />
                          </a>
                        </span>
                      </Stack>
                    </Box>
                  </Stack>
                </motion.div>
              </motion.div>
            )}
          </Box>

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
