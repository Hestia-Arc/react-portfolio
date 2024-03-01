import {
  Box,
  Stack,
  TextField,
  styled,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import darkbg from "../data/c-bg.png";
import PhoneBg from "../images/phone3.jpg";

import { PaddedBox } from "../UI/pages";
import { tokens } from "../theme";

const StyledTitle = styled(Typography)((props) => ({
  color: props.colors.grey[200],
}));

const LinkBox = ({ link, text }) => {
  return <Typography variant="xsText">{text}</Typography>;
};
// ----------------------------------------
function Footer(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box
      sx={{
        minHeight: "20rem",
        background:
          props.bg &&
          `linear-gradient(to right, rgba(1,1,2, 0.3), rgba(1,1,3, 0.66), rgba(1,1,3, 0.66)), url(${darkbg})`,
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      pt={4}
    >
      <PaddedBox>
        <Box
          sx={{
            color: colors.grey[400],
            padding: "1rem 0",
          }}
        >
          <Stack
            direction={{ xs: "column-reverse", sm: "row" }}
            spacing={10}
            sx={{
              minHeight: { xs: "300px", sm: "275px" },
              paddingBottom: "1rem",
              marginBottom: "0.5rem",
              borderBottom: `0.5px solid ${colors.grey[800]}`,
            }}
          >
            {/* --------  first box*/}

            <Stack
              direction="row"
              spacing={{xs:7, sm:2.5, md: 8, lg:10 }}
              // alignItems="center"
              sx={{ width: {xs: "100%", sm:"40%", md: "50%"} }}
            >
              {/* --------1 */}
              <Stack spacing={1.5}>
                <StyledTitle variant="smText" colors={colors}>
                  Quick Links
                </StyledTitle>
                <LinkBox text="Home" link="" />
                <LinkBox text="About" link="" />
                <LinkBox text="Portfolio" link="" />
                <LinkBox text="Blog" link="" />
              </Stack>

              {/* --------2 */}
              <Stack spacing={1.5}>
                <StyledTitle variant="smText" colors={colors}>
                  Socials
                </StyledTitle>
                <LinkBox text="GitHub" link="" />
                <LinkBox text="LinkedIn" link="" />
                <LinkBox text="Twitter" link="" />
                <LinkBox text="DevTo" link="" />
              </Stack>

              {/* --------3*/}
              <Stack spacing={1.5}>
                <StyledTitle variant="smText" colors={colors}>
                  Infos
                </StyledTitle>
                <LinkBox text="Resume" link="" />
                <LinkBox text="LinkTree" link="" />
                {/* <LinkBox text='Home' link='' /> */}
                {/* <LinkBox text='Home' link='' /> */}
              </Stack>
            </Stack>

            {/* --------4   second box*/}
            <Stack direction={{xs: "column", sm:"row"}} spacing={{xs:4, sm: 1}} sx={{ width: {xs: "100%", sm: "58%",md:"50%"} }}>
              {/* ------------FORM */}
              <Stack
                spacing={1.5}
                sx={{
                  width: "330px",
                  padding: {xs: 0,sm:"0 1rem"},
                  borderLeft: `0.5px solid ${colors.grey[900]}`,
                }}
              >
                <StyledTitle variant="smText" colors={colors}>
                  Get in Touch
                </StyledTitle>

                <Stack
                  spacing={2}
                  sx={{
                    backgroundColor: "rgb(17,22,27)",
                    color: colors.grey[200],
                    padding: {xs: 2, sm:1.5},
                    borderRadius: 1.4,
                  }}
                >
                  <TextField
                    required
                    label="Name"
                    variant="outlined"
                    color="secondary"
                    focused
                    size="small"
                    inputProps={{
                      style: {
                        color: colors.grey[300],
                        fontWeight: 300,
                        fontSize: "0.85rem",
                      },
                    }}
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    color="secondary"
                    focused
                    size="small"
                    inputProps={{
                      style: { color: colors.grey[300], fontWeight: 300,                        fontSize: "0.85rem",
                    },
                    }}
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    rows={4}
                    placeholder="Your message"
                    color="secondary"
                    focused
                    size="small"
                    inputProps={{
                      style: { color: colors.grey[300], fontWeight: 300,                        fontSize: "0.85rem",
                    },
                      label: {
                        color: '#ffffff',
                      },
                    }}
                  />
                </Stack>
              </Stack>

              {/* --------CONTACT 5*/}
              <Stack
                spacing={1.5}
                sx={{
                  width: {sm: "180px",md:"200px"},
                  // borderRight: `0.5px solid ${colors.grey[900]}`,
                  height: "100%",
                  background: `url(${PhoneBg})`,
                  backgroundPosition: "right",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  "-webkit-filter": "grayscale(100%)",
                  filter: "grayscale(100%)",
                }}
              >
                <StyledTitle variant="smText" colors={colors}>
                  Contacts
                </StyledTitle>

                <Stack>
                  <a href="mailto:starafolab@gmail.com">
                    <Typography
                      variant="xsText"
                      sx={{ color: colors.grey[700] }}
                    >
                      Starafolab@gmail.com
                    </Typography>
                  </a>

                  <a href="tel:2347046564023">
                    <Typography
                      variant="xsText"
                      sx={{ color: colors.grey[700] }}
                    >
                      +234 704 656 4023
                    </Typography>
                  </a>
                </Stack>

                <Stack></Stack>
              </Stack>
            </Stack>
          </Stack>

          <Typography variant="xsText">&copy; 2024. Built by Hestia</Typography>
        </Box>
      </PaddedBox>
    </Box>
  );
}

export default Footer;
