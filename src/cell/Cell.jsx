import "./Cell.css";
const Cell = ({ cell, id, index }) => {
  return (
    <div className="square" id={id}>
      <p>{index}</p>
    </div>
  );
};

export default Cell;
