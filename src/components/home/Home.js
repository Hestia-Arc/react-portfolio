import React from "react";
import { Box, Typography, styled } from "@mui/material";
// import { motion } from "framer-motion";
import NavBar from "./NavBar";
import MainImage from "../../images/p8.jpg";
import Footer from "../Footer";

const HomeContainer = styled(Box)({
  // border: '1px solid black'
});

const MainBox = styled(Box)({
  // border: '1px solid black',
  height: 500,
  margin: "20px 0",
  borderRadius: "10px",
  fontFamily: 'Fredoka',
  // boxShadow: '3px 6px 17px rgba(0,0,0,.3)',
  // backgroundColor: 'rgba(0,0,0,.3)',
  // background: `url(${MainImage})`,
  // backgroundPosition: "center",
  // backgroundRepeat: "no-repeat",
  // backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  // color: '#f3f3f3',
  textAlign: "center",
});

export default function Home() {
  return (
    <HomeContainer>
      <NavBar />

      <MainBox>
        <Typography variant="h6" sx={{ fontWeight: 300 }}>
          Hi there
        </Typography>
        <Typography variant="h2" fontWeight={600}>I'm Esther</Typography>
        <Typography
          sx={{
            border: "1px solid #d32f2f",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        >
          A Front-end Developer
        </Typography>

        <Box sx={{width: '50%'}}>
          <Typography variant="h7">
            I am an avid learner who is genuinely interested in technology and
            passionate about bringing digital experiences to life.
          </Typography>
        </Box>
      </MainBox>

      <Footer />
    </HomeContainer>
  );
}
