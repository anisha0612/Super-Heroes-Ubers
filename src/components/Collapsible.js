import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";
// Form for getting Hero Details
import HeroForm from "./HeroForm";
// Form for getting Customer Input
import CustomerForm from "./CustomerForm";
// New heroes created to add to existing heroes fetched from API
import NewHeroes from "./heroes";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  accordion: {
    background: "aliceblue",
  },
  heading: {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "rgb(230, 49, 49)",
  },
}));

const Collapsible = (props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");
  const handleExpansion = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  // console.log(props);
  return (
    <div>
      <Accordion
        className={classes.accordion}
        expanded={expanded === "panel1"}
        onChange={handleExpansion("panel1")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='customer details'
          id='panel-customer'>
          <Typography className={classes.heading}>Customer Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <CustomerForm
            buttonDisabled={props.buttonDisabled}
            handleZipCodeChange={props.handleZipCodeChange}
            handlePhoneChange={props.handlePhoneChange}
            handleEmailChange={props.handleEmailChange}
            handleNameChange={props.handleNameChange}
            handleCustomerFormSubmit={props.handleCustomerFormSubmit}
          />
        </AccordionDetails>
      </Accordion>
      <Accordion
        className={classes.accordion}
        expanded={expanded === "panel2"}
        disabled={props.isDisabled}
        onChange={handleExpansion("panel2")}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='Hero Information'
          id='panel-hero'>
          <Typography className={classes.heading}>Select Heroes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <HeroForm
            heroSquad={props.heroSquad}
            newHeroes={NewHeroes}
             heroButton={props.heroButton}
            searchField={props.searchField}
            handleHeroSearchChange={props.handleHeroSearchChange}
            handleNumberOfHeroes={props.handleNumberOfHeroes}
            handleButtonSubmit={props.handleButtonSubmit}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Collapsible;
