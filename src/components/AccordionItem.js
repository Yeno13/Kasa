import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../styles/css/Accordion.scss";

const AccordionItem = ({ title, text }) => {
  const [isActive, setIsActive] = useState(false);

  const manip = `accordion-item ${isActive && "accordion-item--opened"}`;

  let textData;
  if (Array.isArray(text)) {
    textData = text.map((line) => {
      return (
        <p className="accordion-item__paragraph" key={text.indexOf(line)}>
          {line}
        </p>
      );
    });
  } else {
    textData = <p className="accordion-item__paragraph">{text}</p>;
  }
  return (
    <div className="wrapper-inner">
      <div className={manip} onClick={() => setIsActive(!isActive)}>
        <div className="accordion-item__line">
          <h3 className="accordion-item__title">{title}</h3>
          <FaChevronDown className="accordion-item__icon" />
        </div>
        <div className="accordion-item__inner">
          <div className="accordion-item__content">{textData}</div>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
