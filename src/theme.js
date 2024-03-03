// import { useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { createContext, useMemo, useState } from "react";

// --2-- THEME SETTINGS

// --2-b
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

// --2-c
// color design tokens export
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        text: {
          48: "#FFFFFF7A",
          88: "#FFFFFFA3",
        },
        surface: {
          400: "#272D32",
          500: "#1D2125",
        },
        grey: {
          100: "#111827",
          200: "#1f2937",
          300: "#374151",
          400: "#4b5563",
          500: "#6b7280",
          600: "#9ca3af",
          700: "#d1d5db",
          800: "#e5e7eb",
          900: "#f3f4f6",
        },
        white: {
          100: "#FFFFFF",
          64: "#FFFFFFA3",
        },
        black: {
          24: "#0000003D",
          64: "#000000A3",
          88: "#000000E0",
        },
        baseAccent: {
          50: "#445c39",
          100: "#577c48",
          200: "#628d50",
          300: "#6f9f5b",
          400: "#79ae64",
          500: "#8aba7a",
          600: "#9dc690",
          700: "#b7d5af",
          800: "#d3e5cd",
          900: "#ecf5eb",
        },
        goldAccent: {
          50: "#f5ead1",
          100: "#dbc9ad",
          200: "#bba586",
          300: "#9a835e",
          400: "#826941",
          500: "#695123",
          600: "#60471e",
          700: "#523b15",
          800: "#462e0d",
          900: "#382000",
        },
        blue: {
          500: "#4285F4",
        },
        red: {
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",

          // ---------
          // 100: "",
          // 200:"",
          // 300:"",
          // 400:"",
          // 500: "" ,
          // 600:"",
          // 700:"",
          // 800:"",
          // 900:"",
        },
        yellow: { 500: "#FBBC05" },
        green: {
          500: "#34A853",
        },
      }
    : {
        // LIGHT PALETTES
        text: {
          88: "#000000E0",
          48: "#0000007A",
        },
        surface: {
          400: "#e7e7e7",
          500: "#FEFEFA",
        },
        grey: {
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },

        white: {
          100: "rgba(225, 225, 225, 1)",
        },
        black: {
          64: "#000000A3",
          88: "#000000E0",
        },
        baseAccent: {
          50: "#ecf5eb",
          100: "#d3e5cd",
          200: "#b7d5af",
          300: "#9dc690",
          400: "#8aba7a",
          500: "#79ae64",
          600: "#6f9f5b",
          700: "#628d50",
          800: "#577c48",
          900: "#445c39",
        },
        goldAccent: {
          50: "#f5ead1",
          100: "#dbc9ad",
          200: "#bba586",
          300: "#9a835e",
          400: "#826941",
          500: "#695123",
          600: "#60471e",
          700: "#523b15",
          800: "#462e0d",
          900: "#382000",
        },
        blue: {
          100: "#151632",
          200: "#2a2d64",
          300: "#3e4396",
          400: "#535ac8",
          500: "#6870fa",
          600: "#868dfb",
          700: "#a4a9fc",
          800: "#c3c6fd",
          900: "#e1e2fe",
        },
        red: {},
        yellow: {},
        green: {},
      }),
});

// ---------2-a
export const themeSettings = (mode) => {
  const colors = tokens(mode);

  return {
    // Override or create new styles, colors, palettes...
    breakpoints,
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            primary: {
              main: colors.baseAccent[500],
              // dark: colors.primary[300],
              // light: "#E7EFEF",
              contrastText: colors.white[100],
            },
            secondary: {
              main: colors.goldAccent[500],
              contrastText: colors.white[100],
            },
          }
        : {
            // palette values for light mode
            primary: {
              main: colors.baseAccent[500],
              // main: "#0e625f",
              // light: "#E7EFEF",
              dark: colors.baseAccent[500],
              contrastText: colors.white[100],
            },
            secondary: {
              main: colors.goldAccent[500],

              // main: "#ff735c",
              // light: "#E7EFEF",
              // dark: "e",
              // contrastText: "#fff",
            },
            error: {
              main: "#ff735c",
              light: "#E7EFEF",
              dark: "e",
              contrastText: "#fff",
            },
            warning: {
              main: "#ff735c",
              light: "#E7EFEF",
              dark: "e",
              contrastText: "#fff",
            },
            info: {
              main: "#2F80ED",
              light: "",
              dark: "",
              contrastText: "#fff",
            },
            success: {
              main: "#27AE60",
              light: "",
              dark: "",
              contrastText: "#fff",
            },
            inputs: {
              main: colors.grey[600],
              light: "#E7EFEF",
              dark: "e",
              contrastText: "#fff",
            },
            neutral: {
              neutralBlack: "hsla(0, 0%, 0%, 0.64)",
              neutral300: "#B3B1B8",
            },
            stroke: {
              stroke100: "#DCDBDE",
            },
          }),
    },
    typography: {
      fontFamily: ['Fredoka', 'sans-serif'].join(','),
      allVariants: ["Fredoka", "sans-serif"].join(","),
      lgDisplay: {
        fontSize: "4.5rem",
        lineHeight: 1,
        fontWeight: 600,
      },

      mdDisplay: {
        fontSize: "3.75rem",
        lineHeight: 1,
        fontWeight: 600,
      },
      smDisplay: {
        fontSize: "3rem",
        lineHeight: 1,
        fontWeight: 600,
      },
      xsDisplay: {
        fontSize: "2.25rem",
        lineHeight: "1.2rem",
        fontWeight: 600,
      },
      xxsText: {
        fontSize: "0.5rem",
        lineHeight: "1rem",
        fontWeight: 400,
      },
      xsText: {
        fontSize: "0.75rem",
        lineHeight: "1rem",
        fontWeight: 400,
      },
      smText: {
        fontSize: "0.875rem",
        lineHeight: "1.25rem",
        fontWeight: 400,
      },
      baseText: {
        fontSize: "1rem",
        lineHeight: "1.5rem",
        fontWeight: 400,
      },
      lgText: {
        fontSize: "1.125rem",
        lineHeight: "1.75rem",
        fontWeight: 400,
      },
      xlText: {
        fontSize: "1.25rem",
        lineHeight: "1.75rem",
        fontWeight: 400,
      },
      xxlText: {
        fontSize: "1.5rem",
        lineHeight: "2rem",
        fontWeight: 400,
      },
    },
  };
};

//----3--- CONTEXT (to make)
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

//---1--- CUSTOM HOOK
export const useMode = () => {
  const [mode, setMode] = useState("light");
  // const isDarkModeEnabled = useMediaQuery("(prefers-color-scheme: dark)");

  // useEffect(() => {
  //   if (isDarkModeEnabled) {
  //     setMode("dark");
  //   } else {
  //     setMode("light");
  //   }
  // }, [isDarkModeEnabled]);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};

// -----------------------------old

// typography: {
// }

// theme.typography.h3 = {
//   fontFamily: ["Fredoka", "sans-serif"].join(","),

//   fontSize: "3rem",
//   lineHeight: 1.167,

//   [theme.breakpoints.down("sm")]: {
//     fontSize: "2rem",
//     fontWeight: 500,
//   },
// };
