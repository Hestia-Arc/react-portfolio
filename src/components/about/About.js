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
  Skeleton,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import CV from "../../data/2Resume-Afolabi Esther.pdf";
// import TaskAltRoundedIcon from "@mui/icons-material/TaskAltRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import Footer from "../Footer";
import darkbg from "../../data/c-bg.png";
import { tokens } from "../../theme";
import { PaddedBox } from "../../UI/pages";
import Title from "../home/Title";
// import { PaddedBox } from "../../UI/pages";

const AboutBox = styled(Box)((props) => ({
  position: "relative",
  minHeight: "50rem",
  background: "#ccc",
  backgroundImage: `linear-gradient(to right, rgba(1,1,2, 0.3), rgba(1,1,3, 0.4)), url(${darkbg})`,
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
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimated(true);
    }, 2000);
  }, []);

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
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 4, sm: 2, md: 2 }}
                sx={{
                  // border: `solid 1px ${colors.grey[900]}`,
                  boxShadow: "2px 6px 12px rgba(0,0,0,.1)",
                  color: colors.grey[400],

                  // padding: 4,
                  // width: { xs: "100%", sm: "60%" },
                }}
                mt={{ xs: 3, sm: 13.5 }}
              >
                <TextBox variant="baseText">
                  {" "}
                  As a driven and detail-oriented Frontend Developer, I am
                  dedicated to building functional web solutions that deliver on
                  your specific needs. I leverage my experience in building
                  intuitive web interfaces that drive results.
                </TextBox>

                <TextBox variant="baseText">
                  Adept in building modern, responsive and functional UIs using
                  React, MUI, tailored to specific user needs, ensuring an
                  accessible and seamless experience across all devices.
                </TextBox>
              </Stack>

              {/* ---------2 */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 4, sm: 2, md: 2 }}
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
                    // height: "280px",
                    width: "100%",
                    backgroundColor: colors.grey[900],
                    border: `1px solid ${colors.grey[800]}`,
                    borderRadius: "3px",
                  }}
                  p={2}
                >
                  <TextBox variant="baseText">
                    - Writes clean and maintainable code.
                  </TextBox>
                  <TextBox variant="baseText">- Adopts best practices.</TextBox>
                  <TextBox variant="baseText">
                    - User-centric design principles.
                  </TextBox>
                  <TextBox variant="baseText">
                    - Security best practices.
                  </TextBox>

                  <TextBox variant="baseText">
                    - Performance optimization.
                  </TextBox>
                  {/* <TextBox variant="baseText">- Testing</TextBox> */}
                  <TextBox variant="baseText">
                    - Version control system (Git/Github)
                  </TextBox>
                  {/* <TextBox variant="baseText">- </TextBox> */}
                </Stack>

                {/* soft skills */}
                <Stack
                  sx={{
                    height: "fit-content",
                    width: "100%",
                    backgroundColor: colors.grey[400],
                    color: colors.grey[900],
                    border: `1px solid ${colors.grey[900]}`,
                    borderRadius: "3px",
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
                  <TextBox variant="baseText">
                    - Analytical mindset adept at identifying and resolving
                    frontend issues efficiently and independently.
                  </TextBox>
                  <TextBox variant="baseText">- Collaborative</TextBox>
                  <TextBox variant="baseText">- Adaptability</TextBox>
                  <TextBox variant="baseText">
                    - Creative problem solving{" "}
                  </TextBox>
                  <TextBox variant="baseText">
                    - Minimal supervision, maximum impact
                  </TextBox>

                  {/* <TextBox variant="baseText"></TextBox> */}
                </Stack>
              </Stack>

              {/* ---------3 */}
              <Stack
                spacing={2}
                mt={3}
                sx={{
                  color: colors.grey[400],
                }}
              >
                <Typography variant="baseText">
                  I am an avid learner who is constantly learning and evolving,
                  open to feedback and guidance to deliver the best possible
                  results.
                </Typography>

                <Typography variant="baseText">
                  <strong>P.S</strong>... I also bring a healthy dose of humor
                  😄 and enthusiasm to the table, making the development process
                  an enjoyable and productive experience for everyone involved.
                </Typography>
              </Stack>
            </Box>

            {/* ==================== */}
            {/* AVATAR */}
            <Stack
              alignItems={{ xs: "center", sm: "flex-end" }}
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
                sx={{
                  width: "100%",
                  borderBottom: `0.5px solid ${colors.grey[800]}`,
                }}
              >
                <Typography variant="xsDisplay">Meet me</Typography>
                {/* <Divider orientation="vertical" variant="middle" flexItem /> */}
                <Typography
                  variant="smText"
                  sx={{ color: colors.goldAccent[400] }}
                >
                  Creativity. Reliability. Competent.
                </Typography>
              </Stack>

              {/* ------------------- */}
              {isAnimated ? (
                <Avatar
                  src={picture}
                  variant="square"
                  alt="Developer's"
                  sx={{
                    width: { xs: 310, sm: 195, md: 231, lg: 300 },
                    height: { xs: 320, sm: 233, md: 269, lg: 320 },
                  }}
                  loading="lazy"
                />
              ) : (
                <Skeleton
                  variant="rounded"
                  sx={{
                    backgroundColor: colors.grey[700],
                    width: { xs: 310, sm: 195, md: 231, lg: 300 },
                    height: { xs: 320, sm: 233, md: 269, lg: 320 },
                  }}
                  // width={210} height={60}
                />
              )}

              <Stack
                spacing={1}
                alignItems="center"
                sx={{ width: { xs: "100%", sm: 195, md: 231, lg: 300 } }}
                mt={2}
              >
                <a href={CV} download="Esther's Cv" style={{ width: "100%" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<ArticleRoundedIcon />}
                    sx={{
                      width: "100%",
                      // background: `linear-gradient(to right,rgba(51,53,57, 0.5), rgba(156,163,175, 0.3), rgba(166,201,150, 0.4)), url(${darkbg})`,
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
        <PaddedBox mb={{xs: 8, sm: 5}}>
          <Title text="Skillsets" tag="Tools" />
          <Stack direction={{ xs: "column", sm: "row" }} gap={{ xs: 3}}>
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
              {/* <Typography
                variant="xsDisplay"
                // sx={{ borderBottom: "1px solid #ebebeb" }}
              >
                Skills
              </Typography> */}

              <Box
                sx={{
                  width: { xs: "100%", sm: "200px", md: "325px", lg: "400px" },
                  color: colors.grey[400],
                }}
              >
                <Typography
                  variant="smText"
                  // sx={{ borderBottom: "1px solid #ebebeb" }}
                >
                  Check out skills in my toolkit for developing intuitive user
                  interfaces and bringing digital experiences to life. I am an
                  avid learner who is genuinely interested in technology, keen
                  to evaluate and learn new technologies.
                </Typography>
              </Box>
            </Stack>

            {/* BOX-2 */}
            <Box
              sx={{
                flex: { xs: 1, sm: 2, md: 1 },
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
              // pt={8}
              ml={{ sm: 3, md: 0 }}
            >
              <Grid
                container
                // rowSpacing={2}
                // columnSpacing={2}
                columns={12}
                alignItems="flex-start"
                // justifyContent="center"
                sx={{
                  height: { xs: "376px", sm: "100%" },
                  width: { xs: "800px", sm: "100%" },
                }}
              >
                {/* row-1a */}
                <Grid item xs={12}>
                  <BrickDesignOne
                    tag1="Framer-Motion"
                    tag2="MongoDB"
                    tag3="Expressjs"
                    tag4="Nodejs"
                  />
                  {/* <BrickDesignTwo tag1="Postman" tag2="Firebase" tag3="Vite" /> */}
                </Grid>

                {/* row-1b */}
                <Grid item xs={12}>
                  <BrickDesignTwo tag1="Postman" tag2="Firebase" tag3="Vite" />
                </Grid>

                {/* row-2 */}
                <Grid item xs={12}>
                  <BrickDesignOne
                    tag1="React Query"
                    tag2="Git/GitHub"
                    tag3="Fetch API/ Axios"
                    tag4="Jest"
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
        <Title text="WorkPlaces" tag="Experiences" />

          <Stack direction={{ xs: "column", sm: "row" }} gap={{xs:3}}>
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
              {/* <Typography
                variant="xsDisplay"
                // sx={{ borderBottom: "1px solid #ebebeb" }}
              >
                Experiences
              </Typography> */}

              <Box
                sx={{
                  width: { xs: "100%", sm: "200px", md: "325px", lg: "400px" },
                  color: colors.grey[400],
                }}
              >
                <Typography
                  variant="smText"
                  // sx={{ borderBottom: "1px solid #ebebeb" }}
                >
                  Where my skills meet purpose: a journey through places I've
                  leveraged my skills.
                  {/* and contributing to
                  impactful projects. */}
                </Typography>
              </Box>
            </Stack>

            {/* BOX-2 */}
            <Box
              sx={{
                flex: { xs: 1, sm: 2, md: 1 },
                // position: "absolute",
                // top: 0,
                // right: 0,
                // height: "500px",
                // width: "500px",
                // border: "1px solid white",
              }}
              p={1}
              // pt={8}
              ml={{ sm: 5, md: 0 }}
            >
              {/* exp 1 */}
              <Stack
                spacing={2}
                sx={{
                  borderBottom: `1px solid ${colors.grey[800]}`,
                  paddingBottom: 3,
                }}
              >
                <Typography variant="xxlText">
                  Netware Innovative Labs
                </Typography>
                <Stack>
                  <Typography>
                    Front-end Developer | Remote | Apr 2024 -
                    present
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ backgroundColor: colors.grey[900], padding: 1 }}
                  >
                    <HandymanRoundedIcon fontSize="small" color="primary" />
                    <Typography
                      variant="smText"
                      sx={{ color: colors.grey[400] }}
                    >
                      HTML | CSS | Material UI | TailwindCSS | ReactJS | Axios |
                      ReduxToolkits | Git/GitHub | APIs
                    </Typography>
                  </Stack>
                </Stack>

                {/* -..... */}
                <Stack spacing={1} sx={{ color: colors.grey[400] }}>
                  <Typography variant="smText">
                    - Work with UI designer to transform high-fidelity Figma
                    designs into responsive and functional user interfaces.
                  </Typography>
                  <Typography variant="smText">
                    - Working with Frontend Lead and contributing to the
                    development of client-side, building reusable and accessible
                    user interface components with TailwindCSS and Material UI
                    (MUI) library for maintainability and scalability.
                  </Typography>
                  <Typography variant="smText">
                    - Working with Frontend Lead in integrating APIs and using
                    ReduxToolkits for efficient global management of data across
                    the code, ensuring proper separation of concerns within the
                    help desk <a href="https://reydesk.com" target="_blank" style={{textDecoration: "underline"}}>(Reydesk)</a> application.
                  </Typography>

                  <Typography variant="smText">
                    - Engage in weekly demo sessions to iron out issues and
                    present tasks assigned.
                  </Typography>
                </Stack>
              </Stack>

              {/* exp 2 */}
              <Stack
                spacing={2}
                mt={5}
                sx={{
                  borderBottom: `1px solid ${colors.grey[800]}`,
                  paddingBottom: 3,
                }}
              >
                <Typography variant="xxlText">Huygensoft Limited</Typography>
                <Stack>
                  <Typography>
                    Front-end Developer | Lagos, Nigeria (Remote) | Oct 2022 -
                    Jan 2024
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ backgroundColor: colors.grey[900], padding: 1 }}
                  >
                    <HandymanRoundedIcon fontSize="small" color="primary" />
                    <Typography
                      variant="smText"
                      sx={{ color: colors.grey[400] }}
                    >
                      HTML | CSS | SASS | Bootstrap | Material UI | ReactJS |
                      ContextAPI | React-Query | Firebase | Git/GitHub
                    </Typography>
                  </Stack>
                </Stack>

                {/* -..... */}
                <Stack spacing={1} sx={{ color: colors.grey[400] }}>
                  <Typography variant="smText">
                    - Work with UI designer to transform high-fidelity Figma
                    designs into responsive and functional user interfaces.
                  </Typography>
                  <Typography variant="smText">
                    - Contributed to the development of client-side web
                    applications and websites using HTML, CSS, JavaScript,
                    Reactjs and other Frontend technologies.
                  </Typography>
                  <Typography variant="smText">
                    - Built reusable and accessible user interface components
                    with Material UI (MUI) library for maintainability and
                    scalability.
                  </Typography>
                  <Typography variant="smText">
                    - Integrated Redux Toolkit/Context API for efficient global
                    management of data across the code, ensuring proper
                    separation of concerns within the application.
                  </Typography>
                  <Typography variant="smText">
                    - Interact with backend APIs from the front end using Fetch
                    API and React query (Tanstack).
                  </Typography>
                  <Typography variant="smText">
                    - Engage in weekly demo sessions to iron out issues and
                    present tasks assigned.
                  </Typography>
                  {/* <Typography>
                    -Implemented responsive designs on multiple projects <br />
                    resulting in improved user experience and engagement.
                  </Typography> */}

                  {/* <Typography variant="smText"></Typography>
                  <Typography variant="smText"></Typography> */}
                </Stack>
              </Stack>

              {/* exp 3 */}
              <Stack spacing={2} mt={5}>
                <Typography variant="xxlText">Zuri Internship HNGx</Typography>
                <Stack>
                  <Typography>
                    Front-end Development | Remote | Sept 2022
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ backgroundColor: colors.grey[900], padding: 1 }}
                  >
                    <HandymanRoundedIcon fontSize="small" color="primary" />
                    <Typography
                      variant="smText"
                      sx={{ color: colors.grey[400] }}
                    >
                      HTML | CSS | JavaScript(ReactJS) | Material UI | Git |
                      GitHub | Fetch API | API | Vercel
                    </Typography>
                  </Stack>
                </Stack>

                {/* -..... */}
                <Stack spacing={1} sx={{ color: colors.grey[400] }}>
                  <Typography variant="smText">
                    - Participated and completed tasks given.
                  </Typography>
                  <Typography variant="smText">
                    - Worked with backend developers to building a chrome
                    extension(HelpMeOut)
                  </Typography>
                  {/* <Typography variant="smText"></Typography> */}
                  {/* <Typography variant="smText"></Typography> */}
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </PaddedBox>

         {/* --------------------------------------- */}
        {/*CERTIFICATIONS  */}
        {/* ------------------------------------- */}
        <PaddedBox mb={5}>

        <Title text="Certifications" tag="Learnings" />

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
              {/* <Typography
                variant="xsDisplay"
                // sx={{ borderBottom: "1px solid #ebebeb" }}
              >
                Certifications
              </Typography> */}

              <Box
                sx={{
                  width: { xs: "100%", sm: "200px", md: "325px", lg: "400px" },
                  color: colors.grey[400],
                }}
              >
                {/* <Typography
                  variant="smText"
                  // sx={{ borderBottom: "1px solid #ebebeb" }}
                >
                  Where my skills meet purpose: a journey through places I've
                  leveraged my skills. */}
                  {/* and contributing to
                  impactful projects. */}
                {/* </Typography> */}
              </Box>
            </Stack>

            {/* BOX-2 */}
            <Box
              sx={{
                flex: { xs: 1, sm: 2, md: 1 },
                // position: "absolute",
                // top: 0,
                // right: 0,
                // height: "500px",
                // width: "500px",
                // border: "1px solid white",
              }}
              p={1}
              pt={{xs:3, sm:8}}
              ml={{ sm: 5, md: 0 }}
            >
              {/* exp 1 */}
              <Stack
                spacing={2}
                sx={{
                  borderBottom: `1px solid ${colors.grey[800]}`,
                  paddingBottom: 3,
                }}
              >
                <Typography variant="xxlText">
                  Backend Development
                </Typography>
                <Stack>
                  <Typography>
                    SheCode Africa X FedEx Academy Cohort 1 | Remote | Apr -
                    June 2024
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={1}
                    sx={{ backgroundColor: colors.grey[900], padding: 1 }}
                  >
                    <HandymanRoundedIcon fontSize="small" color="primary" />
                    <Typography
                      variant="smText"
                      sx={{ color: colors.grey[400] }}
                    >
                      Nodejs | Express | MongoDB | Mongoose | React | Axios |
                      ReduxToolkits | Git/GitHub | API
                    </Typography>
                  </Stack>
                </Stack>

                {/* -..... */}
                <Stack spacing={1} sx={{ color: colors.grey[400] }}>
                  <Typography variant="smText">
                    - Learnt the basics of backend development.
                  </Typography>
                  <Typography variant="smText">
                    - Learnt how to use MongoDB and Mongosh locally. Also how to connect with a cloud database using Mongoose
                  </Typography>
                  <Typography variant="smText">
                    - Learnt how to structure the application using the MVC architecture .
                  </Typography>

                  <Typography variant="smText">
                    - Contributed to a group project "Splitify" a MERN stack expense splitting application, 
                    where I handled the backend operations and worked closely with the frontend developer to ensure the 
                    application operates smoothly.
                  </Typography>
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
      spacing={{ xs: 2, sm: 1, md: 2 }}
      sx={{
        height: "3rem",
        // border: "1px solid white"
      }}
    >
      <StyledBox>
        <Typography variant="smText">{tag1}</Typography>
      </StyledBox>
      <StyledBox>
        <Typography variant="smText">{tag2}</Typography>
      </StyledBox>
      <StyledBox>
        <Typography variant="smText">{tag3}</Typography>
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
        <Typography variant="smText">{tag4}</Typography>
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
      spacing={{ xs: 2, sm: 1, md: 2 }}
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
        <Typography variant="smText">{tag1}</Typography>
      </StyledBox>
      <StyledBox>
        <Typography variant="smText">{tag2}</Typography>
      </StyledBox>
      <StyledBox>
        <Typography variant="smText">{tag3}</Typography>
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
