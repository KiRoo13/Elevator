import { useState } from "react";
import BtnCall from "./components/BtnCall/BtnCall";
import Elevator from "./components/Elevator/Elevator";
import { FLORS } from "./constants/flors";
import type { ElevatorInfo } from "./types/elevatorInfo";

function App() {
  const [callInfo, setCallInfo] = useState<ElevatorInfo>({currentFlor: 0, direction: ''})

  const handleCall = () => {}

  
  return (
    <>
      <main className="main">
        <div className="wrapper-elevator">
          <Elevator callInfo={callInfo}/>
        </div>
        <div className="wrapper-btn">
          {FLORS.map((flor) => 
            <BtnCall key={flor} handleCall={handleCall}/>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
