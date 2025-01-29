import { useState } from "react"
import useWords from "./useWords"
import useCountdownTimer from "./useCountdownTimer";
import useTyping from "./useTyping";

export type State="start"|"run"|"finish"


const NUMBER_OF_WORDS=20;
const COUNTDOWN_SECONDS=30;
const useEngine=()=>{
    const [state,setState]=useState<State>("start")
    const { words,updateWords}=useWords(NUMBER_OF_WORDS)
    const {timeLeft,startCountdown,resetCounterdown}=useCountdownTimer(COUNTDOWN_SECONDS)
    const{typed,cursor,clearTyped,resetTotalTyped, totalTyped}=useTyping(state!=="finish")
    
    return {state, words,timeLeft,typed,totalTyped} 
}
export default useEngine