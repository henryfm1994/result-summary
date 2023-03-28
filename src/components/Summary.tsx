import "./summary.css";
import data from "./data.json";
import { Element } from "./Element";

export const Summary = () => {
  return (
    <div className="summary">
      <div className="sum-title">Summary</div>

      {data.map((item, i) => (
        <Element key={i} {...item} />
      ))}
      <div className="button">Continue</div>
    </div>
  );
};
