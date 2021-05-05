import React from "react";
import propTypes from "prop-types";
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
     
      <ul>
        <li>GOOD: {good}</li>
        <li>NEUTRAL: {neutral}</li>
        <li>BAD: {bad}</li>
        <li>TOTAL: {total}</li>
        <li>
          Positive feedback:
          {positivePercentage}%
        </li>
      </ul>
    </>
  );
};
Statistics.propTypes = {
  good: propTypes.number.isRequired,
  neutral: propTypes.number.isRequired,
  bad: propTypes.number.isRequired,
  total: propTypes.number.isRequired,
  positivePercentage: propTypes.number.isRequired,
};
export default Statistics;
