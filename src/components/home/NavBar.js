import React from "react";
import Stack from "@mui/material/Stack";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box, Divider, Typography, styled } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import MarkEmailUnreadRoundedIcon from "@mui/icons-material/MarkEmailUnreadRounded";
import { Link } from "react-router-dom";

const NavContainer = styled("nav")(({theme}) => ({
  height: "120px",
  padding: "10px 0px",

  a: {
    textDecoration: "none",
    color: "black",
    transition: 'transform 0.5s',

    '&:hover': {
      color: '#d32f2f',
      transform: 'translateY(-5px)',
    }
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

const LinkIcon = styled('a')({
  a: {
    textDecoration: "none",
    color: "black",
    transition: 'transform 0.5s',

    '&:hover': {
      color: '#ff004f',
      transform: 'translateY(-5px)',
    }
  },
})

// ------------------------------
function NavBar() {
  // const [active, setActive] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContainer>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">Esther</Typography>
        <Stack
        sx={{display: {xs: 'none', sm: 'block'} }}
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
      </Box>

      <Divider sx={{ margin: "20px 0" }} />

      <Box
        sx={{
          display: "flex",
          justifyContent: {xs: 'center',sm:"flex-end"},
          alignItems: "center",
        }}
      >
        <Stack direction="row" spacing={4} >

        <Link to='about'>
          <Typography variant="h6">About</Typography>
          </Link>

          <Link to='project'>
          <Typography variant="h6">Portfolio</Typography>
          </Link>
          

          {/* <Link to='contact'>
          <Typography variant="h6">Contact</Typography>
          </Link> */}
          
        </Stack>
      </Box>
    </NavContainer>
  );
}

export default NavBar;
