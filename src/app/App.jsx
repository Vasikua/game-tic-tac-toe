import { useEffect, useState } from "react";
import "./App.css";
import Cell from "../cell/Cell";

const App = () => {
  const [cells, setCells] = useState(Array(9).fill(""));
  const [go, setGo] = useState("cross");
  const [winningMessage, setWinningMassage] = useState(null);

  const message =
    cells.every(cell => cell != "") && !winningMessage
      ? "game end no one winns "
      : "Next move: " + go;

  const handleReset = () => {
    setCells(Array(9).fill(""));
    setWinningMassage(null);
  };

  const winningCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  useEffect(() => {
    winningCombo.forEach(arr => {
      let crossWin = arr.every(cell => cells[cell] === "cross");
      if (crossWin) {
        setWinningMassage("cross win!!!");
        return;
      }
    });
    winningCombo.forEach(arr => {
      let circleWin = arr.every(cell => cells[cell] === "circle");
      if (circleWin) {
        setWinningMassage("circle win!!!");
        return;
      }
    });
  }, [cells]);

  return (
    <div className="tic-tac-toe">
      <h1>Tic-Tac-Toe</h1>
      <div className="gameBoard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cells={cells}
            setCells={setCells}
            go={go}
            setGo={setGo}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <p>{winningMessage || message}</p>
      <button className="btnRes" onClick={handleReset}>
        RESET
      </button>
    </div>
  );
};

export default App;
