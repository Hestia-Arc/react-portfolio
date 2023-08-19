import React from "react";
import style from "./home.module.css";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box className={style["home"]}>
        <div className={style["header-tag1"]}>Hi, I'm Esther</div>
        <div className={style["header-tag2"]}>Frontend Web Developer</div>
        <Box className={style["header-tagline"]}>
          Turning ideas and design concepts <br />
          into functional & user-friendly websites <br />
          and web applications
        </Box>

        <div className={style["header-button-container"]}></div>
      </Box>
    </>
  );
}
