import React, { useState } from "react";
import "./index.css";

const Clock = () => {
  let time = new Date().toLocaleTimeString();

  const [ctime, setCTime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    setCTime(time);
  };

  setInterval(UpdateTime, 1000); // setInterval() is a function which will update the time automatically after every 1sec(1sec = 1000ms).

  // The setInterval() method in JavaScript is used to repeat a specified function at every given time-interval.
  //It evaluates an expression or calls a function at given intervals. This method continues the calling of function until the window is closed
  //or the clearInterval() method is called. This method returns a numeric value or a non-zero number that identifies the created timer.
  return (
    <>
      <h1>{ctime}</h1>
      <br />
      <br />
      <footer>Made by Somenath Choudhury</footer>
    </>
  );
};

export default Clock;
