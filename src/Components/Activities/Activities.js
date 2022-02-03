import React from "react";
import classes from "./Activities.module.css";
import Activity from "./Activity";
import data from "../../assets/data.json";
// icons
import iconWork from "../../assets/images/icon-work.svg";
import iconPlay from "../../assets/images/icon-play.svg";
import iconExercise from "../../assets/images/icon-exercise.svg";
import iconStudy from "../../assets/images/icon-study.svg";
import iconSocial from "../../assets/images/icon-social.svg";
import iconSelfCare from "../../assets/images/icon-self-care.svg";

const Activities = ({ timeframe }) => {
  console.log(data);
  return (
    <section className={classes.activities}>
      {data.map((activity) => (
        <Activity title={activity.title} timeframes={activity.timeframes} />
      ))}
    </section>
  );
};

export default Activities;
