import React from "react";
import style from './project.module.css'
import p2 from '../../images/p2.jpg'
import p3 from '../../images/p3.jpg'
import p4 from '../../images/p4.jpg'
import p6 from '../../images/p6.jpg'
import p8 from '../../images/p8.jpg'
// import { project } from "../../data/projectList";
import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    // expandIcon={<InfoOut sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
    height: '100px',
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
    justifyContent: 'flex-end'
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  textAlign: 'right',
//   width: '50%'
}));



// --------------------------------------------------------------------------
function ProjectAccordion({props}) {
  const [expanded, setExpanded] = React.useState("panel1");
  const navigate = useNavigate()

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div className={style['accord']} >
    {/* ------------------------ */}
    {/* 1 */}
    {/* ------------------------ */}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header" >
          <Typography onClick={() => navigate('project/imgicon', {state: {img: p2}})}>Admin Dashboard</Typography>
        </AccordionSummary>
        <AccordionDetails >
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>


      {/* ------------------------ */}
    {/* 2 */}
    {/* ------------------------ */}
    <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel2d-header">
          <Typography onClick={() => navigate('project/imgicon', {state: {img: p3}})}>Reviews App</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>


    {/* ------------------------ */}
    {/* 3 */}
    {/* ------------------------ */}
    <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel3d-header">
          <Typography onClick={() => navigate('project/imgicon', {state: {img: p4}})}>Calculator</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>



    {/* ------------------------ */}
    {/* 4 */}
    {/* ------------------------ */}
    <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel4d-header">
          <Typography onClick={() => navigate('project/imgicon', {state: {img: p6}})}>Review App</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>




    {/* ------------------------ */}
    {/* 5 */}
    {/* ------------------------ */}
    <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel5d-header">
          <Typography onClick={() => navigate('project/imgicon', {state: {img: p8}})}>Review App</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>




    {/* ------------------------ */}
    {/* 6 */}
    {/* ------------------------ */}
    <Accordion
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel6d-header">
          <Typography>Review App</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>




    {/* ------------------------ */}
    {/* 7 */}
    {/* ------------------------ */}
    <Accordion
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel7d-header">
          <Typography>Review App</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>




    {/* ------------------------ */}
    {/*  8*/}
    {/* ------------------------ */}
    <Accordion
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel8d-header">
          <Typography>Review App</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada
            lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>



    {/* ------------------------ */}
    {/*  */}
    {/* ------------------------ */}



    {/* ------------------------ */}
    {/*  */}
    {/* ------------------------ */}




    {/* ------------------------ */}
    {/*  */}
    {/* ------------------------ */}




    {/* ------------------------ */}
    {/*  */}
    {/* ------------------------ */}




    {/* ------------------------ */}
    {/*  */}
    {/* ------------------------ */}




    {/* ------------------------ */}
    {/*  */}
    {/* ------------------------ */}




    {/* ------------------------ */}
    {/*  */}
    {/* ------------------------ */}


    </div>
  );
}

export default ProjectAccordion;
