import { Box, styled } from "@mui/material";

export const PaddedBox = styled(Box)(props => ({
  padding: '0 5rem',

  [props.theme.breakpoints.down("sm")]:
  {
    padding: '0 1rem',

  },
  [props.theme.breakpoints.only("sm") ]:
  {
    padding: '0 1.8rem',

  },
  

    // [`@media screen and (max-width: ${props.theme.breakpoints.values.sm}px)`]:

//   {
//     xs: "0 10px",
//     sm: "0 50px",
//     md: "0 100px",
//     lg: "0 200px",
//     xl: "0 600px",
//   },
}));


export const Overlay = styled(Box)({
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
})



// MERGED PORTFOLIO V2 28 FEB 2024 LINK
// https://github.com/Hestia-Arc/react-portfolio/pull/9#issue-2159987189