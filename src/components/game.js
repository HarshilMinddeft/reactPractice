import "./styles.css";
import { useState } from "react";
import Square from "./utils/square";
import calculateWinner from "./utils/calculated";

const Game = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(""));
  function handlerClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  // const isdraw = calculateDraw(squares);
  const winner = calculateWinner(squares);

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  //check all squares are filled and there is no winner then it will show draw
  const isDraw = squares.every((square) => square);
  if (isDraw) {
    status = "Draw between X & 0";
  }
  return (
    <div className="newgame">
      <div className="board-row">
        <div className="status">{status}</div>
        <Square value={squares[0]} onSquareClick={() => handlerClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handlerClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handlerClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handlerClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handlerClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handlerClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handlerClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handlerClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handlerClick(8)} />
      </div>
    </div>
  );
};

export default Game;
