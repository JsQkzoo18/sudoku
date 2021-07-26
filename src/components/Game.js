import Board from "./Board";

import "./styles/Game.scss";

import { motion } from "framer-motion";

const Game = ({ sudokuArrays, difficulty, setDifficulty }) => {
  const index = Math.floor(Math.random() * 5);
  let sudokuString = sudokuArrays[0][0][index];
  let solutionString = sudokuArrays[0][0][index];
  if (difficulty > 0 && difficulty < 5) {
    sudokuString = sudokuArrays[difficulty - 1][0][index];
    solutionString = sudokuArrays[difficulty - 1][1][index];
  }
  const sudokuArray = sudokuString.split("").map((x) => parseInt(x));
  const solutionArray = solutionString.split("").map((x) => parseInt(x));
  const editable = sudokuArray.map((item) => {
    if (item === 0) return true;
    else return false;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={"gamePage"}
    >
      <Board
        sudokuArray={sudokuArray}
        editable={editable}
        solutionArray={solutionArray}
        difficulty={difficulty-1}
        setDifficulty={setDifficulty}
      />
    </motion.div>
  );
};

export default Game;
