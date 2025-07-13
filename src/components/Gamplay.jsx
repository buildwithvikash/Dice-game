import React, { useState } from "react";
import Totalscore from "./Totalscore";
import Dices from "./Dices";
import Numberselect from "./Numberselect";

function Gamplay() {
  const [totalScore, setTotalScore] = useState(0);
  const [error, setError] = useState("");
  const [selectedNumber, setSelectedNumber] = useState();
  const [currDice, setCurrDice] = useState(1);

  const generateRandomNum = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const rollDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }

    const randomNumber = generateRandomNum(7, 1);
    setCurrDice(randomNumber);

    console.log(`selectedNumber no.: ${selectedNumber}`);
    console.log(`random number: ${randomNumber}`);

    if (selectedNumber == randomNumber) {
      setTotalScore((score) => score + randomNumber);
    } else {
      setTotalScore((score) => score - 2);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <Totalscore totalScore={totalScore} />
        <Numberselect
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <div>
        <Dices
          rollDice={rollDice}
          currDice={currDice}
          setTotalScore={setTotalScore}
        />
      </div>
    </div>
  );
}

export default Gamplay;
