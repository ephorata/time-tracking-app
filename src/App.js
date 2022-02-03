import React, { useState } from "react";
import Activities from "./Components/Activities/Activities";
import Navbar from "./Components/Navbar/Navbar";
import classes from "./App.module.css";

const App = () => {
  const [timeFrame, setTimeFrame] = useState("weekly");
  const handleTimeFrameChange = (timeFrame) => {
    //this will be responsible for changing the time frame;
    console.log("time frame changer", timeFrame);
    setTimeFrame(timeFrame);
  };
  return (
    <main className={classes.app}>
      <Navbar handleTimeFrame={handleTimeFrameChange} timeFrame={timeFrame} />
      <Activities timeFrame={timeFrame} />
    </main>
  );
};

export default App;
