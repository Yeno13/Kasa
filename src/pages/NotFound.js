import React from "react";
import { NavLink } from "react-router-dom";
import classes from "../styles/css/NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={classes.notfound}>
      <h1 className={classes.title}>404</h1>
      <p className={classes.text}>
        Oups! La page que vous demandez n'existe pas.
      </p>
      <NavLink to="/kasa/" className={classes.link}>
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
};

export default NotFound;
