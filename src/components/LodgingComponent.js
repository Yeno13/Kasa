import { LogementsData } from "./LogementsData";
import classes from "../styles/css/LodgingComponent.module.scss";
import { FaStar } from "react-icons/fa";

const LodgingComponent = ({
  title,
  location,
  hostName,
  picture,
  tags,
  stars,
}) => {
  const item = LogementsData.find((item) => item.id);
  const name = hostName.split(" ");
  const totalStars = 5;
  const activeStars = stars;
  return (
    <section className={classes.section}>
      <div className={classes.wrapper}>
        <div className={classes.titlebox}>
          <h1 key={item.id} className={classes.title}>
            {title}
          </h1>
          <h2 className={classes.location}>{location}</h2>
        </div>
        <div className={classes.hostDetails}>
          <div className={classes.hostName}>
            <p className={classes.name}>{name[0]}</p>
            <p className={classes.name}>{name[1]}</p>
          </div>
          <img src={picture} alt="profile pic" className={classes.picture} />
        </div>
      </div>
      <div className={classes.TagsStars}>
        <ul className={classes.list}>
          {tags.map((tags, index) => {
            return (
              <li className={classes.tags} key={index}>
                {tags}
              </li>
            );
          })}
        </ul>
        <div className={classes.rating}>
          {[...new Array(totalStars)].map((arr, index) => {
            return index < activeStars ? (
              <FaStar key={index} className={classes.icon} />
            ) : (
              <FaStar key={index} className={classes.border} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LodgingComponent;
