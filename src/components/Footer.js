import {
  Box,
  Stack,
  TextField,
  styled,
  Typography,
  useTheme,
  Button,
} from "@mui/material";
import React from "react";
import darkbg from "../data/c-bg.png";
import CV from "../data/Resume-Afolabi Esther.pdf";

// import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
// import PhoneBg from "../images/phone3.jpg";

import { PaddedBox } from "../UI/pages";
import { tokens } from "../theme";

const StyledTitle = styled(Typography)((props) => ({
  color: props.colors.grey[200],
}));

const LinkBox = ({ link, text }) => {
  return (
    <a href={link}>
      <Typography variant="xsText">{text}</Typography>
    </a>
  );
};
// ----------------------------------------
function Footer(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  // const contactForm = useRef(null)
  // contactForm.target = "_blank"
  // document.getElementById('contact-form').setAttribute('target', "googleForm");
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  // const handleFormSubmit = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("entry.1849029163", name);
  //   formData.append("entry.1384134702", email);
  //   formData.append("entry.1528635215", message);

  //   console.log(`message sent ${name}, ${email}, ${message}`);

  //   try {
  //     const response = await fetch(
  //       "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeQypqz8TD8RBGnLfzJfb1ZkKpcOTGIeH9ABIrN02CuIqzkfQ/formResponse",
  //       {
  //         method: "POST",
  //         mode: "cors",
  //         body: formData,
  //       }
  //     );

  //     console.log(response);
  //     return response;
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  return (
    <Box
      sx={{
        minHeight: "20rem",
        background:
          props.bg &&
          `linear-gradient(to right, rgba(1,1,2, 0.1), rgba(1,1,3, 0.45), rgba(1,1,3, 0.4)), url(${darkbg})`,
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",

        a: {
          color: colors.grey[400],
          "&:hover": {
            color: colors.goldAccent[300],
            transform: "translateY(-3px)",
          },
        },
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
              spacing={{ xs: 7, sm: 2.5, md: 8, lg: 10 }}
              // alignItems="center"
              sx={{ width: { xs: "100%", sm: "40%", md: "50%" } }}
            >
              {/* --------1 */}
              <Stack spacing={1.5}>
                <StyledTitle variant="lgText" colors={colors}>
                  Quick Links
                </StyledTitle>
                <LinkBox text="Home" link="./" />
                <LinkBox text="About" link="./about" />
                <LinkBox text="Portfolio" link="./project" />
                {/* <LinkBox text="Blog" link="" /> */}
              </Stack>

              {/* --------2 */}
              <Stack spacing={1.5}>
                <StyledTitle variant="lgText" colors={colors}>
                  Socials
                </StyledTitle>
                <LinkBox text="GitHub" link="https://github.com/Hestia-Arc" />
                <LinkBox
                  text="LinkedIn"
                  link="https://www.linkedin.com/in/hestiaarc00"
                />
                <LinkBox
                  text="Twitter"
                  link="https://twitter.com/arc_hestia00"
                />
                {/* <LinkBox text="DevTo" link="" /> */}
              </Stack>

              {/* --------3*/}
              <Stack spacing={1.5}>
                <StyledTitle variant="lgText" colors={colors}>
                  Infos
                </StyledTitle>
                <LinkBox text="Resume" link={CV} />
                <LinkBox text="DevTo" link="https://dev.to/hestia" />

                {/* <LinkBox text="LinkTree" link="" /> */}
                {/* <LinkBox text='Home' link='' /> */}
                {/* <LinkBox text='Home' link='' /> */}
              </Stack>
            </Stack>

            {/* --------4   second box*/}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 4, sm: 1 }}
              sx={{ width: { xs: "100%", sm: "58%", md: "50%" } }}
            >
              {/* ------------FORM */}
              <Stack
                spacing={1.5}
                sx={{
                  width: "330px",
                  padding: { xs: 0, sm: "0 1rem" },
                  borderLeft: `0.5px solid ${colors.grey[900]}`,
                }}
              >
                <StyledTitle variant="lgText" colors={colors}>
                  Get in Touch
                </StyledTitle>

                <form
                  method="POST"
                  action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSeQypqz8TD8RBGnLfzJfb1ZkKpcOTGIeH9ABIrN02CuIqzkfQ/formResponse"
                >
                  <Stack
                    id="contact"
                    spacing={2}
                    sx={{
                      backgroundColor: "rgb(17,22,27)",
                      color: colors.grey[200],
                      padding: { xs: 2, sm: 1.5 },
                      borderRadius: 1.4,
                    }}
                  >
                    <TextField
                      required
                      id="Name"
                      name="entry.1849029163"
                      // onChange={(e) => {
                      //   setName(e.target.value);
                      // }}
                      label="Name"
                      variant="outlined"
                      color="inputs"
                      focused
                      size="small"
                      inputProps={{
                        style: {
                          color: colors.grey[300],
                          fontWeight: 300,
                          fontSize: "0.85rem",
                        },
                      }}
                      sx={{}}
                    />
                    <TextField
                      required
                      id="Email"
                      name="entry.1384134702"
                      // // onChange={(e) => {
                      //   setEmail(e.target.value);
                      // }}
                      label="Email"
                      variant="outlined"
                      color="inputs"
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
                      id="Message"
                      name="entry.1528635215"
                      // onChange={(e) => {
                      //   setMessage(e.target.value);
                      // }}
                      // id="outlined-multiline-static"
                      label="Message"
                      multiline
                      rows={3}
                      placeholder="Your message"
                      color="inputs"
                      focused
                      size="small"
                      inputProps={{
                        style: {
                          color: colors.grey[300],
                          fontWeight: 300,
                          fontSize: "0.85rem",
                        },
                        label: {
                          color: "#ffffff",
                        },
                      }}
                    />
                    <Button
                      variant="contained"
                      color="secondary"
                      type="submit"
                      size="small"
                      // startIcon={<ArticleRoundedIcon />}
                      sx={{
                        width: "100%",
                        // background: `linear-gradient(to right,rgba(51,53,57, 0.5), rgba(156,163,175, 0.3), rgba(166,201,150, 0.4)), url(${darkbg})`,
                        // border: `0.5px solid ${colors.grey[800]}`,
                        textTransform: "capitalize",
                      }}
                    >
                      Submit
                    </Button>
                  </Stack>
                </form>
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSeQypqz8TD8RBGnLfzJfb1ZkKpcOTGIeH9ABIrN02CuIqzkfQ/viewform?embedded=true"
                  title="google form"
                  nmae="googleForm"
                  width="700"
                  height="520"
                  frameborder="0"
                  marginheight="0"
                  marginwidth="0"
                  style={{ display: "none" }}
                >
                  Loading…
                </iframe>
              </Stack>

              {/* --------CONTACT 5*/}
              <Stack
                spacing={1.5}
                sx={{
                  width: { sm: "180px", md: "200px" },
                  // borderRight: `0.5px solid ${colors.grey[900]}`,
                  height: "100%",
                  // background: `url(${PhoneBg})`,
                  // backgroundPosition: "right",
                  // backgroundRepeat: "no-repeat",
                  // backgroundSize: "contain",
                  // "-webkit-filter": "grayscale(100%)",
                  // filter: "grayscale(100%)",
                }}
              >
                <StyledTitle variant="lgText" colors={colors}>
                  Contacts
                </StyledTitle>

                <Stack spacing={1}>
                  <a href="mailto:starafolab@gmail.com">
                    <Typography
                      variant="baseText"
                      sx={{ color: colors.grey[400] }}
                    >
                      Starafolab@gmail.com
                    </Typography>
                  </a>

                  <a href="tel:2347046564023">
                    <Typography
                      variant="baseText"
                      sx={{ color: colors.grey[400] }}
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
