// import {faker} from "@faker-js/faker"
import RestartButton from "../components/RestartButton"
import Results from "../components/Results"
import UserTyping from "../components/UserTyping"
import useEngine from "../hooks/useEngine"

// const words = faker.lorem.words(20)

const MainPage = () => {
      const{state,words,timeLeft,typed}=useEngine()
      
  return (
    <>
    <CounterdownTime timeLeft={timeLeft}/>
    <WordsContainer>
    <Generatorwords words={words}/>
    <UserTyping className="absolute inset-0" words={words} userInput={typed}/>
    </WordsContainer>
    
    <RestartButton className="mx-auto mt-10 text-slate-500" onRestart={()=>null}/>

      <Results
      className="mt-10"
      errors={10}
      accuracyPercentage={100}
      total={200}
      />
    </>
  )
}

const WordsContainer=({children}:{children:React.ReactNode})=>{
  return(
    <div className="relative text-3xl max-w-xl leading-relaxed break-all mt-3 ">
      {children}
    </div>
  )
}

const Generatorwords=({words}:{words:string})=>{
  return <div className="text-primary">{words}</div>
  }

const CounterdownTime=({timeLeft}:{timeLeft:number})=>{
  return <h2 className="text-secondery font-medium">Time: {timeLeft}</h2>
  }

export default MainPage

