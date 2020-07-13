import React from "react";

const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
  countTotal,
  countPercentage,
}) => {
  return (
    <div>
      <h2>Statistics</h2>

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
    </div>
  );
};

export default Statistics;
