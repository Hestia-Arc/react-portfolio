import React from "react";
import Stack from "@mui/material/Stack";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box, Typography, styled, useTheme } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import { Link } from "react-router-dom";
// import FlareRoundedIcon from "@mui/icons-material/FlareRounded";
import { tokens } from "../../theme";
import logo from "../../images/logo-cropped.png" 

const NavContainer = styled("nav")((props) => ({
  height: "100px",
  padding: "10px 0px",
  borderBottom: "1px solid rgba(255,255,255,0.09)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",

  a: {
    textDecoration: "none",
    color: props.colors.grey[400],
    transition: "transform 0.5s",

    "&:hover": {
      color: props.colors.goldAccent[300],
      transform: "translateY(-3px)",
    },
  },

  // [theme.breakpoints.down("sm")]: {
  //   padding: "0px 30px",
  //   height: "568px",
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

// const LinkIcon = styled("a")({
//   a: {
//     textDecoration: "none",
//     color: "black",
//     transition: "transform 0.5s",

//     "&:hover": {
//       color: "#ff004f",
//       transform: "translateY(-5px)",
//     },
//   },
// });

// ------------------------------
function NavBar({ isOpen, handleIsOpen }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer colors={colors}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <img src={logo} alt="icon" style={{height: "48px", borderRadius: "4px"}} />       
         {/* <FlareRoundedIcon sx={{ fontSize: "37px" }} /> */}
        <Stack
          direction="row"
          spacing={4}
          sx={{
            [`@media screen and (max-width: ${theme.breakpoints.values.sm}px)`]:
              {
                display: "none",
              },
          }}
        >
          <Link to="about">
            <Typography variant="baseText">About</Typography>
          </Link>

          <Link to="project">
            <Typography variant="baseText">Portfolio</Typography>
          </Link>

          {/* <Link to='contact'>
  <Typography variant="h6">Contact</Typography>
  </Link> */}
        </Stack>

        {/* hamburger */}
        <Stack
          alignItems="flex-end"
          sx={{
            // height: isOpen && 60,
            width: 303,
            backgroundColor: isOpen && colors.grey[900],
            transition: "all 300ms",
            [`@media screen and (min-width: ${theme.breakpoints.values.sm}px)`]:
              {
                display: "none",
              },
          }}
          py={1.8}
          pr={isOpen && 1}
          mr={isOpen && -2}
        >
          <Stack
            alignItems="center"
            spacing={0.7}
            onClick={handleIsOpen}
            sx={
              {
                // [`@media screen and (min-width: ${theme.breakpoints.values.sm}px)`]:
                //   {
                //     display: "none",
                //   },
              }
            }
          >
            <Box
              sx={{
                height: "2px",
                width: "32px",
                borderRadius: "30px",
                backgroundColor: colors.grey[100],
              }}
            ></Box>
            <Box
              sx={{
                height: "3px",
                width: isOpen ? "22px" : "23px",
                borderRadius: "30px",
                backgroundColor: colors.grey[100],
              }}
            ></Box>
            <Box
              sx={{
                height: "2px",
                width: isOpen ? "10px" : "32px",
                borderRadius: "30px",
                backgroundColor: colors.grey[100],
              }}
            ></Box>
          </Stack>
        </Stack>
      </Box>

      {/* SLIDE BOX */}
      <Stack
        alignItems="flex-end"
        justifyContent="space-between"
        sx={{
          display: isOpen ? "flex" : "none",
          position: "absolute",
          top: 57.7,
          right: -16.5, 
          bottom: 0,
          width: "303.2px",
          height: "87vh",
          backgroundColor: colors.grey[900],
          zIndex: 999,
          transform: isOpen ? "translateX(-0px)" : "translateX(-200px)",
          transition: "all 500ms",

          a: {
            textDecoration: "none",
            color: colors.grey[400],
            transition: "transform 0.5s",

            "&:hover": {
              color: colors.goldAccent[300],
              transform: "translateY(-3px)",
            },

            "&:active": {
              color: colors.goldAccent[300],
              transform: "translateY(-3px)",
            },
          },

          [`@media screen and (min-width: ${theme.breakpoints.values.sm}px)`]: {
            display: "none",
          },
        }}
        pr={2}
        pt={10}
        pb={3}
      >
        <Stack alignItems="flex-end" spacing={2} pr={2}>
          <Link to="about">
            <Typography variant="lgText">About</Typography>
          </Link>

          <Link to="project">
            <Typography variant="lgText">Portfolio</Typography>
          </Link>
        </Stack>

        <Stack
          spacing={1}
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
            <a href="https://www.linkedin.com/in/hestiaarc00" target="blank">
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

      {/* --------------------------------- */}
      {/* <Divider sx={{ margin: "20px 0" }} /> */}
      {/* 
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "flex-end" },
          alignItems: "center",
        }}
      >
        <Stack
          sx={{ display: { xs: "none", sm: "block" } }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={4}
        >
          <span>
            <LinkIcon href="https://github.com/Hestia-Arc" target="blank">
              <GitHubIcon />
            </LinkIcon>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/hestiaarc00" target="blank">
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
      </Box> */}
    </NavContainer>
  );
}

export default NavBar;
