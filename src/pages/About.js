import React from "react";
import { AccordionData } from "../utils/AccordionData";
import AboutCardHeader from "../components/AboutCardHeader";
import Accordion from "../components/Accordion";

const About = () => {
  return (
    <section>
      <AboutCardHeader />
      <Accordion AccordionData={AccordionData} />
    </section>
  );
};

export default About;
