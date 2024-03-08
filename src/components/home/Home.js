import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Skeleton,
  Stack,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import NavBar from "./NavBar";
import MainImageDark from "../../data/bg-4.jpeg";
import MainImageLight from "../../data/bg-1.jpeg";
import bimg2 from "../../images/pabrush.png";
import Footer from "../Footer";
import { PaddedBox } from "../../UI/pages";
import { tokens } from "../../theme";
import CV from "../../data/Resume-Afolabi Esther.pdf";

// import FlareRoundedIcon from "@mui/icons-material/FlareRounded";

// import { motion } from "framer-motion";
// import MainImage from "../../images/idea1.jpg";
// import bimg from "../../images/bimg.jpg";
// import darkbg from "../../images/cv1-01.jpg";
// import darkbg from "../../data/c-bg.png";
import Recents, { Card } from "./Recents";
import { projects } from "../../data/projectData";

const HomeContainer = styled(Box)((props) => ({
  // border: '1px solid black'
  // color: "#fff",
  height: "100vh",
  minWidth: "1350px",
  maxWidth: "1400px",
  margin: "0 auto",
  // position: "relative",
  overflowX: "hidden",
  overflowY: props.isOpen && "hidden",
  // backgroundColor: "rgba(0,0,0,0.2)",

  a: {
    textDecoration: "none",
    color: props.colors.grey[200],
    transition: "transform 0.5s",

    "&:hover": {
      color: props.colors.goldAccent[300],
      transform: "translateY(-3px)",
      fontWeight: 800,
    },
  },

  [props.theme.breakpoints.down("sm")]: {
    minWidth: "325px",
    maxWidth: "600px",
    height: "95vh",
    margin: "0px",
  },
}));

const HeaderBox = styled("header")((props) => ({
  position: "relative",
  height: "38rem",
  background:
    props.theme.palette.mode === "dark"
      ? `url(${MainImageLight})`
      : `url(${MainImageDark})`,
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
  backgroundSize: "contain",
  // display: "flex",
  // flexDirection: "column",
  // border: '40px inset',
  // borderImage: `url(${bimg}) 100 / 40px `,
  // border: '1px solid black',
  // backgroundColor: 'rgba(0,0,0,.3)',
  // fontFamily: "Fredoka",

  [props.theme.breakpoints.down("sm")]: {
    height: "40rem",

    // minWidth: "325px",
    // maxWidth: "1400px",
    // background: "none",
  },
}));

export default function Home() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const colorMode = useContext(ColorModeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimated(true);
    }, 1000);
  }, []);

  return (
    <HomeContainer theme={theme} colors={colors} isOpen={isOpen}>
      <HeaderBox>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.6)",
            color:
              theme.palette.mode === "dark"
                ? colors.grey[900]
                : colors.grey[200],

            [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]:
              {
                // display: "none",
                // color: colors.baseAccent[500],
              },
          }}
        >
          <PaddedBox theme={theme}>
            <NavBar isOpen={isOpen} handleIsOpen={() => setIsOpen(!isOpen)} />
            <Box
              sx={{
                // border: "1px solid black",
                height: "467px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "1.2rem",

                [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]:
                  {
                    height: "553px",
                  },
              }}
            >
              {/* NAME */}
              <Stack
                sx={{
                  width: "fit-content",
                  // border: "1px solid blue",

                  [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]:
                    {
                      width: "100%",
                    },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "start", sm: "center" },
                  }}
                >
                  <Typography
                    variant="lgText"
                    sx={{
                      color: colors.grey[400],
                      [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]:
                        {
                          fontSize: "1rem",
                          lineHeight: "1.3rem",
                        },
                    }}
                  >
                    Hi there, I'm Esther{" "}
                  </Typography>

                  <Box
                    sx={{
                      borderBottom: `0.5px solid ${colors.goldAccent[200]}`,
                      width: "70%",
                      opacity: "0.6",
                      marginLeft: "0.5rem",

                      [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]:
                        {
                          width: "85%",
                          marginLeft: "0rem",
                          marginTop: "0.5rem",
                          marginBottom: "0.3rem",
                        },
                    }}
                  ></Box>
                </Box>

                <Typography
                  variant="smDisplay"
                  fontWeight={500}
                  sx={{
                    textTransform: "uppercase",
                    //  letterSpacing: 20

                    [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]:
                      {
                        fontSize: "2.9rem",
                      },
                  }}
                >
                  Front-end Developer
                </Typography>
              </Stack>

              {/* TAGLINE */}
              <Box
                sx={
                  {
                    // borderLeft: `0.5px solid ${colors.goldAccent[200]}`,
                    // padding: "0.5rem 0.8rem",
                  }
                }
              >
                {isAnimated ? (
                  <Box
                    sx={{
                      opacity: isAnimated ? 1 : 0,
                      transition: "opacity 300ms ease-in",
                      display: { xs: "block", sm: "flex" },
                      flexDirection: { sm: "column" },
                    }}
                  >
                    <Typography
                      variant="lgText"
                      fontWeight={400}
                      sx={{
                        color: colors.goldAccent[400],
                        [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]:
                          {
                            fontSize: "1rem",
                            lineHeight: "1.3rem",
                          },
                      }}
                    >
                      Your vision. Amplified. Seamless interfaces, intuitive
                      journeys.
                    </Typography>

                    <Typography
                      variant="lgText"
                      fontWeight={400}
                      sx={{
                        color: colors.grey[400],
                        [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]:
                          {
                            marginLeft: "5px",
                            fontSize: "1rem",
                            lineHeight: "1.3rem",
                          },
                      }}
                    >
                      Building intuitive web experience & innovative solutions.
                      {/* "Don't watch the clock. Do what it does. Keep going." -Sam
                  Levenson{" "} */}
                    </Typography>
                  </Box>
                ) : (
                  <Stack spacing={1} sx={{}}>
                    <Skeleton
                      variant="text"
                      sx={{
                        width: {xs: "80%", sm:"450px", lg: "500px"},
                        fontSize: "1rem",
                        backgroundColor: colors.grey[700],
                      }}
                    />
                    <Skeleton
                      variant="text"
                      sx={{
                        width: {xs: "70%", sm:"400px", lg: "420px"},
                        fontSize: "1rem",
                        backgroundColor: colors.grey[700],
                      }}
                    />
                  </Stack>
                )}

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  mt={2.2}
                  sx={{
                    opacity: isAnimated ? 1 : 0,
                    transition: "opacity 400ms 150ms ease-in",
                    [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]:
                      {
                        // width: "39%",
                      },
                  }}
                >
                  <a href="#contact">
                    <Button
                      variant="contained"
                      color="secondary"
                      // startIcon={<ArticleRoundedIcon />}
                      sx={{
                        width: "120px",
                        // background: `linear-gradient(to right,rgba(51,53,57, 0.5), rgba(156,163,175, 0.3), rgba(166,201,150, 0.4)), url(${darkbg})`,
                        border: `0.5px solid ${colors.grey[800]}`,

                        [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]:
                          {
                            width: "113px",
                          },
                      }}
                    >
                      Contact
                    </Button>
                  </a>

                  <a href={CV} download="Esther's Cv">
                    <Button variant="outlined" color="secondary">
                      DOWNLOAD CV
                    </Button>
                  </a>

                  {/* <FlareRoundedIcon
                    onClick={colorMode.toggleColorMode}
                    sx={{
                      fontSize: "37px",
                      [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]:
                        {
                          display: "none",
                        },
                    }}
                  /> */}

                  {/* <Button
                    variant="outlined"
                    // startIcon={<ArticleRoundedIcon />}
                    sx={{
                      width: "100%",
                      background: `linear-gradient(to right,rgba(51,53,57, 0.5), rgba(156,163,175, 0.3), rgba(166,201,150, 0.4)), url(${darkbg})`,
                      border: `0.5px solid ${colors.grey[800]}`,
                    }}
                  >
                    Resume
                  </Button> */}
                </Stack>
              </Box>
            </Box>
          </PaddedBox>
        </Box>
      </HeaderBox>

      {/* recents */}
      <Box
        sx={{
          height: "fit-content",
          background: `url(${bimg2})`,
          backgroundPosition: "90% -60px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          marginTop: "-100px",
          marginBottom: "-65px",
          color:
            theme.palette.mode === "dark" ? colors.grey[200] : colors.grey[900],

          [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]: {
            marginBottom: "-211px",
          },
        }}
        pt={14}
        pb={{ xs: 30, sm: 14 }}
      >
        {/* <Overlay sx={{padding: { xs: 1, lg: 4 }}}> */}
        <PaddedBox>
          <Stack spacing={1}>
            <Typography variant="xsDisplay" fontWeight={500}>
              Recent Projects
            </Typography>
            <Typography
              variant="smText"
              // sx={{ borderBottom: "1px solid #ebebeb" }}
            >
              See what projects I've been working
            </Typography>
          </Stack>

          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              // overflowY: "hidden",
              borderBottom: { xs: `1px solid ${colors.grey[800]}`, sm: "none" },
            }}
            pb={1}
          >
            <Recents />
          </Box>
        </PaddedBox>
        {/* </Overlay> */}
      </Box>

      {/* CURRENTLY DEVELOPING */}

      <Box
        sx={{ height: "fit-content", backgroundColor: colors.goldAccent[400] }}
        py={10}
      >
        <PaddedBox>
          <Stack spacing={1} mb={2} sx={{ color: colors.grey[100] }}>
            <Typography variant="xsDisplay" fontWeight={500}>
              Current Project
            </Typography>
            <Typography
              variant="smText"
              // sx={{ borderBottom: "1px solid #ebebeb" }}
            >
              Projects I'm currently working on.
            </Typography>
          </Stack>

          <Card project={projects[6]} />
        </PaddedBox>
      </Box>

      {/* footer */}
      <Footer bg={true} />
    </HomeContainer>
  );
}
