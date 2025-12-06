import { useEffect, useRef, useState } from "react";
import BtnCall from "./components/BtnCall/BtnCall";
import Elevator from "./components/Elevator/Elevator";
import { FLOORS } from "./constants/flors";
import type { ElevatorInfo } from "./types/elevatorInfo";
import { deelay } from "./helpers/deelay";

function App() {
  let callStak: Array<Promise> = [];
  let firstLoop: number = 0;
  let startTime: number = 0;

  const mine = useRef(null);

  const [callInfo, setCallInfo] = useState<ElevatorInfo>({
    currentFloor: 1,
    direction: "",
    workDoors: false,
    position: 0,
  });

  const createNewCall = (fn: () => void, ms: number) => {
    return new Promise<void>((res) => {
      setTimeout(() => {
        fn();
        res();
      }, ms);
    });
  };

  const loopStack = async() => {
    if (callStak.length <= 0) return;

    while (callStak.length) {
        await callStak.shift();
    }
  };

  const handleCall = (targetFloor: number) => {
    if (callInfo.currentFloor === targetFloor) return;

    let direction = targetFloor > callInfo.currentFloor ? "UP" : "DOWN";
    let workDoors = !callInfo.workDoors;
    let currentFloor = targetFloor;
    let position = mine.current.offsetHeight - 200 * targetFloor;

    callStak.push(
      createNewCall(
        () => 
          setCallInfo((pre) => {
            return { currentFloor, direction, workDoors, position };
          }),
        (startTime += 2000)
      )
    );

    if (firstLoop === 0) {
      loopStack();
      firstLoop += 1;
    }
  };

  const initPositionElevator = () => {
    const position = mine.current.offsetHeight - 200;
    setCallInfo((pre) => {
      return { ...pre, position };
    });
  };

  useEffect(() => {
    initPositionElevator();
  }, []);

  return (
    <>
      <main className="main">
        <div className="wrapper-elevator" ref={mine}>
          <Elevator callInfo={callInfo} />
        </div>
        <div className="wrapper-btn">
          {FLOORS.sort((a, b) => b - a).map((floor) => (
            <BtnCall
              key={floor}
              handleCall={() => handleCall(floor)}
              floorNumder={floor}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
