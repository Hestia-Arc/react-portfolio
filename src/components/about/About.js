import React from "react";
import style from "./about.module.css";
import picture from "../../images/image2.jpg";
import { Avatar, Box } from "@mui/material";
// import { Outlet, NavLink } from 'react-router-dom'

export default function About() {
  return (
    <Box className={style["about"]}>
      {/* --------------------------------------- */}
      {/* ABOUT */}
      {/* --------------------------------------- */}
      <Box className={style["container"]}>
        <Box className={style["content"]}>
          {/* PARAGRAPH 1 */}
          <div style={{ width: "45%" }} className={style["m-text"]}>
            <div className="who-tag2">Esther is an avid learner who is :</div>{" "}
            <br />
            <div className="line w-1">
              {" "}
              Genuinely interested in technology and passionate about bringing
              digital experiences to life.
            </div>
            <br />
            <div className="line w-2">
              {" "}
              Keen to evaluate and learn new technologies{" "}
            </div>
            <br />
            <div className="line w-4">
              {" "}
              Collaborative with great communication skills{" "}
            </div>
          </div>

          {/* PARAGRAPH 2 */}
          <div style={{ width: "45%" }} className={style["m-text"]}>
            <div className="line w-3">
              {" "}
              Focused on developing high quality products and services
            </div>
            <br />

            <div className="line w-5">
              {" "}
              Eager to obtain an internship role where I can apply my developing
              skills and contribute to the company's reputation while gaining
              more experience.{" "}
            </div>
          </div>
        </Box>

        {/* SKILLS */}
        <Box className={style["content2"]}></Box>

        <div className={style["float"]}>
          <div className={style["float-content"]}>A little about me</div>
          <div className={style["about-frame"]}>
            <Avatar src={picture} alt="Developer's" sx={{ width: 280, height: 330 }} className={style['avatar']}/>
            
          </div>
        </div>
      </Box>

      {/* --------------------------------------- */}
      {/* EXPERIENCE */}
      {/* --------------------------------------- */}
      <Box className={style["container"]}>
        <Box className={style["exp"]}>
          <div>Huygensoft Limited</div>
          <p>2022 - Till Date</p>
          <p>Front-end Web Developer</p>

          <p>
            I’m a reliable, passionate, enthusiast developer and genuinely
            interested in tech. <br/>Ready to bring your ideas to life. <br/>Keen to learn
            new technologies to develop quality and valuable products..
          </p>
        </Box>

        <div className={style["float"]}>
          <div className={style["float-content"]}>Experiences</div>
          <div className={style["float-frame"]}></div>
        </div>
      </Box>

      {/* --------------------------------------- */}
      {/*  */}
      {/* --------------------------------------- */}

      {/* --------------------------------------- */}
      {/*  */}
      {/* --------------------------------------- */}

      {/* --------------------------------------- */}
      {/*  */}
      {/* --------------------------------------- */}

      {/* --------------------------------------- */}
      {/*  */}
      {/* --------------------------------------- */}

      {/* --------------------------------------- */}
      {/*  */}
      {/* --------------------------------------- */}

      {/* <div className="who-content">
                <h2 className="who-tag"> Meet Me...</h2>
                
            </div>
         */}
    </Box>
  );
}
