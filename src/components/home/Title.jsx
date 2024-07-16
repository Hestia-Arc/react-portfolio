import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { tokens } from "../../theme";

function Title({ text, tag }) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Stack
      direction="row"
      spacing={2}
      mb={10}
      sx={{
        position: "relative",
        borderTop: `1px solid ${colors.grey[600]}`,
        paddingTop: "4rem",
      }}
    >
      <Typography
        // variant="xsDisplay"
        fontWeight={500}
        sx={{
          position: "absolute",
          top: "6%",
          right: 0,
          padding: "4px 15px",
          color: colors.grey[200],
          fontSize: "14px",
          backgroundColor: colors.grey[900],
          border: `1px solid ${colors.grey[800]}`,
          borderRadius: "4px",
        }}
      >
        {tag}
      </Typography>

      {/* 1 */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          // variant="xsDisplay"
          fontWeight={500}
          sx={{
            color: colors.grey[200],
            fontSize: { xs: "2.8rem", sm: "5rem" },
          }}
        >
          {text}
        </Typography>
      </Box>

      {/* 2 */}
      <Box sx={{ flex: 1, borderBottom: `1px solid ${colors.grey[600]}` }}>
        {/* <Typography>hello</Typography> */}
      </Box>
      {/* <Typography
      variant="smText"
      sx={{color: colors.grey[400]}}
      // sx={{ borderBottom: "1px solid #ebebeb" }}
    >
      What I'm working on
    </Typography> */}
    </Stack>
  );
}

export default Title;
