import React, { useEffect, useState } from "react";
import {
  Box,
  Stack,
  Typography,
  colors,
  styled,
  useTheme,
} from "@mui/material";
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
// import HandymanRoundedIcon from '@mui/icons-material/HandymanRounded';
import { Link } from "react-router-dom";
import { projects } from "../../data/projectData";
// import Image from "../../images/p8.jpg";
// import Season from "../../images/season app.png";
// import Movie from "../../images/proj-movie2.png";
// import Nature from "../../images/proj-nature.png";
import darkbg from "../../data/c-bg.png";
import Footer from "../Footer";
import { tokens } from "../../theme";

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
    transition: "transform 0.5s",

    "&:hover": {
      color: "#d32f2f",
      transform: "translateY(-5px)",
    },
  },
});

// const ContentBox = styled(Stack)(({ theme }) => ({
//   // flex: 1,
//   // border: "1px solid black",
//   // marginBottom: 50,
//   // [theme.breakpoints.down("sm")]: {
//   //   // width: 200,
//   // },
//   // [theme.breakpoints.between("sm", "md")]: {
//   //   padding: "0px 50px",
//   //   height: "568px",
//   // },
//   // [theme.breakpoints.up("xl")]: {
//   //   padding: "0px 400px",
//   //   height: "778px",
//   // },
// }));
// -----------------------------------

export default function Project() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [scrollActive, setScrollActive] = useState(false);
  const [cardIndex, setCardIndex] = useState(3);

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
    <Box
      sx={{
        background: "#ccc",
        backgroundImage: `linear-gradient(to right, rgba(1,1,2, 0.5), rgba(1,1,3, 0.6)), url(${darkbg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: colors.grey[200],
      }}
    >
      {/* ------------------------------------ */}
      {/* NAVIGATION */}
      {/* ------------------------------------- */}
      <NavBox
        sx={{
          background: `linear-gradient(to right,rgba(51,53,57, 0.5), rgba(156,163,175, 0.3), rgba(166,201,150, 0.4)), url(${darkbg})`,
          boxShadow: scrollActive ? "0px 15px 10px -15px #111" : "",
          height: scrollActive
            ? { xs: "68px", sm: "70px" }
            : { xs: "68px", sm: "70px" },
          borderBottom: `1px solid ${colors.grey[600]}`,
          color: colors.grey[200],

          a: {
            textDecoration: "none",
            color: colors.grey[200],
          },
        }}
      >
        <Stack direction="row" spacing={4}>
          <Link to="../">
            <Typography variant="smText">Home</Typography>
          </Link>

          <Link to="../about">
            <Typography variant="smText">About</Typography>
          </Link>

          {/* <Link to="../contact">
              <Typography variant="h6">Contact</Typography>
            </Link> */}
        </Stack>
      </NavBox>

      {/* ------------------------------------ */}
      {/* PROJECTS */}
      {/* ------------------------------------- */}

      <Stack
        justifyContent={{ xs: "space-between" }}
        sx={{
          minHeight: { xs: "584px", sm: "80vh" },
          maxHeight: { xs: "585px", sm: "80vh" },
          margin: { xs: "0px", sm: "40px 0 " },
        }}
      >
        {/* <Box sx={{ textAlign: "center", marginBottom: 7 }}>
          <Typography variant="h3">Projects</Typography>
        </Box> */}

        {/* PROJECT MOBILE DISPLAY */}
        <Box
          sx={{
            [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]:
              {
                display: "block",
              },
            [`@media screen and (min-width: ${theme.breakpoints.values.sm}px)`]:
              {
                display: "none",
                // color: colors.baseAccent[500],
              },
          }}
        >
          <DisplayMobileProject data={projects[cardIndex - 1]} />
        </Box>

        {/* PROJECT LARGE SCREEN DISPLAY */}
        <Box
          // divider={<Divider orientation="vertical" flexItem />}
          sx={{
            height: { xs: "fit-content", sm: "32rem" },
            display: "flex",
            alignItems: "flex-end",
            overflowX: "auto",
            overflowY: "hidden",
            // border: "1px solid blue",

            [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]:
              {
                padding: "10px 2px",
              },
          }}
          pb={3}
          px={7}
        >
          {projects.map((project, key) => {
            const { id, title, img, link, desc } = project;

            return (
              <ProjectBox
                key={key}
                handleClick={() => setCardIndex(id)}
                active={cardIndex === id ? true : false}
                index={cardIndex === id && cardIndex}
                img={img}
                title={title}
                link={link}
                desc={desc}
              />
            );
          })}
          {/* ------------------- */}
          {/* <ProjectBox
            handleClick={() => setCardIndex(1)}
            active={cardIndex === 1 ? true : false}
            index={cardIndex === 1 && cardIndex}
            img={Season}
            title="Season Gallery"
            link="https://season-gallery.vercel.app/gallery"
            desc="A responsive image gallery that showcases collection of images about the four seasons around the year."
          /> */}
        </Box>
      </Stack>

      <Footer />
    </Box>
  );
}

// --------------------------------------------
function ProjectBox(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // const StyledImg = styled("img")((props) => ({
  //   height: props.active ? "480px" : "220px",
  //   width: props.active ? "350px" : "180px",
  //   borderRadius: "4px",

  //   [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]: {
  //     height: props.active ? "300px" : "180px",
  //     width: props.active ? "200px" : "150px",
  //   },
  // }));

  // const StyledImgMobile = styled("img")((props) => ({
  //   // height: props.active ? "90px" : "90px",
  //   height: "120px",
  //   width: props.active ? "100px" : "100px",
  //   borderRadius: "4px",

  //   // [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]: {
  //   //   height: props.active ? "300px" : "180px",
  //   //   width: props.active ? "200px" : "150px",
  //   // },
  // }));

  return (
    <>
      {/* -----------mobile */}
      <Box
        onClick={props.handleClick}
        sx={{
          flex: "0 0 auto",
          // border: "1px solid blue",
          // height: props.active && "63vh",
          // height: "150px",
          width: "fit-content",
          marginRight: "9px",
          backgroundColor: props.active && colors.goldAccent[100],
          borderLeft: props.active && "1px solid white",
          padding: props.active && "0.5rem",

          [`@media screen and (min-width: ${theme.breakpoints.values.sm}px)`]: {
            display: "none",
          },
        }}
      >
        {/* PROJECT IMAGE */}
        <Box
          sx={{
            // flex: 5,
          
            borderRadius: "4px",
            boxShadow: "3px 6px 17px rgba(0,0,0,.3)",
            // backgroundColor: "rgba(0,0,0,.3)",
            // background: `url(${props.img})`,
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "120px",
            width: "100px",
            background: `url(${props.img})`,
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // height: 380,
            // border: "1px solid black",
          }}
        >
          {/* <StyledImgMobile
            src={props.img}
            alt="icon"
            loading="lazy"
            decoding="async"
            active={props.active}
            style={
              {
                // height: props.active ? "480px" :  "220px",
                // width: props.active ?  "350px" :  "180px",
                // borderRadius: "4px",
                // [`@media screen and (max-width: 600px)`]:
                // {
                //   height: "300px" :  "180px",
                //   width: "200px" :  "150px",
                // },
              }
            }
          /> */}
        </Box>
      </Box>

      {/* ----------big screens */}
      <Box
        onClick={props.handleClick}
        key={props.key}
        sx={{
          flex: "0 0 auto",
          // border: "1px solid blue",
          width: "fit-content",
          marginRight: "2rem",
          position: "relative",

          [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]: {
            display: "none",
          },
        }}
      >
        {/* PROJECT NUMBER */}
        <Box
          sx={{
            display: props.active ? "block" : "none",
            position: "absolute",
            top: "-0",
            left: "-5rem",
          }}
        >
          <Typography variant="smDisplay" fontWeight={300}>
            {props.index ? `0${props.index}` : ""}
          </Typography>
        </Box>

        {/* DESCRIPTION & INFO */}
        <Stack
          justifyContent=""
          sx={{
            minHeight: { xs: 100, md: 200 },
            width: props.active ? "380px" : "",
            // border: "1px solid blue"
            display: props.active ? "flex" : "none",
            position: "absolute",
            top: 0,
            right: "-24rem",
          }}
        >
          <Typography variant="h4">
            {props.title ? <>{props.title}</> : "Admin Dashboard"}
          </Typography>
          <Typography variant="h7">{props.desc}</Typography>
        </Stack>

        {/* PROJECT IMAGE */}
        {/* <a href={props.link} target="_parent"> */}
        <Box
          sx={{
            // flex: 5,
            borderRadius: "4px",
            boxShadow: "3px 6px 17px rgba(0,0,0,.3)",
            // backgroundColor: "rgba(0,0,0,.3)",
            // background: `url(${props.img})`,
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: props.active ? '480px' : "120px",
            width: props.active ? '350px' : "100px",
            background: `url(${props.img})`,
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            // height: 380,
            // border: "1px solid black",
          }}
        >
          {/* <StyledImg
            src={props.img}
            alt="icon"
            loading="lazy"
            decoding="async"
            active={props.active}
            style={
              {
                // height: props.active ? "480px" :  "220px",
                // width: props.active ?  "350px" :  "180px",
                // borderRadius: "4px",
                // [`@media screen and (max-width: 600px)`]:
                // {
                //   height: "300px" :  "180px",
                //   width: "200px" :  "150px",
                // },
              }
            }
          /> */}
        </Box>
        {/* </a> */}
      </Box>
    </>
  );
}

// --------------------------------------------
const DisplayMobileProject = (props) => {
  const { title, img, desc, link } = props.data;

  return (
    <Stack spacing={2} sx={{ width: "100%", height: "100%" }} p={1}>
      <Box
        sx={{
          height: "185px",
          border: `1px solid ${colors.grey[800]}`,
          background: `url(${img})`,
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {/* <img src={img} alt={title} style={{height: "150px", width: '100%'}} /> */}
      </Box>
     <Stack direction='row' justifyContent='space-between' alignItems='center'>
     <Typography variant="mdText">{title}</Typography>
     <a href={link} target="_blank" rel="noreferrer"><OpenInNewRoundedIcon/></a>
     </Stack>
      <Typography variant="xsText">{desc}</Typography>
      <Typography></Typography>
      <Typography></Typography>
    </Stack>
  );
};
