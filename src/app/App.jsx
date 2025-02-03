import { useState } from "react";
import "./App.css";
import Cell from "../cell/Cell";
const App = () => {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  console.log("all work good");
  return (
    <div className="tic-tac-toe">
      <div className="gameBoard">
        {cells.map((cell, index) => (
          <Cell key={index} id={index} cell={cell} />
        ))}
      </div>
      <p></p>
    </div>
  );
};

export default App;
