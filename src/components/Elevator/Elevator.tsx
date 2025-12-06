import type { FC } from "react";
import "./Elevator.css";
import type { ElevatorInfo } from "../../types/elevatorInfo";

interface ElevatorProps {
  callInfo: ElevatorInfo;
}

const Elevator: FC<ElevatorProps> = ({ callInfo }) => {
  return (
    <div className="elevator" style={{transform: `translateY(${callInfo.position}px)`}}>
      <div className="elevator-information">
        <div className="elevator-floor">{callInfo.currentFloor}</div>
        <div className="elevator-direction">{callInfo.direction}</div>
      </div>
      <div className="elevator-doors">
        <div className="elevator-doors__right">right</div>
        <div className="elevator-doors__left">left</div>
      </div>
    </div>
  );
};

export default Elevator;
