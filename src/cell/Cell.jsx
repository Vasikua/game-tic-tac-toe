import "./Cell.css";
import { FaRegCircle } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Cell = ({ cells, id, go, setGo, setCells, winningMessage }) => {
  const handleClick = e => {
    if (winningMessage) {
      return;
    }
    if (cells[id]) {
      return;
    }
    const nextCells = cells.map((cell, index) => (index === id ? go : cell));
    setCells(nextCells);
    setGo(go === "circle" ? "cross" : "circle");
  };

  console.log(cells);
  return (
    <div className="square" id={id} onClick={handleClick}>
      {cells[id] === "circle" && <FaRegCircle size={60} color="blue" />}
      {cells[id] === "cross" && <ImCross size={60} color="red" />}
    </div>
  );
};

export default Cell;
