import { LogementsData } from "./LogementsData";
import Tags from "./Tags";
import StarRating from "./StarRating";
import classes from "../styles/css/LodgingComponent.module.scss";

const LodgingComponent = ({ title, location, hostName, picture }) => {
  const item = LogementsData.find((item) => item.id);
  const name = hostName.split(" ");
  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <div className={classes.titlebox}>
          <h1 key={item.id} className={classes.title}>
            {title}
          </h1>
          <h2 className={classes.location}>{location}</h2>
        </div>
        <Tags tags={item.tags} className={classes.tags} />
      </div>
      <div className={classes.hostStars}>
        <div className={classes.hostDetails}>
          <div className={classes.hostName}>
            <p className={classes.name}>{name[0]}</p>
            <p className={classes.name}>{name[1]}</p>
          </div>
          <img src={picture} alt="profile pic" className={classes.picture} />
        </div>
        <StarRating stars={item.rating} />
      </div>
    </section>
  );
};

export default LodgingComponent;
