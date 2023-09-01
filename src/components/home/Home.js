import React from "react";
import style from "./home.module.css";
import { Box, Divider } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box className={style["home"]}>
        {/* <div className={style["header-tag1"]}>Hi, I'm Esther</div> */}

        <Box className={style["box-border"]}>
        {/* <Divider textAlign="left" className={style["header-tag2"]}>Excited to have you here</Divider> */}
          
          <div className={style["header-tag2"]}>Excited to <br/>have you here</div>
          <Box className={style["header-tagline"]}>
          <Divider className={style["m-hr"]}/>
          <p style={{paddingLeft: 15}}>Turning ideas and design concepts <br />
            into functional & user-friendly websites <br />
            and web applications
            </p>
          </Box>

          <div className={style["header-button-container"]}></div>
        </Box>
      </Box>
    </>
  );
}
