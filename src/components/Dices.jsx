import React, { useState } from "react";
import { assets } from "../assets/assets";
import Rules from "./Rules";

function Dices() {
  const [showrule, setshowrule] = useState(false);

  const togglerule = () => {
    setshowrule((prev) => !prev);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img src={assets.dice_1} alt="dice number" />
      </div>
      <div>
        <p className="text-2xl m-3">Click on Dice to roll</p>
      </div>
      <div className="flex flex-col">
        <button className="border-1 rounded-md text-1xl px-12 py-1 m-3 cursor-pointer">
          Reset Score
        </button>
        <button
          className="bg-black rounded-md text-white  text-1xl px-12 py-1 m-3 cursor-pointer"
          onClick={togglerule}
        >
          Show Rules
        </button>
      </div>
      {showrule ? <Rules /> : ""}
    </div>
  );
}

export default Dices;
