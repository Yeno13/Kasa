import React from "react";
import AccordionItem from "./AccordionItem";
import "../styles/css/Accordion.scss";

const Accordion = ({ AccordionData }) => {
  return (
    <div className="wrapper">
      <ul className="accordion-list">
        {AccordionData.map((text, index) => {
          return (
            <li className="accordion-list__item" key={index}>
              <AccordionItem {...text} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Accordion;
