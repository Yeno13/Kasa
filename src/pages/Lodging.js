import { Fragment } from "react";
import { useParams } from "react-router-dom";
import Carousel from "../components/Carousel";
import { LogementsData } from "../components/LogementsData";
import LodgingComponent from "../components/LodgingComponent";
// import Tags from "../components/Tags";
// import StarRating from "../components/StarRating";
import AccordionItem from "../components/AccordionItem";
import "../styles/css/Accordion.scss";
import classes from "../styles/css/Lodging.module.scss";

const Lodging = () => {
  const { itemId } = useParams();
  const item = LogementsData.find((item) => item.id === itemId);
  return (
    <Fragment>
      <Carousel slides={item.pictures}></Carousel>
      <LodgingComponent
        title={item.title}
        location={item.location}
        hostName={item.host.name}
        picture={item.host.picture}
        tags={item.tags}
        stars={item.rating}
      />
      {/* <div className={classes.TagsStars}>
        <Tags tags={item.tags} />
        <StarRating stars={item.rating} />
      </div> */}
      <div className={classes.Accordion}>
        <AccordionItem
          text={item.description}
          title="Description"
          index={item.id}
          className="wrapper-inner"
        />
        <AccordionItem
          text={item.equipments}
          title="Equipement"
          index={item.id}
          className="wrapper-inner"
        />
      </div>
    </Fragment>
  );
};

export default Lodging;
