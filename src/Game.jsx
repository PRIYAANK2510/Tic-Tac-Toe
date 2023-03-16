import Board from "./Board";
import Result from "./Result";
import { useState } from "react";
import { calculateWinner } from "./calculateWinner";
import Reset from "./Reset";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function handleClick(i) {
    if (calculateWinner(currentSquares) || currentSquares[i]) {
      return;
    }
    const nextSquares = currentSquares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    handlePlay(nextSquares);
  }
  function handleReset() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  return (
    <>
      <h1 className="title">TIC TAC TOE</h1>
      <div className="main">
        <Board squares={currentSquares} handleClick={handleClick} />
        <Result history={history} squares={currentSquares} xIsNext={xIsNext} jumpTo={jumpTo} />
      </div>
      <Reset handleReset={handleReset} />
    </>
  );
};
export default Game;
