import React, { useState } from "react";
import picture from "../../images/image2.jpg";
import { Avatar, Box, styled, Stack, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import CV from "../../EstherCV.pdf";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";

const AboutBox = styled(Box)({
  position: "relative",

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

const NavBox = styled(Box)({
  padding: "10px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "sticky",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999,
  background: "#fff",
  borderBottom: "1px solid #ebebeb",

  a: {
    textDecoration: "none",
    color: "black",
  },
});

const TextBox = styled(Box)({
  fontSize: 20,
  fontFamily: 'Fredoka',
  fontWeight: 300,
  lineHeight: '1.8rem'

});

const SkillBox = (props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <TaskAltRoundedIcon color="blue" />
      <Typography variant="h5" sx={{ marginLeft: "5px" }}>
        {props.name}
      </Typography>
    </Box>
  );
};

export default function About() {
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
    <>
      <AboutBox>
        {/* --------------------------------------- */}
        {/* NAVIGATION */}
        {/* --------------------------------------- */}
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

            <Link to="../project">
              <Typography variant="h6">Portfolio</Typography>
            </Link>

            {/* <Link to="../contact">
              <Typography variant="h6">Contact</Typography>
            </Link> */}
          </Stack>
        </NavBox>

        {/* --------------------------------------- */}
        {/* ABOUT */}
        {/* --------------------------------------- */}
        <Box>
          {/*MEET ME------------------------ */}
          <Stack
            spacing={5}
            sx={{
              margin: "60px 0",
              // : "1px solid black"
            }}
          >
            {/* ==================== */}
            {/* TITLE */}
            <Stack alignItems="flex-end" spacing={0.5}>
              <Typography variant="h3">Meet me</Typography>
              {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
              <Typography>Creativity. Reliability. Competent.</Typography>
            </Stack>

            <Stack
              direction={{ xs: "column-reverse", sm: "row" }}
              justifyContent="space-between"
              spacing={2}
              alignItems="center"
              sx={{
                minHeight: "20rem",
                //  border: "1px solid black"
                borderTop: "1px solid black",
              }}
            >
              {/* ==================== */}
              {/* ABOUT CONTENT */}
              <Box
                sx={{
                  flex: 6,
                  // border: "1px solid black",
                  display: "flex",
                }}
              >
                <Stack
                  spacing={3}
                  sx={{
                    border: "solid 1px #ebebeb",
                    boxShadow: "2px 6px 12px rgba(0,0,0,.1)",
                    padding: 4,
                    width: { xs: "100%", sm: "60%" },
                  }}
                >
                  <TextBox>
                    I am an avid learner who is genuinely interested in
                    technology and passionate about bringing digital experiences
                    to life.
                  </TextBox>
                  <TextBox>
                    Keen to evaluate and learn new technologies, collaborative
                    with great communication skills. Focused on developing high
                    quality products and services.{" "}
                  </TextBox>
                  <TextBox></TextBox>
                </Stack>
              </Box>

              {/* ==================== */}
              {/* AVATAR */}
              <Stack
                alignItems={{ xs: "center" }}
                spacing={6}
                sx={{
                  flex: 2,
                  paddingTop: 5,
                  // border: "1px solid black",
                }}
              >
                <Avatar
                  src={picture}
                  alt="Developer's"
                  sx={{ width: 220, height: 250 }}
                  loading="lazy"
                />

                <Stack spacing={1} alignItems="center" sx={{ width: "100%" }}>
                  <Stack
                    spacing={2}
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    sx={{
                      height: "50px",
                      width: "100%",
                      border: "2px solid #ebebeb",
                      borderRadius: "10px",
                      // p: "0px 15px",
                    }}
                  >
                    <span>
                      <a href="https://github.com/Hestia-Arc" target="blank">
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
                      <a href="https://twitter.com/arc_hestia00" target="blank">
                        <TwitterIcon />
                      </a>
                    </span>
                    <span>
                      <a href="mailto:hestia.dev005@gmail.com">
                        <MarkEmailUnreadRoundedIcon />
                      </a>
                    </span>
                  </Stack>
                  <a href={CV} download="Esther's Cv" style={{ width: "100%" }}>
                    <Button
                      variant="contained"
                      startIcon={<ArticleRoundedIcon />}
                      sx={{ width: "100%", background: "#d32f2f" }}
                    >
                      Resume
                    </Button>
                  </a>
                </Stack>
              </Stack>
            </Stack>
          </Stack>

          {/* -------------------------------------------------- */}

          {/* SKILLS */}
          <Box>
            <Typography variant="h3" sx={{ borderBottom: "1px solid #ebebeb" }}>
              Skills
            </Typography>

            <Box
              sx={{
                minHeight: 400,
                // border: "1px solid #ebebeb",
                borderRadius: "10px",
                margin: "20px 0",
              }}
            >
              <Stack spacing={3}>
                <SkillBox name="HTML, CSS, and Javascript" />
                <SkillBox name="CSS Preprocessors" />
                <SkillBox name="CSS and JS frameworks" />
                <SkillBox name="Version Control" />
                <SkillBox name="Responsive Web design" />
              </Stack>
            </Box>
          </Box>

          {/*EXPERIENCE  */}
          <Box sx={{ marginBottom: 10 }}>
            <Typography variant="h3" sx={{ borderBottom: "1px solid #ebebeb" }}>
              Experiences
            </Typography>

            <Box
              sx={{
                minHeight: 400,
                // border: "1px solid #ebebeb",
                borderRadius: "10px",
                margin: "20px 0",
              }}
            >
              <Stack spacing={2}>
                <Typography variant="h5" sx={{ fontWeight: 600 }}>
                  Huygensoft Limited
                </Typography>
                <Typography>2022 - Till Date</Typography>
                <Typography variant="h6">
                  <i>Front-end Web Developer</i>
                </Typography>

                <Typography variant="h6" sx={{fontWeight: 300}}>
                  Contributed to the development of client-side web applications <br/>
                  using Reactjs and other Frontend technologies.
                </Typography>
                <ul style={{fontFamily: 'Fredoka', fontSize: 18, fontWeight: 300}}>
                  <li>
                    Implemented responsive designs on multiple projects <br/>
                    resulting in improved user experience and engagement.
                  </li>

                  <li> Implemented dynamic and interactive pages.</li>
                  <li>Utilization of advanced tools for development.</li>
                </ul>
              </Stack>
            </Box>
          </Box>
        </Box>
      </AboutBox>
    </>
  );
}
