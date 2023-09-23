import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
import Image from "../../images/p8.jpg";
import Season from '../../images/season app.png'

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
  },
});

const ContentBox = styled(Stack)({
  height: 530,
  // border: "1px solid black",
  marginBottom: 100,
});
// -----------------------------------

export default function Project() {
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

          <Link to="../contact">
            <Typography variant="h6">Contact</Typography>
          </Link>
        </Stack>
      </NavBox>

      {/* ------------------------------------ */}
      {/* PROJECTS */}
      {/* ------------------------------------- */}

      <Box sx={{ margin: "40px 0" }}>
        <Box sx={{textAlign: 'center', marginBottom: 7}}>
          <Typography variant="h3">Projects</Typography>
        </Box>
        <ProjectBox img={Season} direction={{ xs: "column-reverse", sm: "row" }} title='Season Gallery' />
        <ProjectBox
        img={Image}
          direction={{ xs: "column-reverse", sm: "row-reverse" }}
          sideDirection="flex-end"
        />
        <ProjectBox img={Image} direction={{ xs: "column-reverse", sm: "row" }} />
      </Box>
    </Box>
  );
}

function ProjectBox(props) {
  return (
    <ContentBox direction={props.direction} spacing={3} sx={{}}>
      <Box
        sx={{
          flex: 5,
          borderRadius: "10px",
          boxShadow: "3px 6px 17px rgba(0,0,0,.3)",
          // backgroundColor: "rgba(0,0,0,.3)",
          // background: `url(${props.img})`,
          // backgroundPosition: "center",
          // backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // border: "1px solid black",
        }}
      >
        <img
          src={props.img}
          alt="icon"
          loading="lazy"
          decoding="async"
          style={{ height: "100%", width: "100%", borderRadius: "10px" }}
        />
      </Box>
      <Stack
        justifyContent={props.sideDirection}
        sx={{
          flex: 3,
          // border: "1px solid black"
        }}
      >
        <Typography variant="h4">{props.title ? <>{props.title}</> : 'Admin Dashboard'}</Typography>
        <Typography variant="h7">
          An application for see the overview of an app.{" "}
        </Typography>
      </Stack>
    </ContentBox>
  );
}
