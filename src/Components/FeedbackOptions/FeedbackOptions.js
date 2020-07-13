import React from "react";

const FeedbackOptions = ({ plusGood, plusNeutral, plusBad }) => {
  return (
    <div>
      <button type="button" onClick={plusGood}>
        Good
      </button>
      <button type="button" onClick={plusNeutral}>
        Neutral
      </button>
      <button type="button" onClick={plusBad}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackOptions;
