import { Box, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import { tokens } from "../../theme";

function Recents() {
  return (
    <Stack direction="row" spacing={3} mt={3}>
      <Card />
      <Card />
      <Card />
    </Stack>
  );
}

export default Recents;

function Card(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Stack spacing={2} sx={{ width: "100%", height: "100%" }} >
      <Box
        sx={{
          height: "185px",
          border: `1px solid black`,
          // background: `url(${img})`,
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        px={0.5}
      >
        <Typography variant="mdText">Admin Dashboard</Typography>
        <a href="../project" target="_blank" rel="noreferrer">
          <OpenInNewRoundedIcon color="inputs" />
        </a>
      </Stack>
      <Typography variant="xsText" sx={{ color: colors.grey[500] }}>
        Welcome
      </Typography>

      <Stack direction="row" alignItems="center" spacing={1}>
        <Stack
          justifyContent="center"
          alignItems="center"
          sx={{
            padding: "4px",
            backgroundColor: colors.grey[900],
            border: `1px solid ${colors.grey[800]}`,
            borderRadius: "4px",
          }}
        >
          <HandymanRoundedIcon fontSize="small" color="primary" />
        </Stack>
        MUI
      </Stack>
    </Stack>
  );
}
