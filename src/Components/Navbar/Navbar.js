import React from "react";
import classes from "./Navbar.module.css";

import profile from "../../assets/images/image-jeremy.png";
const Navbar = ({ handleTimeFrame, timeFrame }) => {
  return (
    <nav className={classes.nav}>
      <div className={classes["nav__top"]}>
        <img src={profile} alt="" />
        <div className={classes["nav-top__description"]}>
          <p>Report for</p>
          <h4>Jeremy Robson</h4>
        </div>
      </div>
      <ul className={classes["nav__bottom"]}>
        <li
          className={timeFrame === "daily" ? classes.active : ""}
          onClick={() => handleTimeFrame("daily")}
        >
          Daily
        </li>
        <li
          className={timeFrame === "weekly" ? classes.active : ""}
          onClick={() => handleTimeFrame("weekly")}
        >
          Weekly
        </li>
        <li
          className={timeFrame === "monthly" ? classes.active : ""}
          onClick={() => handleTimeFrame("monthly")}
        >
          Monthly
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
