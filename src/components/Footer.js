import { Box, Stack, TextField, Typography, useTheme } from "@mui/material";
import React from "react";
import darkbg from "../data/c-bg.png";
import PhoneBg from "../images/phone3.jpg";

import { PaddedBox } from "../UI/pages";
import { tokens } from "../theme";

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
            direction={{xs:"column-reverse", sm:"row"}}
            spacing={10}
            sx={{
              height: {xs: "30rem", sm:"275px"},
              paddingBottom: "1rem",
              marginBottom: "0.5rem",
              borderBottom: `0.5px solid ${colors.grey[800]}`,
            }}
          >
                        {/* --------  first box*/}

            <Stack
              direction="row"
              spacing={10}
              // alignItems="center"
              sx={{ width: "50%" }}
            >
              {/* --------1 */}
              <Stack spacing={1.5}>
                <Typography variant="smText">Quick Links</Typography>
                <Typography variant="xsText">Home</Typography>
                <Typography variant="xsText">About</Typography>
                <Typography variant="xsText">Portfolio</Typography>
                <Typography variant="xsText">Blog</Typography>
              </Stack>

              {/* --------2 */}
              <Stack spacing={1.5}>
                <Typography variant="smText">Socials</Typography>
                <Typography variant="xsText">GitHub</Typography>
                <Typography variant="xsText">LinkedIn</Typography>
                <Typography variant="xsText">Twitter</Typography>
                <Typography variant="xsText">DevTo</Typography>
              </Stack>

              {/* --------3*/}
              <Stack spacing={1.5}>
                <Typography variant="smText">Socials</Typography>
                <Typography variant="xsText">GitHub</Typography>
                <Typography variant="xsText">LinkedIn</Typography>
                <Typography variant="xsText">Twitter</Typography>
                <Typography variant="xsText">DevTo</Typography>
              </Stack>
            </Stack>

            {/* --------4   second box*/}
            <Stack direction="row" spacing={4} sx={{ width: "50%" }}>
              <Stack
                spacing={1.5}
                sx={{
                  padding: "0 1rem",
                  borderLeft: `0.5px solid ${colors.grey[900]}`,
                }}
              >
                <Typography variant="smText">Get in Touch</Typography>

                <Stack
                  spacing={2}
                  sx={{
                    backgroundColor: "rgb(17,22,27)",
                    color: colors.grey[200],
                  }}
                >
                  <TextField
                    required
                    label="Name"
                    variant="outlined"
                    color="secondary"
                    focused
                    size="small"
                  />
                  <TextField
                    label="Name"
                    variant="outlined"
                    color="secondary"
                    focused
                    size="small"
                  />
                  <TextField
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={2}
                    placeholder="Your message"
                    color="secondary"
                    focused
                    size="small"
                  />
                </Stack>
              </Stack>

              {/* --------5*/}
              <Stack
                spacing={1.5}
                sx={{
                  width: "300px",
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
                <Typography variant="smText">Contacts</Typography>

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
