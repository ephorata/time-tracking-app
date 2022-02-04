import React from "react";
import classes from "./Activities.module.css";
import Activity from "./Activity";
import data from "../../assets/data.json";


const Activities = ({ timeFrame }) => {
  console.log(data);
  return (
    <section className={classes.activities}>
      {data.map((activity) => (
        <Activity
          title={activity.title}
          timeframe={activity.timeframes[`${timeFrame}`]}
        />
      ))}
    </section>
  );
};

export default Activities;
