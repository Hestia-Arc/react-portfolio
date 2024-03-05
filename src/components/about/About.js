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
// import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import Footer from "../Footer";
import darkbg from "../../data/c-bg.png";
import { tokens } from "../../theme";
import { PaddedBox } from "../../UI/pages";
// import { PaddedBox } from "../../UI/pages";

const AboutBox = styled(Box)((props) => ({
  position: "relative",
  minHeight: "50rem",
  background: "#ccc",
  backgroundImage: `linear-gradient(to right, rgba(1,1,2, 0.5), rgba(1,1,3, 0.6)), url(${darkbg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  a: {
    textDecoration: "none",
    color: props.colors.grey[200],
    transition: "transform 0.5s",

    "&:hover": {
      color: props.colors.goldAccent[300],
      transform: "translateY(-3px)",
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
  width: "100%",
  // fontSize: 20,
  // fontFamily: "Fredoka",
  // fontWeight: 300,
  // lineHeight: "1.8rem",
});


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
      <AboutBox colors={colors} sx={{ color: colors.grey[200] }}>
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

              "&:hover": {
                color: colors.goldAccent[100],
                transform: "translateY(-5px)",
              },
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

        {/* --------------------------------------- */}
        {/* ABOUT */}
        {/* --------------------------------------- */}
        <PaddedBox mb={5}>
          <Stack
            direction={{ xs: "column-reverse", sm: "row" }}
            sx={
              {
                // border: "1px solid white",
              }
            }
          >
            {/* ==================== */}
            {/* ABOUT CONTENT */}
            <Box
              sx={{
                flex: 2,
                // border: "1px solid black",
              }}
            >
              {/* --------1 */}
              <Stack
                direction={{xs: "column",sm:"row"}}
                spacing={{xs:4, sm: 2, md:2}}
                sx={{
                  // border: `solid 1px ${colors.grey[900]}`,
                  boxShadow: "2px 6px 12px rgba(0,0,0,.1)",
                  color: colors.grey[400],

                  // padding: 4,
                  // width: { xs: "100%", sm: "60%" },
                }}
                mt={{xs: 3,sm: 13.5}}
              >
                <TextBox variant="baseText">
                  {" "}
                  As a driven and detail-oriented Frontend Developer, I leverage
                  my experience in building user-friendly web interfaces that
                  drive results.
                </TextBox>

                <TextBox variant="baseText">
                  Adept in building modern, responsive and functional UIs using
                  React, MUI, tailored to specific user needs,
                  ensuring an accessible and seamless experience across all
                  devices.
                </TextBox>
              </Stack>

              {/* ---------2 */}
              <Stack
                direction={{xs: "column",sm:"row"}}
                spacing={{xs:4, sm: 2, md:2}}
                sx={{
                  // border: `solid 1px ${colors.grey[900]}`,
                  boxShadow: "2px 6px 12px rgba(0,0,0,.1)",
                  color: colors.grey[400],

                  // padding: 4,
                  // width: { xs: "100%", sm: "60%" },
                }}
                mt={3}
              >
                <Stack
                  sx={{
                    height: "280px",
                    width: "100%",
                    backgroundColor: colors.grey[900],
                    // color: colors.grey[900],
                    // opacity: 0.5
                  }}
                  p={2}
                >
                  <TextBox variant="baseText">- Writes clean code.</TextBox>
                  <TextBox variant="baseText">- Adopt best practices and design principles.</TextBox>
                  <TextBox variant="baseText">- User-centric design principles.</TextBox>
                  <TextBox variant="baseText"></TextBox>
                </Stack>

                <Stack
                  sx={{
                    height: "280px",
                    width: "100%",
                    backgroundColor: colors.grey[400],
                    color: colors.grey[900],

                    // opacity: 0.5
                  }}
                  p={2}
                >
                  <TextBox variant="baseText">
                    - Great communication skill
                  </TextBox>
                  <TextBox variant="baseText">
                    - Effective time management
                  </TextBox>
                  <TextBox variant="baseText">- Great analytical skill</TextBox>
                  <TextBox variant="baseText">- collaborative
                  with great communication skills</TextBox>
                  <TextBox variant="baseText"></TextBox>
                </Stack>

                {/* <TextBox variant="baseText">
                  {" "}
                  <TaskAltRoundedIcon color="blue" /> Effective time management{" "}
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
                    together. Don't hesitate to reach out - I'm happy to help!
                  </TextBox>
                </Stack>

                <TextBox variant="baseText">
                  I am an avid learner who is genuinely interested in technology
                  and passionate about bringing digital experiences to life.
                </TextBox>
                <TextBox variant="baseText">
                  Keen to evaluate and learn new technologies, collaborative
                  with great communication skills. Focused on developing high
                  quality products and services.{" "}
                </TextBox> */}
              </Stack>
            </Box>

            {/* ==================== */}
            {/* AVATAR */}
            <Stack
              alignItems={{xs: "center",sm:"flex-end"}}
              sx={{
                flex: 1,
                // border: "1px solid white",
              }}
            >
              {/* ==================== */}
              {/* TITLE */}
              <Stack
                alignItems="flex-end"
                spacing={0.99}
                mt={6}
                pb={1}
                mb={1}
                sx={{width: "100%", borderBottom: `0.5px solid ${colors.grey[800]}` }}
              >
                <Typography variant="xsDisplay">Meet me</Typography>
                {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
                <Typography variant="smText" sx={{ color: colors.goldAccent[400] }}>
                  Creativity. Reliability. Competent.
                </Typography>
              </Stack>

              {/* ------------------- */}
              <Avatar
                src={picture}
                variant="square"
                alt="Developer's"
                sx={{ width: {xs: 310, sm: 195,md: 231,lg:300}, height: {xs: 320, sm: 233, md: 269,lg: 320 }}}
                loading="lazy"
              />

              <Stack
                spacing={1}
                alignItems="center"
                sx={{ width: { xs: "100%", sm: 195,md: 231,lg:300} }}
                mt={2}
              >
                <a href={CV} download="Esther's Cv" style={{ width: "100%" }}>
                  <Button
                    variant="contained"
                    startIcon={<ArticleRoundedIcon />}
                    sx={{
                      width: "100%",
                      background: `linear-gradient(to right,rgba(51,53,57, 0.5), rgba(156,163,175, 0.3), rgba(166,201,150, 0.4)), url(${darkbg})`,
                      border: `0.5px solid ${colors.grey[800]}`,
                    }}
                  >
                    Download cv
                  </Button>
                </a>
                <Stack
                  spacing={{ xs: 1, sm: 2 }}
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
        </PaddedBox>

        {/* --------------------------------------- */}
        {/* SKILLS */}
        <PaddedBox mb={5}>
          <Stack direction={{ xs: "column", sm: "row" }}>
            {/* BOX-1 */}
            <Stack
              spacing={4}
              sx={{
                flex: 1,
                minHeight: { xs: "fit-content", sm: 400 },
                // border: "1px solid #ebebeb",
                borderRadius: "10px",
                marginTop: "20px ",
              }}
            >
              <Typography
                variant="xsDisplay"
                // sx={{ borderBottom: "1px solid #ebebeb" }}
              >
                Skills
              </Typography>

              <Box sx={{ width: { xs: "100%", sm: "200px",md: "325px",lg:"400px" }, color: colors.grey[400] }}>
                <Typography
                  variant="smText"
                  // sx={{ borderBottom: "1px solid #ebebeb" }}
                >
                  Check out skills in my toolkit for developing intuitive user interfaces and
                  bringing digital experiences to life.
                  I am an avid learner who is genuinely interested in technology,
                  keen to evaluate and learn new technologies. 
                  
                </Typography>
              </Box>
            </Stack>

            {/* BOX-2 */}
            <Box
              sx={{
                flex: {xs:1, sm: 2, md: 1},
                display: { xs: "flex", sm: "block" },
                overflowX: "auto",
                borderBottom: {
                  xs: `1px solid ${colors.grey[800]}`,
                  sm: "none",
                },
                
                // position: "absolute",
                // top: 0,
                // right: 0,
                // height: "500px",
                // width: "500px",
                // border: "1px solid white",
              }}
              p={1}
              pt={8}
              ml={{sm:3, md:0}}
            >
              <Grid
                container
                // rowSpacing={2}
                // columnSpacing={2}
                columns={12}
                alignItems="flex-start"
                // justifyContent="center"
                sx={{
                  height: { xs: "324px", sm: "100%" },
                  width: { xs: "800px", sm: "100%" },
                }}
              >
                {/* row-1 */}
                <Grid item xs={12}>
                  <BrickDesignTwo tag1="Jest" tag2="Firebase" tag3="Vite" />
                </Grid>

                {/* row-2 */}
                <Grid item xs={12}>
                  <BrickDesignOne
                    tag1="React Query"
                    tag2="Git/GitHub"
                    tag3="Fetch API/ Axios"
                  />
                </Grid>

                {/* row-3 */}
                <Grid item xs={12}>
                  <BrickDesignTwo
                    tag1="ReactJS"
                    tag2="Typescript"
                    tag3="Material UI"
                  />
                </Grid>

                {/* row-4 */}
                <Grid item xs={12}>
                  <BrickDesignOne
                    tag1="TailwindCSS"
                    tag2="Bootstrap"
                    tag3="Responsive UI"
                    tag4="SASS"
                  />
                </Grid>

                {/* row-5 */}
                <Grid item xs={12}>
                  <BrickDesignTwo tag1="HTML" tag2="CSS" tag3="Javascript" />
                </Grid>
              </Grid>
            </Box>
          </Stack>
        </PaddedBox>

        {/* --------------------------------------- */}
        {/*EXPERIENCE  */}
        {/* ------------------------------------- */}
        <PaddedBox mb={5}>
          <Stack direction={{ xs: "column", sm: "row" }}>
            {/* BOX-1 */}
            <Stack
              spacing={4}
              sx={{
                flex: 1,
                minHeight: { xs: "fit-content", sm: 400 },
                // border: "1px solid #ebebeb",
                borderRadius: "10px",
                marginTop: "20px ",
              }}
            >
              <Typography
                variant="xsDisplay"
                // sx={{ borderBottom: "1px solid #ebebeb" }}
              >
                Experiences
              </Typography>

              <Box sx={{ width: { xs: "100%", sm: "200px",md: "325px",lg:"400px" }, color: colors.grey[400] }}>
                <Typography
                  variant="smText"
                  // sx={{ borderBottom: "1px solid #ebebeb" }}
                >
                 Where my skills meet purpose: a journey through places I've leveraged my skills.
                  {/* and contributing to
                  impactful projects. */}
                </Typography>
              </Box>
            </Stack>

            {/* BOX-2 */}
            <Box
              sx={{
                flex: {xs:1, sm: 2, md: 1},
                // position: "absolute",
                // top: 0,
                // right: 0,
                // height: "500px",
                // width: "500px",
                // border: "1px solid white",
              }}
              p={1}
              pt={8}
              ml={{sm:5, md:0}}
            >
              {/* exp 1 */}
              <Stack
                spacing={2}
                sx={{
                  borderBottom: `1px solid ${colors.grey[800]}`,
                  paddingBottom: 3,
                }}
              >
                <Typography variant="xxlText">Huygensoft Limited</Typography>
                <Stack>
                  <Typography>
                    Front-end Developer | Lagos, Nigeria | 2022 - present
                  </Typography>
                  <Stack direction='row' spacing={1}
                    sx={{ backgroundColor: colors.grey[900], padding: 1 }}
                  >
                    <HandymanRoundedIcon fontSize="small" color="primary" />
                    <Typography variant="smText" sx={{color: colors.grey[400]}}>HTML | CSS | SASS | ReactJS | React-Query | Firebase </Typography>
                  </Stack>
                </Stack>

                {/* -..... */}
                <Stack sx={{color: colors.grey[400]}}>
                  <Typography variant="smText">
                    - Contributed to the development of client-side web
                    applications <br />
                    using Reactjs and other Frontend technologies.
                  </Typography>
                  <Typography>
                    -Implemented responsive designs on multiple projects <br />
                    resulting in improved user experience and engagement.
                  </Typography>
                  <Typography>
                    -Implemented dynamic and interactive pages.
                  </Typography>
                  <Typography>
                    -Implemented dynamic and interactive pages.
                  </Typography>
                  {/* <Typography></Typography> */}
                  {/* <Typography></Typography> */}
                  {/* <Typography></Typography> */}
                  {/* <Typography></Typography> */}
                </Stack>
              </Stack>

              {/* exp 2 */}
              <Stack spacing={2} mt={5}>
                <Typography variant="xxlText">Zuri Internship HNGx</Typography>
                <Stack>
                  <Typography>
                    Front-end Development | Remote | Oct 2022
                  </Typography>
                  <Typography
                    sx={{ backgroundColor: colors.grey[900], padding: 1 }}
                  >
                    <HandymanRoundedIcon fontSize="small" color="primary" />
                  </Typography>
                </Stack>

                {/* -..... */}
                <Stack sx={{color: colors.grey[400]}}>
                  <Typography variant="smText">
                    - Contributed to the development of client-side web
                    applications <br />
                    using Reactjs and other Frontend technologies.
                  </Typography>
                  <Typography>
                    -Implemented responsive designs on multiple projects <br />
                    resulting in improved user experience and engagement.
                  </Typography>
                  <Typography>
                    -Implemented dynamic and interactive pages.
                  </Typography>
                  <Typography>
                    -Implemented dynamic and interactive pages.
                  </Typography>
                  {/* <Typography></Typography> */}
                  {/* <Typography></Typography> */}
                  {/* <Typography></Typography> */}
                  {/* <Typography></Typography> */}
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </PaddedBox>

        <Footer />
      </AboutBox>
    </>
  );
}

function BrickDesignOne({ tag1, tag2, tag3, tag4 }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const StyledBox = styled(Box)({
    border: `1px solid ${colors.goldAccent[800]}`,
    width: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  });

  return (
    <Stack
      direction="row"
      spacing={{xs:2, sm: 1, md:2}}
      sx={{
        height: "3rem",
        // border: "1px solid white"
      }}
    >
      <StyledBox>
        <Typography variant='smText'>{tag1}</Typography>
      </StyledBox>
      <StyledBox>
        <Typography variant='smText'>{tag2}</Typography>
      </StyledBox>
      <StyledBox>
        <Typography variant='smText'>{tag3}</Typography>
      </StyledBox>
      <Box
        sx={{
          border: `1px solid ${colors.grey[800]}`,
          width: "100px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant='smText'>{tag4}</Typography>
      </Box>
    </Stack>
  );
}

function BrickDesignTwo({ tag1, tag2, tag3 }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const StyledBox = styled(Box)({
    border: `1px solid ${colors.grey[700]}`,
    width: "150px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    
  });

  return (
    <Stack
      direction="row"
      spacing={{xs:2, sm: 1, md:2}}
      sx={{
        height: "3rem",
        // border: "1px solid white"
      }}
    >
      <Box
        sx={{
          border: `1px solid ${colors.grey[800]}`,
          borderLeft: "none",
          width: "40px",
        }}
      ></Box>
      <StyledBox>
        <Typography variant='smText'>{tag1}</Typography>
      </StyledBox>
      <StyledBox>
        <Typography variant='smText'>{tag2}</Typography>
      </StyledBox>
      <StyledBox>
        <Typography variant='smText'>{tag3}</Typography>
      </StyledBox>
      <Box
        sx={{
          border: `1px solid ${colors.grey[800]}`,
          borderRight: "none",
          width: "30px",
        }}
      ></Box>
    </Stack>
  );
}
