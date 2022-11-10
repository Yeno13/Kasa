import React from "react";
import { LogementsData } from "./LogementsData";
import classes from "../styles/css/Thumbnail.module.scss";
import { NavLink } from "react-router-dom";

const Thumbnail = () => {
  return (
    <div className={classes.thumbnail}>
      {LogementsData.map((item) => (
        <NavLink
          to={`/lodging/${item.id}`}
          className={classes.thumbnailLink}
          key={item.id}
        >
          <img
            src={item.cover}
            alt="Cover"
            className={classes.thumbnailImg}
          ></img>
          <p className={classes.thumbnailText}>{item.title}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Thumbnail;
