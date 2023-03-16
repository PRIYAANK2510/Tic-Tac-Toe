import { calculateWinner } from "./calculateWinner";

const Result = ({ history, squares, xIsNext, jumpTo }) => {
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner : " + winner;
  } else if (!squares.includes(null)) {
    status = "Tie Game";
  } else {
    status = `${xIsNext ? "X" : "O"} : Turn`;
  }
  const moves = history.map((squares, move, his) => {
    let description;
    if (move > 0) {
      description = `Go to move ${move} `;
    } else {
      description = "Go to Game Start";
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="result">
      <div className="status">
        <p className={winner ? `win` : !squares.includes(null) ? `tie` : `running`}>{status}</p>
      </div>
      <ol className={history.length != 1 ? "listdisp" : "listhide"}>{moves}</ol>
    </div>
  );
};
export default Result;
