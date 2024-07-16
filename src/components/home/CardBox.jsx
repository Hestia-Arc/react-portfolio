import { Box, Stack, Tooltip, Typography, useTheme } from "@mui/material";
import React from "react";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import HandymanRoundedIcon from "@mui/icons-material/HandymanRounded";
import SourceIcon from "@mui/icons-material/Source";
import { tokens } from "../../theme";




function CardBox(props) {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const {id, title, img, link, desc, stack,src } = props.project;
  
    // console.log(title)
  
    return (
      <Stack
        key={id}
        //   justifyContent="space-between"
          spacing={1}
        sx={{
          width: {xs: "320px", sm:"380px"},
          height: {xs: "460px",sm:"465px"},
          // backgroundColor: colors.grey[900],
          // border: `1px solid ${colors.grey[700]}`,
          borderRadius: "4px",
        }}
      >
        {/* IMAGES */}
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
  
        <Stack justifyContent="space-between" sx={{ height: "200px", width: '100%' }}>
          <Stack spacing={1} px={1} pt={1}>
            {/* TITLE */}
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="xlText" fontWeight={600} sx={{color: colors.grey[200]}} >
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
  
            {/* DESC */}
            <Typography
              variant="baseText"
              sx={{ color: colors.grey[400],  }}
           
           >
              {desc}
            </Typography>
          </Stack>
  
          {/* STACK */}
          <Stack
            direction="row"
            alignItems="center"
            // flexWrap="wrap"
            spacing={2}
            p={1}
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
            <Stack>
            {stack?.map((item, i) => {
              return (
                <Typography key={i} variant="xsText" sx={{ color: colors.grey[500],  }}>
                  {item} {" "}
                </Typography>
              );
            })}
            </Stack>
            
          </Stack>
        </Stack>
      </Stack>
    );
  }

  export default CardBox