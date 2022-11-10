import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import { LogementsData } from "../components/LogementsData";
import LodgingStuff from "../components/LodgingStuff";
import Tags from "../components/Tags";
import StarRating from "../components/StarRating";
import AccordionItem from "../components/AccordionItem";
import "../styles/css/Accordion.scss";

const Lodging = () => {
  const { itemId } = useParams();
  const item = LogementsData.find((item) => item.id === itemId);
  return (
    <Fragment>
      <Carousel slides={item.pictures}></Carousel>
      <LodgingStuff
        title={item.title}
        location={item.location}
        host={item.host.name}
        picture={item.host.picture}
      />
      <Tags tags={item.tags} />
      <StarRating stars={item.rating} />
      <AccordionItem
        text={item.equipments}
        title="Equipement"
        index={item.id}
        className="wrapper-inner"
      />
      <AccordionItem
        text={item.description}
        title="Description"
        index={item.id}
        className="wrapper-inner"
      />
    </Fragment>
  );
};

export default Lodging;
