import React from "react";
import Notification from "../Notification/Notification";

const Statistics = ({ good, neutral, bad, countTotal, countPercentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      {countTotal() ? (
        <div>
          <p>
            <span>Good: </span> {good}
          </p>
          <p>
            <span>Neutral: </span>
            {neutral}
          </p>
          <p>
            <span>Bad: </span>
            {bad}
          </p>
          <p>
            <span>Total: </span>
            {countTotal()}
          </p>
          <p>
            <span>Positive feedback: </span>
            {countPercentage()}%
          </p>
        </div>
      ) : (
        <Notification />
      )}
    </div>
  );
};

export default Statistics;
