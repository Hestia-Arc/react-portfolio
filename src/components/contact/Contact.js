import { Box, Stack, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const NavBox = styled(Box)({
  padding: "10px 0",
  // height: '280px',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "sticky",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999,
  background: "#fff",
  borderBottom: "1px solid grey",

  a: {
    textDecoration: "none",
    color: "black",
    transition: 'transform 0.5s',

    '&:hover': {
      color: '#ff004f',
      transform: 'translateY(-5px)',
    }
  },
});

export default function Contact() {
  const [scrollActive, setScrollActive] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 10) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    };
  }, []);

  return (
    <Box>
      {/* ------------------------------------ */}
      {/* NAVIGATION */}
      {/* ------------------------------------- */}
      <NavBox
        sx={{
          boxShadow: scrollActive ? "0px 15px 10px -15px #111" : "",
          height: scrollActive ? { xs: "70px", sm: "90px" } : "",
        }}
      >
        <Stack direction="row" spacing={4}>
          <Link to="../">
            <Typography variant="h6">Home</Typography>
          </Link>

          <Link to="../about">
            <Typography variant="h6">About</Typography>
          </Link>

          <Link to="../project">
            <Typography variant="h6">Portfolio</Typography>
          </Link>
        </Stack>
      </NavBox>


      {/* ------------------------------------ */}
      {/* CONTACT */}
      {/* ------------------------------------- */}

      <Box sx={{ margin: "40px 0" }}>
        <Box sx={{textAlign: 'center', marginBottom: 7}}>
          <Typography variant="h3">Contact</Typography>
        </Box>
        
      </Box>
    </Box>
  );
}
