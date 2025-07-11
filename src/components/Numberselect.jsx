import React from "react";

function Numberselect() {
  return (
    <div className="flex flex-col justify-center items-end px-6 mx-12">
      <div className="flex justify-center items-end gap-5">
        <p className="border-1 text-3xl font-bold px-5 py-3">1</p>
        <p className="border-1 text-3xl font-bold px-5 py-3">2</p>
        <p className="border-1 text-3xl font-bold px-5 py-3">3</p>
        <p className="border-1 text-3xl font-bold px-5 py-3">4</p>
        <p className="border-1 text-3xl font-bold px-5 py-3">5</p>
        <p className="border-1 text-3xl font-bold px-5 py-3">6</p>
      </div>
      <div>
        <h1 className="text-2xl font-bold m-1">Select Number</h1>
      </div>
    </div>
  );
}

export default Numberselect;
