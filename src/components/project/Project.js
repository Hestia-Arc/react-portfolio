import React, { useEffect, useState } from "react";
import { Box, Divider, Stack, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";
// import Image from "../../images/p8.jpg";
import Season from "../../images/season app.png";
import Movie from "../../images/proj-movie2.png";
import Nature from "../../images/proj-nature.png";

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
      color: '#d32f2f',
      transform: 'translateY(-5px)',
    }
  },
});

const ContentBox = styled(Stack)(({ theme }) => ({
  // flex: 1,
  // border: "1px solid black",
  // marginBottom: 50,
  // [theme.breakpoints.down("sm")]: {
  //   // width: 200,
  // },
  // [theme.breakpoints.between("sm", "md")]: {
  //   padding: "0px 50px",
  //   height: "568px",
  // },
  // [theme.breakpoints.up("xl")]: {
  //   padding: "0px 400px",
  //   height: "778px",
  // },
}));
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

          {/* <Link to="../contact">
            <Typography variant="h6">Contact</Typography>
          </Link> */}
        </Stack>
      </NavBox>

      {/* ------------------------------------ */}
      {/* PROJECTS */}
      {/* ------------------------------------- */}

      <Box sx={{ margin: "40px 0 " }}>
        <Box sx={{ textAlign: "center", marginBottom: 7 }}>
          <Typography variant="h3">Projects</Typography>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          alignItems={{ xs: "center", sm: "flex-start" }}
          justifyContent="center"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={{ xs: 5, sm: 3 }}
          sx={{ minHeight: "40rem" }}
        >
          <ProjectBox
            img={Season}
            title="Season Gallery"
            link="https://season-gallery.vercel.app/gallery"
            desc="A responsive image gallery that showcases collection of images about the four seasons around the year."
          />
          <ProjectBox
            img={Movie}
            title="Movie Discovery App"
            link="https://movie-discovery-app-hng.vercel.app/"
            desc="A movie discovery application, where user can discover top rated movies, see details about each one and search for a movie by title."
          />
          <ProjectBox
            img={Nature}
            title="Weather App"
            link="https://natures-forecast.netlify.app/"
            desc="An application which shows the weather information (temperature, humidity etc) of a location. And predict the conditions of the atmosphere for a given location and time. "
          />
        </Stack>
      </Box>
    </Box>
  );
}

function ProjectBox(props) {
  return (
    <ContentBox
      spacing={3}
      flexWrap="wrap"
      useFlexGap
      sx={{ flex: { xs: 1, md: 1 } }}
    >
      <Stack
        justifyContent=""
        sx={{
          minHeight: { xs: 100, md: 200 },
          // border: "1px solid black"
        }}
      >
        <Typography variant="h4">
          {props.title ? <>{props.title}</> : "Admin Dashboard"}
        </Typography>
        <Typography variant="h7">{props.desc}</Typography>
      </Stack>

      <a href={props.link} target="_parent">
        <Box
          sx={{
            // flex: 5,
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
            height: 380,
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
      </a>
    </ContentBox>
  );
}
