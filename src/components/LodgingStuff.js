import { LogementsData } from "../components/LogementsData";
import classes from "../styles/css/LodgingStuff.module.scss";

const LodgingStuff = ({ title, location, host, picture }) => {
  const item = LogementsData.find((item) => item.id);
  return (
    <section className={classes.wrapper}>
      <div className={classes.titlebox}>
        <h1 key={item.id} className={classes.title}>
          {title}
        </h1>
        <h2 className={classes.location}>{location}</h2>
      </div>
      <div className={classes.profile}>
        <p className={classes.hostName}>{host}</p>
        <img src={picture} alt="profile pic" className={classes.picture} />
      </div>
    </section>
  );
};

export default LodgingStuff;
