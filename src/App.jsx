import Homepage from "./components/homepage";
import Gamplay from "./components/Gamplay";
import { useEffect, useState } from "react";

const App = () => {
  const [isgamestarted, setisgamestarted] = useState(false);
  const togglegameplay = () =>{
    setisgamestarted((prev)=>!prev)
  }

  return (
    <div>
      <div>
        {isgamestarted? <Gamplay/> : <Homepage toggle={togglegameplay}/>}
      </div>
    </div>
  );
};
export default App;
