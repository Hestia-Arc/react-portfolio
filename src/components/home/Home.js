import React from "react";
import style from "./home.module.css";
import { Box, Divider } from "@mui/material";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Box className={style["home"]}>
        {/* <div className={style["header-tag1"]}>Hi, I'm Esther</div> */}

        <motion.div
          animate={{ y: [100, -50, 0 ] }}
          transition={{ ease: "easeOut", duration: 2 }}
          className={style["box-border"]}
        >
          {/* <Divider textAlign="left" className={style["header-tag2"]}>Excited to have you here</Divider> */}

          <div className={style["header-tag2"]}>
            Excited to <br />
            have you here
          </div>

          

          <Box className={style["header-tagline"]}>
            <Divider className={style["m-hr"]} />
            {/* <Fade cascade damping={0.2}>
              <div style={{ paddingLeft: 15 }}>
               <p> Turning ideas and design concepts </p>
               <p> into functional & user-friendly websites </p>
                <p>and web applications</p>
              </div>
            </Fade> */}

            <motion.div
              animate={{ x: [-1000, 30, 0] }}
              transition={{ ease: "easeOut", duration: 4 }}
              style={{ paddingLeft: 15 }}
            >
              <p> Turning ideas and design concepts </p>
              <p> into functional & user-friendly websites </p>
              <p>and web applications</p>
            </motion.div>
          </Box>

          <div className={style["header-button-container"]}></div>
        </motion.div>
      </Box>
    </>
  );
}
