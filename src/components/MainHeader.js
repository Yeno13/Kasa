import { NavLink } from "react-router-dom";
import classes from "../styles/css/MainHeader.module.scss";
import LogoHeader from "../styles/images/LogoHeader.png";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <img className={classes.image} src={LogoHeader} alt="Logo Kasa" />
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/kasa/"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? classes.active : "")}
              to="/about"
            >
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
