import React, { useState } from "react";
import style from "./project.module.css";
// import { Box } from "@mui/material";

export const ImageHover = ({ id, img, name, des }) => {
  const [hover, setHover] = useState(false);

  const show = () => {
    setHover(true);
    console.log("hitted");
  };

  return (
    <div className={style["project-item"]}>
      <span>
        <small>{id}</small>
      </span>
      <div key={id} 
      // onClick={() => setHover('true')} 
      >
        {/* {name} */}
        <div className={style["project-hover"]}>{name}</div>
        {/* {hover ? (
          <div className={style["project-hover"]}>{name}</div>
        ) : (
          <div className={style["project-item-title"]}>{name}</div>
        )} */}
        {/* {des} */}
      </div>

      {/* {hover && (
        <div
          style={{ backgroundImage: `url(${img}) no-repeat center` }}
          className={style["project-desc"]}
        >
          {/* //   <img src={img} alt="icon" className={style["project-img"]} /> 
        </div>
      )} */}
    </div>
  );
};







// ON MOUSE-HOVER FUNCTIONALITY
//  <div key={id} onMouseEnter={show} onMouseLeave={() => setHover(false)}> 
        // {name} 

        // {hover ? (
        //   <div className={style["project-hover"]}>{name}</div>
        // ) : (
        //   <div className={style["project-item-title"]}>{name}</div>
        // )}
        //  {des} 
    //   </div>

    //   {hover && (
        // <div
        //   style={{ backgroundImage: `url(${img}) no-repeat center` }}
        //   className={style["project-desc"]}
        // >
          //   <img src={img} alt="icon" className={style["project-img"]} /> 
        // </div>