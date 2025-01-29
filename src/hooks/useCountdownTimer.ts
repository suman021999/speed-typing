import { useCallback, useEffect, useRef, useState } from "react"

const useCountdownTimer = (seconds: number) => {
    const [timeLeft, setTimeLeft] = useState(seconds)
    const intervalRef = useRef<number | null>(null)



    const startCountdown = useCallback(() => {
        console.log("starting countdown...")

        intervalRef.current = window.setInterval(() => {
            setTimeLeft((timeLeft) => timeLeft - 1)
        }, 1000)
    }, [setTimeLeft])

    const resetCounterdown = useCallback(() => {
        console.log("resulting countdown...")

        if (intervalRef.current) {
            clearInterval(intervalRef.current)
        }

        setTimeLeft(seconds)
    }, [seconds])

    useEffect(() => {
        if (!timeLeft && intervalRef.current) {
            console.log("clearing timer...")
            clearInterval(intervalRef.current)
        }
    }, [timeLeft, intervalRef])

    return { timeLeft, startCountdown, resetCounterdown }
}

export default useCountdownTimer 