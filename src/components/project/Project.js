import React from "react";
import style from "./project.module.css";
// import { Outlet, Link } from 'react-router-dom'
import { Box, Typography } from "@mui/material";

import ProjectAccordion from "./ProjectAccordion";
import AccordTest from "./AccordTest";
import { Link, Outlet } from "react-router-dom";
// import { ImageHover } from "./ImageHover";

// -----------------------------------

export default function Project() {
  return (
    <>
      <Box className={style["project"]}>
        {/* ------------------------------------ */}
        {/* TOP */}
        {/* ------------------------------------- */}
        <Box
          sx={{
            height: "10%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            // borderBottom: 1,
          }}
          className={style["top"]}
        >
          <Box sx={{ display: "flex" }}>
            <Typography variant="h3">2</Typography>
            <Typography variant="h6">/10</Typography>
          </Box>
          <Box>
            <Typography variant="h5">Projects</Typography>
          </Box>
        </Box>

        {/* ------------------------------------ */}
        {/* MIDDLE */}
        {/* ------------------------------------- */}
        <Box sx={{ height: "80%" }} className={style["middle"]}>
          <div className={style["post-2"]}>
            <Outlet />
          </div>

          <ProjectAccordion />

          {/* {project.map((project) => {
            const { id, name, img, description } = project;

            return(
              <>
              

              </>
            )
            
            // <ImageHover id={id} img={img} name={name} des={description} />;
          })} */}
        </Box>

        {/* ------------------------------------ */}
        {/* BOTTOM */}
        {/* ------------------------------------- */}
        <Box sx={{ height: "10%" }} className={style["bottom"]}></Box>

        {/* ------------------------------------ */}
        {/*  */}
        {/* ------------------------------------- */}
      </Box>
    </>
  );
}
