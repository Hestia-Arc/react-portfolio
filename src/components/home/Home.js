import React from "react";
import { Box, Typography, styled } from "@mui/material";
// import { motion } from "framer-motion";
import NavBar from "./NavBar";
import MainImage from '../../images/p8.jpg'


const HomeContainer = styled(Box)({
  // border: '1px solid black'
})


const MainBox = styled(Box)({
  // border: '1px solid black',
  height: 550,
  margin: '20px 0',
  borderRadius: '10px',
  boxShadow: '3px 6px 17px rgba(0,0,0,.3)',
  backgroundColor: 'rgba(0,0,0,.3)',
  background: `url(${MainImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: '#f3f3f3'
})

export default function Home() {
  return (
    
      <HomeContainer>
        <NavBar />

       <MainBox>
        <Typography variant="h3">Crafting Innovative Solutions</Typography>
        <Typography variant="h6">Crafting Innovative Solutions</Typography>

       </MainBox>
          

      </HomeContainer>
    
  );
}
