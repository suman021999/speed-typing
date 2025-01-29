import { useCallback, useEffect, useState } from "react"
import useWords from "./useWords"
import useCountdownTimer from "./useCountdownTimer";
import useTyping from "./useTyping";
import { countErrors } from "../utils/helpers";

export type State = "start" | "run" | "finish"


const NUMBER_OF_WORDS = 20;
const COUNTDOWN_SECONDS = 30;
const useEngine = () => {
    const [state, setState] = useState<State>("start")
    const { words, updateWords } = useWords(NUMBER_OF_WORDS)
    const { timeLeft, startCountdown, resetCounterdown } = useCountdownTimer(COUNTDOWN_SECONDS)
    const { typed, cursor, clearTyped, resetTotalTyped, totalTyped } = useTyping(state !== "finish")

    const [errors, setErrors] = useState(0)

    const isStarting = state === "start" && cursor > 0
    const areWordsFinished = cursor === words.length

    const sumErrors = useCallback(() => {
        const wordsReacted = words.substring(0, cursor)
        setErrors((prevEs: number) => prevEs + countErrors(typed, wordsReacted))

    }, [typed, words, cursor])

    useEffect(() => {
        if (isStarting) {
            setState("run")
            startCountdown()
        }

    }, [isStarting, startCountdown, cursor])


    useEffect(() => {
        if (!timeLeft) {
            console.log("time is up")
            setState("finish")
            sumErrors()
        }
    }, [timeLeft, sumErrors])


    useEffect(() => {
        if (areWordsFinished) {
            console.log("words are finished")
            sumErrors()
            updateWords()
            clearTyped()
        }
    }, [
        cursor,
        words,
        clearTyped,
        typed,
        areWordsFinished,
        updateWords,
        sumErrors
    ])

    const restart = useCallback(() => {
        console.log("restarting..")
        resetCounterdown()
        resetTotalTyped()
        setState("start")
        setErrors(0)
        updateWords()
        clearTyped()
    }, [clearTyped, updateWords, resetTotalTyped, resetCounterdown])

    return { state, words, timeLeft, typed, totalTyped, errors, restart }
}
export default useEngine