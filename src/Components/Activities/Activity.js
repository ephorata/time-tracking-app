import React from "react";
import classes from "./Activity.module.css";
import { ReactComponent as IconEllipsis } from "../../assets/images/icon-ellipsis.svg";
import Icon from "../Icon/Icon";

const Activity = ({ title, timeframe }) => {
  const activity =
    title.split(" ").length === 1
      ? title.toLowerCase()
      : title.toLowerCase().split(" ").join("-");
  console.log(timeframe);

  return (
    <div
      className={classes.activity}
      style={{ backgroundColor: `var(--${activity})` }}
    >
      <div className={classes["activity__icon"]}>
        <Icon icon={activity} />
      </div>
      <div className={classes["activity__body"]}>
        <div className={classes["activity__sub-body"]}>
          <h3>{timeframe.current}hrs</h3>
          <p>Last Week - {timeframe.previous}hrs</p>
        </div>
        <div className={classes["activity__header"]}>
          <h3>{title}</h3>
          <div>
            <Icon
              icon="ellipsis"
              className={classes["activity-header__icon"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
