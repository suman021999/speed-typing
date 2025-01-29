
import RestartButton from "../components/RestartButton"
import Results from "../components/Results"
import UserTyping from "../components/UserTyping"
import useEngine from "../hooks/useEngine"
import { calculateAccuracy } from "../utils/helpers"



const MainPage = () => {
  const { state, words, timeLeft, typed, totalTyped, errors, restart } = useEngine()

  return (
    <>
      <CounterdownTime timeLeft={timeLeft} />
      <WordsContainer>
        <Generatorwords key={words} words={words} />
        <UserTyping className="absolute inset-0" words={words} userInput={typed} />
      </WordsContainer>

      <RestartButton className="mx-auto mt-10 text-slate-500" onRestart={restart} />

      <Results
        state={state}
        className="mt-10"
        errors={errors}
        accuracyPercentage={calculateAccuracy(errors, totalTyped)}
        total={totalTyped}
      />
    </>
  )
}

const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative text-3xl max-w-xl leading-relaxed break-all mt-3 ">
      {children}
    </div>
  )
}

const Generatorwords = ({ words }: { words: string }) => {
  return <div className="text-primary">{words}</div>
}

const CounterdownTime = ({ timeLeft }: { timeLeft: number }) => {
  return <h2 className="text-secondery font-medium">Time: {timeLeft}</h2>
}

export default MainPage

