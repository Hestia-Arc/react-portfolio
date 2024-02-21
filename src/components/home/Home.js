import React, { useContext } from "react";
import { Box, Stack, Typography, styled, useTheme } from "@mui/material";
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
import darkbg from "../../data/footerbg.jpg";


const HomeContainer = styled(Box)((props) => ({
  // border: '1px solid black'
  color: "#fff",
  height: "90vh",
  minWidth: "1350px",
  maxWidth: "1400px",
  margin: "0 auto",
  backgroundColor: "#ccc",

  [props.theme.breakpoints.down("sm")]: {
    minWidth: "325px",
    // maxWidth: "1400px",
  },
}));

const HeaderBox = styled("header")((props) => ({
  // border: '1px solid black',
  position: "relative",
  height: "38rem",
  fontFamily: "Fredoka",
  // boxShadow: '3px 6px 17px rgba(0,0,0,.3)',
  // backgroundColor: 'rgba(0,0,0,.3)',
  background:
    props.theme.palette.mode === "dark"
      ? `url(${MainImageLight})`
      : `url(${MainImageDark})`,
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
  backgroundSize: "contain",
  display: "flex",
  flexDirection: "column",
  // border: '40px inset',
  // borderImage: `url(${bimg}) 100 / 40px `,

  [props.theme.breakpoints.down("sm")]: {
    // minWidth: "325px",
    // maxWidth: "1400px",
    background: "none",
  },
}));

export default function Home() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  // const bkPt = useMode()

  return (
    <HomeContainer theme={theme}>
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
                color: colors.baseAccent[500],
              },
          }}
        >
          <PaddedBox>
            <NavBar />
            <Box
              sx={{
                // border: "1px solid black",
                height: "55vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography variant="mdDisplay" fontWeight={500}>
                Front-end Developer
              </Typography>

              <Stack>
                <Typography
                  variant="lgText"
                  fontWeight={400}
                  sx={{ opacity: 0.6 }}
                >
                  Hi, I'm Esther
                </Typography>

                <Typography
                  variant="lgText"
                  fontWeight={400}
                  sx={{ opacity: 0.6 }}
                >
                  Building intuitive web experience & innovative solutions.
                </Typography>

                <FlareRoundedIcon
                  onClick={colorMode.toggleColorMode}
                  sx={{ fontSize: "37px" }}
                />
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
          color: "#555",
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

      {/* footer */}
      <Box
        sx={{
          height: "20rem",
          display: 'flex',
          flexDirection: 'column',
          // alignItems: 'end',
          // background: "#333",
          // border: '1px solid red',
          background: `linear-gradient(to right, rgba(1,1,2, 0.3), rgba(1,1,3, 0.66), rgba(1,1,3, 0.66)), url(${darkbg})`,
          backgroundPosition: "left",
          backgroundRepeat: "repeat",
          backgroundSize: "cover",
          // position: "relative",
          // marginTop: "-120px",
          // color: "#555",
        }}
        pt={20}
      >
        <Footer />
      </Box>
    </HomeContainer>
  );
}
