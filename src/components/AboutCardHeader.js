import LogoAbout from "../styles/images/LogoAbout.jpg";
import classes from "../styles/css/AboutCardHeader.module.scss";

const AboutCardHeader = () => {
  return (
    <div className={classes.AboutContainer}>
      <img src={LogoAbout} alt="Joli Landscape" className={classes.AboutImg} />
    </div>
  );
};

export default AboutCardHeader;
