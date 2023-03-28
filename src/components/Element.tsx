import "./summary.css";

export const Element = (item: {
  category: string;
  score: number;
  icon: string;
}) => {
  const { category, score, icon } = item;
  return (
    <div className="categories">
      <div className={category}>
        <div style={{ display: "flex" }}>
          <img src={icon} alt="icon" />
          <p style={{ margin: "8px 10px" }}> {category}</p>
        </div>
        <div className="points">
          {" "}
          <span>{score}</span> / 100
        </div>
      </div>
    </div>
  );
};
