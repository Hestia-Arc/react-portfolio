import React, { useContext } from "react";
import {
  Box,
  Button,
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
import { ColorModeContext, tokens } from "../../theme";
import FlareRoundedIcon from "@mui/icons-material/FlareRounded";

// import { motion } from "framer-motion";
// import MainImage from "../../images/idea1.jpg";
// import bimg from "../../images/bimg.jpg";
// import darkbg from "../../images/cv1-01.jpg";
import darkbg from "../../data/c-bg.png";

const HomeContainer = styled(Box)((props) => ({
  // border: '1px solid black'
  // color: "#fff",
  height: "90vh",
  minWidth: "1350px",
  maxWidth: "1400px",
  margin: "0 auto",
  overflowX: "hidden",
  // backgroundColor: "rgba(0,0,0,0.2)",

  a: {
    textDecoration: "none",
    color: props.colors.grey[200],
    transition: "transform 0.5s",

    "&:hover": {
      color: props.colors.goldAccent[300],
      transform: "translateY(-3px)",
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
  const colorMode = useContext(ColorModeContext);
  // const bkPt = useMode()

  return (
    <HomeContainer theme={theme} colors={colors}>
      <HeaderBox>
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.8)",
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
            <NavBar />
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
                  <Typography variant="xxlText">
                    Hi there, I'm Esther{" "}
                  </Typography>

                  <Box
                    sx={{
                      borderBottom: `0.5px solid ${colors.goldAccent[100]}`,
                      width: "62%",
                      opacity: "0.6",
                      marginLeft: "0.5rem",

                      [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]:
                        {
                          width: "70%",
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
                        fontSize: "2.5rem",
                      },
                  }}
                >
                  Front-end Developer
                </Typography>
               
              </Stack>

              {/* TAGLINE */}
              <Stack
                sx={{
                  borderLeft: `0.5px solid ${colors.goldAccent[100]}`,
                  padding: "0.5rem 0.8rem",
                }}
              >
                <Typography
                  variant="lgText"
                  fontWeight={400}
                  sx={{ color: colors.grey[400] }}
                >
                  Building intuitive web experience & innovative solutions.
                </Typography>
                <Typography sx={{ color: colors.grey[400] }}>
                  "Don't watch the clock. Do what it does. Keep going." -Sam
                  Levenson
                </Typography>

                <Stack
                  direction="row"
                  alignItems="center"
                  spacing={2}
                  mt={2.2}
                  sx={{
                    [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]:
                      {
                        // width: "39%",
                      },
                  }}
                >
                  <Button
                    variant="contained"
                    // startIcon={<ArticleRoundedIcon />}
                    sx={{
                      width: "120px",
                      background: `linear-gradient(to right,rgba(51,53,57, 0.5), rgba(156,163,175, 0.3), rgba(166,201,150, 0.4)), url(${darkbg})`,
                      border: `0.5px solid ${colors.grey[800]}`,

                      [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]:
                        {
                          width: "113px",
                        },
                    }}
                  >
                    Contact
                  </Button>

                  <a href="../project">
                    <Typography variant="smText">DOWNLOAD CV</Typography>
                  </a>

                  <FlareRoundedIcon
                    onClick={colorMode.toggleColorMode}
                    sx={{
                      fontSize: "37px",
                      [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]:
                        {
                          display: "none",
                        },
                    }}
                  />

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
              </Stack>
            </Box>
          </PaddedBox>
        </Box>
      </HeaderBox>

      {/* recents */}
      <Box
        sx={{
          height: "43rem",
          background: `url(${bimg2})`,
          backgroundPosition: "50% -50px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          marginTop: "-100px",
          marginBottom: "-110px",
          color:
            theme.palette.mode === "dark" ? colors.grey[200] : colors.grey[900],

          [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]: {
            marginBottom: "-141px",
          },
        }}
        pt={14}
        pb={10}
      >
        {/* <Overlay sx={{padding: { xs: 1, lg: 4 }}}> */}
        <PaddedBox>
          <Box>
            <Typography variant="xsDisplay" fontWeight={500}>
              Recent Projects
            </Typography>
          </Box>
        </PaddedBox>
        {/* </Overlay> */}
      </Box>

      <Box sx={{height: "400px", backgroundColor: colors.goldAccent[800]}}>

      </Box>

      {/* footer */}
      <Footer bg={true}/>
    </HomeContainer>
  );
}
