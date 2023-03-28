import React from "react";
import "./result.css";

export const Result = () => {
  return (
    <div className="result">
      <div className="res-title">Your Result</div>
      <div className="number">
        <p>
          <span>76</span> <br /> of 100
        </p>
      </div>
      <div className="description">Great</div>
      <div className="comment">
        You scored higher than 65% of the people who have taken these tests.
      </div>
    </div>
  );
};
