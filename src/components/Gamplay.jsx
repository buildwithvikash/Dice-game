import React from "react";
import Totalscore from "./Totalscore";
import Dices from "./Dices";
import Numberselect from "./Numberselect";

function Gamplay() {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <Totalscore />
        <Numberselect />
      </div>
      <div>
        <Dices />
      </div>
    </div>
  );
}

export default Gamplay;
