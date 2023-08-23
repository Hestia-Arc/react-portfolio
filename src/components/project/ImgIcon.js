import { Typography } from "@mui/material";
import React from "react";
import { useLocation } from "react-router-dom";

function ImgIcon() {
  const location = useLocation();
  const data = location.state.img;
  return (
    <>
      {location !== null ? (
        <img
          src={data}
          alt="icon"
          style={{ maxHeight: "100%", maxWidth: "100%" }}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default ImgIcon;
