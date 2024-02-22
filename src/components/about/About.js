import React, { useState } from "react";
import picture from "../../images/image2.jpg";
import {
  Avatar,
  Box,
  styled,
  Stack,
  Typography,
  Button,
  useTheme,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import CV from "../../data/Resume-Afolabi Esther.pdf";
import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import Footer from "../Footer";
import darkbg from "../../data/c-bg.png";
import { tokens } from "../../theme";
import { PaddedBox } from "../../UI/pages";

const AboutBox = styled(Box)((theme) => ({
  position: "relative",
  minHeight: "50rem",
  background: "#ccc",
  backgroundImage: `linear-gradient(to right, rgba(1,1,2, 0.5), rgba(1,1,3, 0.6)), url(${darkbg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  a: {
    textDecoration: "none",
    color: "grey",
    transition: "transform 0.5s",

    "&:hover": {
      color: "#d32f2f",
      transform: "translateY(-5px)",
    },
  },
}));

const NavBox = styled(Box)({
  padding: "10px 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "sticky",
  top: "-2px",
  left: 0,
  right: 0,
  zIndex: 999,
  background: "#555",
});

const TextBox = styled(Typography)({
  // fontSize: 20,
  // fontFamily: "Fredoka",
  // fontWeight: 300,
  // lineHeight: "1.8rem",
});

const SkillBox = (props) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center", color: "#fff" }}>
      <TaskAltRoundedIcon color="blue" />
      <Typography variant="h5" sx={{ marginLeft: "5px" }}>
        {props.name}
      </Typography>
    </Box>
  );
};

export default function About() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
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
      <AboutBox sx={{ color: colors.grey[200] }}>
        {/* --------------------------------------- */}
        {/* NAVIGATION */}
        {/* --------------------------------------- */}
        <NavBox
          sx={{
            background: `linear-gradient(to right,rgba(51,53,57, 0.5), rgba(156,163,175, 0.3), rgba(166,201,150, 0.4)), url(${darkbg})`,
            boxShadow: scrollActive ? "0px 15px 10px -15px #111" : "",
            height: scrollActive
              ? { xs: "71px", sm: "90px" }
              : { xs: "70px", sm: "70px" },
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

            <Link to="../project">
              <Typography variant="smText">Portfolio</Typography>
            </Link>

            {/* <Link to="../contact">
              <Typography variant="h6">Contact</Typography>
            </Link> */}
          </Stack>
        </NavBox>

        <PaddedBox>
          {/* --------------------------------------- */}
          {/* ABOUT */}
          {/* --------------------------------------- */}
          <Box>
            {/*MEET ME------------------------ */}
            <Stack
              spacing={5}
              sx={{
                padding: "60px 0",
                // : "1px solid black"
              }}
            >
              {/* ==================== */}
              {/* TITLE */}
              <Stack alignItems="flex-end" spacing={0.5}>
                <Typography variant="xsDisplay">Meet me</Typography>
                {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
                <Typography variant="smText" sx={{ color: colors.grey[500] }}>
                  Creativity. Reliability. Competent.
                </Typography>
              </Stack>

              <Stack
                direction={{ xs: "column-reverse", sm: "row" }}
                justifyContent="space-between"
                spacing={2}
                alignItems="center"
                sx={{
                  minHeight: "20rem",
                  //  border: "1px solid black"
                  borderTop: `0.5px solid ${colors.grey[800]}`,
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
                      border: `solid 1px ${colors.grey[900]}`,
                      boxShadow: "2px 6px 12px rgba(0,0,0,.1)",
                      // padding: 4,
                      width: { xs: "100%", sm: "60%" },
                    }}
                  >
                    <TextBox variant="baseText">
                      {" "}
                      As a driven and detail-oriented Frontend Developer, I
                      leverage my experience in building user-friendly web
                      interfaces that drive results.
                    </TextBox>

                    <TextBox variant="baseText">
                      Adept in building modern, responsive and functional UIs
                      using React, MUI/Chakra UI, tailored to specific user
                      needs, ensuring an accessible and seamless experience
                      across all devices.
                    </TextBox>

                    <TextBox variant="baseText">
                      {" "}
                      <TaskAltRoundedIcon color="blue" /> Effective time
                      management{" "}
                    </TextBox>

                    <TextBox variant="baseText">
                      {" "}
                      <TaskAltRoundedIcon color="blue" /> Writes clean &
                      maintainable code.
                    </TextBox>

                    <TextBox variant="baseText">
                      <TaskAltRoundedIcon />A passion for exploring emerging
                      technologies.
                    </TextBox>

                    <Stack>
                      More in my toolbelt includes; <br />
                      <TextBox>-HTML,CSS3, JavaScript.</TextBox>
                      <TextBox variant="baseText">
                        {" "}
                        -CSS Preprocessor/framework (SASS & Bootstrap){" "}
                      </TextBox>
                      <TextBox variant="baseText">
                        {" "}
                        -Version control system (Git)
                      </TextBox>
                      <TextBox variant="baseText"> -React Query </TextBox>
                      <TextBox variant="baseText">
                        {" "}
                        -Testing framework (Jest) for code quality assurance.
                      </TextBox>
                      <TextBox variant="baseText">
                        {" "}
                        -User-centric design principles.
                      </TextBox>
                      <TextBox variant="baseText">
                        I thrive in collaborative environments where I can learn
                        from others and continuously challenge myself.
                      </TextBox>
                      <TextBox variant="baseText">
                        Seeking exciting frontend challenges! Share your current
                        project's UI pain points and let's brainstorm solutions
                        together. Don't hesitate to reach out - I'm happy to
                        help!
                      </TextBox>
                    </Stack>

                    <TextBox variant="baseText">
                      I am an avid learner who is genuinely interested in
                      technology and passionate about bringing digital
                      experiences to life.
                    </TextBox>
                    <TextBox variant="baseText">
                      Keen to evaluate and learn new technologies, collaborative
                      with great communication skills. Focused on developing
                      high quality products and services.{" "}
                    </TextBox>
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
                        // border: `1px solid ${colors.grey[900]}`,
                        // borderRadius: "6px",
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
                        <a
                          href="https://twitter.com/arc_hestia00"
                          target="blank"
                        >
                          <TwitterIcon />
                        </a>
                      </span>
                      <span>
                        <a href="mailto:hestia.dev005@gmail.com">
                          <MarkEmailUnreadRoundedIcon />
                        </a>
                      </span>
                    </Stack>
                    <a
                      href={CV}
                      download="Esther's Cv"
                      style={{ width: "100%" }}
                    >
                      <Button
                        variant="contained"
                        startIcon={<ArticleRoundedIcon />}
                        sx={{
                          width: "100%",
                          background: `linear-gradient(to right,rgba(51,53,57, 0.5), rgba(156,163,175, 0.3), rgba(166,201,150, 0.4)), url(${darkbg})`,
                          border: `0.5px solid ${colors.grey[800]}`,
                        }}
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
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  height: "500px",
                  width: "500px",
                  // border: "1px solid white",
                }}
                p={1}
              >
                <Grid
                  container
                  columnSpacing={2}
                  columns={12}
                  justifyContent="center"
                  sx={{height: '100%'}}
                >

                  {/* item1 */}
                  <Grid item xs={4}>
                    <Box
                      sx={{ height: "100%", border: "1px solid white" }}
                    ></Box>
                  </Grid>

                  {/* item2 */}
                  <Grid item xs={4}>
                    <Box
                      sx={{ height: "20px", border: "1px solid white" }}
                    ></Box>
                  </Grid>

                  {/* item3 */}
                  <Grid item xs={4}>
                    <Box
                      sx={{ height: "20px", border: "1px solid white" }}
                    ></Box>
                  </Grid>
                </Grid>
              </Box>

              <Typography
                variant="xsDisplay"
                // sx={{ borderBottom: "1px solid #ebebeb" }}
              >
                Skills
              </Typography>

              <Box
                sx={{
                  minHeight: 400,
                  // border: "1px solid #ebebeb",
                  borderRadius: "10px",
                  marginTop: "20px ",
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
            <Box
              sx={{
                paddingBottom: 10,
              }}
            >
              <Typography
                variant="xsDisplay"
                sx={{ borderBottom: "1px solid #ebebeb" }}
              >
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

                  <Typography variant="h6" sx={{ fontWeight: 300 }}>
                    Contributed to the development of client-side web
                    applications <br />
                    using Reactjs and other Frontend technologies.
                  </Typography>
                  <ul
                    style={{
                      fontFamily: "Fredoka",
                      fontSize: 18,
                      fontWeight: 300,
                    }}
                  >
                    <li>
                      Implemented responsive designs on multiple projects <br />
                      resulting in improved user experience and engagement.
                    </li>

                    <li> Implemented dynamic and interactive pages.</li>
                    <li>Utilization of advanced tools for development.</li>
                  </ul>
                </Stack>
              </Box>
            </Box>
          </Box>

          <Footer />
        </PaddedBox>
      </AboutBox>
    </>
  );
}
