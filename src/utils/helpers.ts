
export const formatPercentage=(percentage:number)=>{
    return percentage.toFixed(0)+"%"
}

export const countErrors=(actual:string,expected:string)=>{

    const expectedCharacter=expected.split('')

    return expectedCharacter.reduce((errors,expectedChar,i)=>{
        const actualChar=actual[i]

        if(actualChar!==expectedChar){
            errors++
        }
        return errors
    },0)
}

export const calculateAccuracy=(errors:number, total:number)=>{
    if(total>0){
        const corrects=total-errors
        return(corrects/total)*100
    }
    return 0
}
    