import homeImg from "../styles/images/home.png";
import classes from "../styles/css/HomeCardHeader.module.scss";

const HomeCardHeader = () => {
  return (
    <div className={classes.HeaderContainer}>
      <img
        src={homeImg}
        alt="Chez vous, partout et ailleurs"
        className={classes.HeaderImg}
      />
      <h1 className={classes.HeaderTxt}>Chez vous, partout et ailleurs</h1>
    </div>
  );
};

export default HomeCardHeader;
