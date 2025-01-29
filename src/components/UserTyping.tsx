import Creat from "./Creat";
import classNames from "classnames";


const UserTyping = ({
    userInput,
    words,
    className,
}:{
    userInput:string;
    words:string
    className?:string;
}) => {
    const typedChracters=userInput.split("")
  return (
    <>
    <div className={className}>
        {
            typedChracters.map((char,index)=>{
                return <Character 
                key={`${char}_${index}`} 
                actual={char} 
                expected={words[index]}/>
            })}
            <Creat/>
    </div>
    </>
  )
}

const Character=({actual,expected}:{actual:string,expected:string})=>{
    const isCorrect=actual===expected;
    const isWhiteSpace=expected===''
    return <span className={classNames({
        "text-red-600":!isCorrect && !isWhiteSpace,
        "text-secondery":isCorrect && !isWhiteSpace,
        "text-red-900":!isCorrect && !isWhiteSpace,
    })}>{expected}</span>
}

export default UserTyping


