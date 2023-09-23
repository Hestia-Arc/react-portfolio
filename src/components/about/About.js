import React, { useState } from "react";
import picture from "../../images/image2.jpg";
import { Avatar, Box, styled, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";

const AboutBox = styled(Box)({
  position: "relative",

  a: {
    textDecoration: "none",
    color: "black",
  },
});

const NavBox = styled(Box)({
  padding: "10px 0",
  display: "flex",
  justifyContent: 'center',
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
  fontSize: 18,
});

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
            height: scrollActive ? {xs: '70px', sm: "90px"} : "",
          }}
        >
          <Stack direction="row" spacing={4}>
            <Link to="../">
              <Typography variant="h6">Home</Typography>
            </Link>

            <Link to="../project">
              <Typography variant="h6">Portfolio</Typography>
            </Link>

            <Link to="../contact">
              <Typography variant="h6">Contact</Typography>
            </Link>
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
              direction={{xs:'column-reverse', sm: "row"}}
              justifyContent="space-between"
              spacing={2}
              alignItems="center"
              sx={{
                minHeight: '20rem',
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
                    width: {xs: '100%', sm: "60%"},
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
                    quality products and services{" "}
                  </TextBox>
                  <TextBox>
                    {" "}
                    Eager to obtain an internship role where I can apply my
                    developing skills and contribute to the company's reputation
                    while gaining more experience.
                  </TextBox>
                </Stack>
              </Box>

              {/* ==================== */}
              {/* AVATAR */}
              <Stack
                alignItems={{xs: 'center',sm: "flex-end"}}
                spacing={8}
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
                <Stack
                  spacing={2}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  sx={{
                    height: "50px",
                    width: "100%",
                    border: "2px solid #ebebeb",
                    borderRadius: "10px",
                    p: "0px 15px",
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
              </Stack>
            </Stack>
          </Stack>

          {/* -------------------------------------------------- */}

          {/* SKILLS */}
          <Box>
            <Typography variant="h4" sx={{ borderBottom: "1px solid #ebebeb" }}>
              Skills
            </Typography>

            <Box
              sx={{
                height: 400,
                border: "1px solid #ebebeb",
                borderRadius: "10px",
                margin: "20px 0",
              }}
            ></Box>
          </Box>

          {/*EXPERIENCE  */}
          <Box sx={{marginBottom: 10}}>
            <Typography variant="h4" sx={{ borderBottom: "1px solid #ebebeb" }}>
              Experiences
            </Typography>

            <Box
              sx={{
                height: 400,
                border: "1px solid #ebebeb",
                borderRadius: "10px",
                margin: "20px 0",
              }}
            >
              <Box>
                <div>Huygensoft Limited</div>
                <p>2022 - Till Date</p>
                <p>Front-end Web Developer</p>

                <p>
                  I’m a reliable, passionate, enthusiast developer and genuinely
                  interested in tech. <br />
                  Ready to bring your ideas to life. <br />
                  Keen to learn new technologies to develop quality and valuable
                  products..
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      </AboutBox>
    </>
  );
}
