import {motion} from "framer-motion"
import { formatPercentage } from "../utils/helpers";

const Results = ({
    errors,
    accuracyPercentage,
    total,
    className,
}:{
    errors:number;
    accuracyPercentage:number;
    total:number;
    className?:string
}) => {

    const initial={opacity:0}
    const animate={opacity:1}
    const duration={duration:0.3}
  return (
    <>
      <motion.ul className={`flex flex-col items-center text-secondery space-y-3 ${className}`}>
        <motion.li 
        initial={initial}
        animate={animate}
        transition={{...duration,delay:0}}
        className="text-xl font-semibold ">Results
        </motion.li>

        
        <motion.li
          initial={initial}
          animate={animate}
          transition={{...duration,delay:0.5}}
        >Accuracy:{formatPercentage(accuracyPercentage) }
        </motion.li>


      <motion.li
          initial={initial}
          animate={animate}
          transition={{...duration,delay:1}} className="text-amber-400">Errors: {errors}
          </motion.li>



        <motion.li 
        initial={initial}
        animate={animate}
        transition={{...duration,delay:1.4}} 
        >Typed: {total}
        </motion.li>

      </motion.ul>
    </>
  )
}

export default Results
