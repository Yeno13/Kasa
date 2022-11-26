import { Fragment } from "react";
import { Navigate, useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import { LogementsData } from "../components/LogementsData";
import LodgingComponent from "../components/LodgingComponent";
import AccordionItem from "../components/AccordionItem";
import "../styles/css/Accordion.scss";
import classes from "../styles/css/Lodging.module.scss";

const Lodging = () => {
  const { itemId } = useParams();
  const item = LogementsData.find((item) => item.id === itemId);
  if (!item) {
    return <Navigate to="/no-found" />;
  }
  return (
    <Fragment>
      <Carousel slides={item.pictures}></Carousel>
      <LodgingComponent
        title={item.title}
        location={item.location}
        hostName={item.host.name}
        picture={item.host.picture}
      />
      <div className={classes.Accordion}>
        <AccordionItem
          text={item.description}
          title="Description"
          index={item.id}
          className={classes.description}
        />
        <AccordionItem
          text={item.equipments}
          title="Équipements"
          index={item.id}
          className={classes.equipments}
        />
      </div>
    </Fragment>
  );
};

export default Lodging;
