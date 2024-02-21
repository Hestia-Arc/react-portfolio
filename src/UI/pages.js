import { Box, styled } from "@mui/material";
// import { theme } from "../theme";

export const PaddedBox = styled(Box)({
  padding: '0 5rem',

  // [theme.breakpoints.down("sm")]: {
  //   padding: '0 1rem',

  // },
  
//   {
//     xs: "0 10px",
//     sm: "0 50px",
//     md: "0 100px",
//     lg: "0 200px",
//     xl: "0 600px",
//   },
});


export const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
})