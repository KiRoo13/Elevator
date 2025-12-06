export interface ElevatorInfo {
   currentFloor: number,
   direction: 'UP' | 'DOWN' | '',
   workDoors: boolean,
   position: number
}