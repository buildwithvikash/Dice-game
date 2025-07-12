import React, { useState } from "react";

function Numberselect({ setError, setSelectedNumber, selectedNumber, error }) {
  const arrnum = [1, 2, 3, 4, 5, 6];

  const numberselector = (value) => {
    setSelectedNumber(value);
    setError("");
  };

  return (
    <div className="flex flex-col justify-center items-end px-6 mx-12">
      {error && (
        <p className="text-xl text-red-500 m-3">{error}</p>
      )}
      <div className="flex justify-center items-end gap-5">
        {arrnum.map((value, i) => (
          <button
            key={i}
            onClick={() => numberselector(value)}
            className={`border-2 text-3xl font-bold px-5 py-3 ${
              selectedNumber === value ? "bg-blue-500 text-white" : "bg-white"
            }`}
          >
            {value}
          </button>
        ))}
      </div>

      <div>
        <h1 className="text-2xl font-bold m-1">Select Number</h1>
      </div>
    </div>
  );
}

export default Numberselect;
