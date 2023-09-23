import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1024,
      lg: 1400,
      xl: 1900
    },
  },
  typography: {
    fontFamily: ["Fredoka", "sans-serif"].join(","),
    allVariants: ["Fredoka", "sans-serif"].join(","),

  },
});


theme.typography.h3 = {
  fontFamily: ["Fredoka", "sans-serif"].join(","),

  fontSize: "3rem",
  lineHeight: 1.167,

  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
    fontWeight: 500,
  },
};