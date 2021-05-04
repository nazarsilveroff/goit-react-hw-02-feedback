import React from "react";
import propTypes from "prop-types";
const FeedbackOpt = ({ goodCounter, neutralCounter, badCounter }) => {
  return (
    <>
      <h1>Please leave feedback</h1>
      <button onClick={goodCounter} type="button">
        GOOD
      </button>
      <button onClick={neutralCounter} type="button">
        NEUTRAL
      </button>
      <button onClick={badCounter} type="button">
        BAD
      </button>
    </>
  );
};

export default FeedbackOpt;

FeedbackOpt.propTypes = {
  goodCounter: propTypes.func.isRequired,
  neutralCounter: propTypes.func.isRequired,
  badCounter: propTypes.func.isRequired,
};
