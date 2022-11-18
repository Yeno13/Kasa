import { LogementsData } from "./LogementsData";
import classes from "../styles/css/LodgingComponent.module.scss";

const LodgingComponent = ({ title, location, hostName, picture }) => {
  const item = LogementsData.find((item) => item.id);
  const name = hostName.split(" ");
  return (
    <section className={classes.wrapper}>
      <div className={classes.titlebox}>
        <h1 key={item.id} className={classes.title}>
          {title}
        </h1>
        <h2 className={classes.location}>{location}</h2>
      </div>
      <div className={classes.profile}>
        <div className={classes.hostName}>
          <p className={classes.name}>{name[0]}</p>
          <p className={classes.name}>{name[1]}</p>
        </div>
        <img src={picture} alt="profile pic" className={classes.picture} />
      </div>
    </section>
  );
};

export default LodgingComponent;
