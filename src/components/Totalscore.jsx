function Totalscore({ totalScore }) {
  return (
    <div className="px-6 mx-12 inline-block">
      <div className="flex flex-col items-center justify-start">
        <span className="text-8xl font-bold text-center">{totalScore}</span>
        <h1 className="text-3xl font-bold">Total Score</h1>
      </div>
    </div>
  );
}

export default Totalscore;
