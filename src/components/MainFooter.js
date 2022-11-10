import classes from "../styles/css/MainFooter.module.scss";
import LogoFooter from "../styles/images/LogoFooter.png";

const MainFooter = () => {
  return (
    <footer className={classes.footer}>
      <img src={LogoFooter} alt="Logo Kasa" className={classes.footerImg} />
      <p className={classes.footerTxt}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default MainFooter;
