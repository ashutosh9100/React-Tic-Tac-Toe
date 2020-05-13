import React, { useState } from "react";
import "./styles.css";

function Square(props) {
  //const[value,setValue]=useState(props.value);

  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Board(props) {
  const [boardArray, setBoardArray] = useState(new Array(9).fill(null));
  const [isx, setIsx] = useState(true);

  //const winner = calculateWinner(boardArray);
  const renderSquare = i => {
    return <Square value={boardArray[i]} onClick={() => handleClick(i)} />;
  };
  const calculateWinner = squares => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };
  const [status, setStatus] = useState(
    "Next player: " + (isx === true ? " X" : " O")
  );
  const handleClick = i => {
    const squares = boardArray.slice();
    if (squares[i] !== null) return;
    if (isx) {
      squares[i] = "X";
      setIsx(false);
    } else {
      squares[i] = "0";
      setIsx(true);
    }
    let winner = calculateWinner(squares);
    console.log(winner);
    if (winner) {
      setStatus("Winner: " + winner);
    } else {
      setStatus("Next player: " + (isx === true ? " X" : " O"));
    }
    setBoardArray(squares);
  };

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default function Game(props) {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

// ========================================
