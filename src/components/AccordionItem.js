import React, { Component } from "react";
import { FaChevronDown } from "react-icons/fa";
import "../styles/css/Accordion.scss";

class AccordionItem extends Component {
  state = {
    opened: false,
  };

  render() {
    const {
      props: { title, text },
      state: { opened },
    } = this;
    const onClick = () => {
      this.setState({ opened: !opened });
    };
    const manip = `accordion-item ${opened && "accordion-item--opened"}`;

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
        <div className={manip} onClick={onClick}>
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
  }
}

export default AccordionItem;
