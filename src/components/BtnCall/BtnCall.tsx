import type { FC } from "react"

interface BtnCallProps {
   handleCall: () => void
}


const BtnCall:FC<BtnCallProps> = ({handleCall}) => {
   return <button onClick={handleCall}>CALL</button>
}

export default BtnCall