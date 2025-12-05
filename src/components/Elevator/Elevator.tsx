import type { FC } from 'react'
import './Elevator.css'
import type { ElevatorInfo } from '../../types/elevatorInfo'

interface ElevatorProps {
   callInfo: ElevatorInfo,
}

const Elevator:FC<ElevatorProps> = ({callInfo}) => {
   return <div className='elevator' style={{bottom: '0px'}}>{callInfo.currentFlor}</div>
}

export default Elevator