import { NavLink } from "react-router-dom";
import classes from "../styles/css/MainHeader.module.scss";
import LogoHeader from "../styles/images/LogoHeader.png";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <img src={LogoHeader} alt="Logo Kasa" />
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/kasa">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/about">
              A Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
