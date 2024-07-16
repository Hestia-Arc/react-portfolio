import { Box, Stack, Tooltip, Typography, useTheme } from "@mui/material";
import React from "react";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import SourceIcon from "@mui/icons-material/Source";
import { tokens } from "../../theme";

function Card2(props) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id, title, img, link, desc, stack, src, p1, p2, api, date } =
    props.project;

  // console.log(title)

  return (
    <Stack
      key={id}
      direction={{xs: "column",sm:"row"}}
      gap={{xs: 5, sm:10}}
      spacing={1}
      sx={{
        width: "100%",
        minHeight: "400px",
        // backgroundColor: colors.grey[900],
        // border: `1px solid ${colors.grey[700]}`,
        borderBottom: props.pb ? "none" : `1px solid ${colors.grey[700]}`,
        padding: {xs: "48px 10px" , sm:"68px 38px"},
        borderRadius: "4px",
      }}
    >
      {/* ======================= 1 */}
      {/* IMAGES */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
        {/* TITLE */}
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="xlText"
            fontWeight={600}
            sx={{ color: colors.grey[200] }}
          >
            {title}
          </Typography>

          <span>
            <a href={src} target="_blank" rel="noreferrer">
              <Tooltip title="Source code">
                {" "}
                <SourceIcon color="inputs" fontSize="small" />
              </Tooltip>
            </a>
            <a href={link} target="_blank" rel="noreferrer">
              <Tooltip title="Live page">
                {" "}
                <OpenInNewRoundedIcon color="inputs" fontSize="small" />
              </Tooltip>
            </a>
          </span>
        </Stack>
        <Box
          sx={{
            height: "320px",
            //   border: `1px solid ${colors.grey[300]}`,
            background: !img ? colors.grey[500] : `url(${img})`,
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></Box>

        {/* DESC */}
        <Typography variant="baseText" sx={{ color: colors.grey[400] }}>
          {desc}
        </Typography>

        {/* STACK */}
        <Stack
          direction="row"
        //   alignItems="center"
          // flexWrap="wrap"
          spacing={2}
        //   p={1}
        >
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
          <Stack sx={{padding: "14px 0px",borderTop: `1px solid ${colors.grey[800]}`, borderBottom: `1px solid ${colors.grey[800]}`}}>
            {stack?.map((item, i) => {
              return (
                <Typography
                  key={i}
                  variant="xsText"
                  sx={{ color: colors.grey[500] }}
                >
                  {item}{" "}
                </Typography>
              );
            })}
          </Stack>
        </Stack>
      </Box>

      {/*================== 2 */}
      <Box sx={{ flex: 1, color: colors.grey[400] }}>
        <Stack gap={3} sx={{ width: "100%" }}>
          {p1 ? (
            <>
              <Typography>{p1}</Typography>
              <Typography>{p2}</Typography>
              <Box mt={10} sx={{ display: "flex", alignItems: "center", gap: 5 }}>
                <a href={api} style={{ textDecoration: "underline" }}>
                  Link to the API
                </a>
                |
                <span style={{ fontSize: "14px" }}>
                  <em>{date}</em>
                </span>
              </Box>
            </>
          ) : (
            <>
              <Typography>
                This project serve me as a display of my JavaScript skills in
                both client and server sides to potential employers or
                collaborators.
              </Typography>

              <Typography>
                Trying my hands on using SQL.
              </Typography>
            </>
          )}
        </Stack>
      </Box>
    </Stack>
  );
}

export default Card2;
