import React from "react";
import { project } from "../../data/projectList";
import { styled } from "@mui/material/styles";
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Typography } from "@mui/material";

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
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
//   textAlign: 'right'
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function AccordTest() {
 

  return (
    <>
      {project.map((project) => {
        const {name, img, panel} = project;

        return (
          <AcItem name={name} img={img} panel={panel}  />
        );
      })}
    </>
  );
}

export default AccordTest;



function AcItem({name, img, panel}) {

    const [expanded, setExpanded] = React.useState("panel1");

    const handleChange = (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    };


    return(
        <>
            <Accordion
              expanded={expanded === {panel}}
              onChange={handleChange({panel})}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>{name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </>
    )
}
