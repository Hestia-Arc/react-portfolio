import { Divider, Stack, Typography, styled, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';

const NavBox = styled(Box)({
  padding: "10px 0",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
});

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  
  ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

function NavGlobal(props) {
  return (
    <ElevationScroll {...props}> 
    <NavBox>
      <Stack direction="row" spacing={4}>
        <Link to="../">
          <Typography variant="h6">Home</Typography>
        </Link>

        <Link to="../project">
          <Typography variant="h6">Portfolio</Typography>
        </Link>

        <Link to="../contact">
          <Typography variant="h6">Contact</Typography>
        </Link>
      </Stack>

      <Divider sx={{ margin: "20px 0" }} />
    </NavBox>
    </ElevationScroll>
  );
}

export default NavGlobal;
