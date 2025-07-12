import React, { useState } from "react";
import { assets } from "../assets/assets";
import Rules from "./Rules";

function Dices({ rollDice, currDice, resetScore }) {
  const [showrule, setshowrule] = useState(false);
  const [score, setScore] = useState(0);

  const togglerule = () => {
    setshowrule((prev) => !prev);
  };

  const resetScore = () => {
    setScore(0);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div onClick={rollDice} className="cursor-pointer">
        <img src={assets[`dice_${currDice}`]} alt={`dice number ${currDice}`} />
      </div>
      <div>
        <p className="text-2xl m-3">Click on Dice to roll</p>
      </div>
      <div className="flex flex-col">
        <button
          className="border-1 rounded-md text-1xl px-12 py-1 m-3 cursor-pointer"
          onClick={resetScore}
        >
          Reset Score
        </button>
        <button
          className="bg-black rounded-md text-white text-1xl px-12 py-1 m-3 cursor-pointer"
          onClick={togglerule}
        >
          {showrule ? "Hide Rules" : "Show Rules"}
        </button>
      </div>
      {showrule && <Rules />}
    </div>
  );
}

export default Dices;
