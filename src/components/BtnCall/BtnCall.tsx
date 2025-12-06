import type { FC } from "react"
import './BtnCall.css'

interface BtnCallProps {
   handleCall: () => void,
   floorNumder: number
}


const BtnCall:FC<BtnCallProps> = ({handleCall, floorNumder}) => {
   return <button className="btn-call" onClick={handleCall}>CALL {floorNumder}</button>
}

export default BtnCall