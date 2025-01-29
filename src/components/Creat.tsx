import {motion} from "framer-motion"

const Creat = () => {
  return (
    <>
      <motion.div
      aria-hidden={true}
      className="inline-block bg-secondery w-0.5 h-7"
      initial={{opacity:1}}
      animate={{opacity:0}}
      exit={{opacity:1}}
      transition={{repeat:Infinity, duration:0.8,ease:"easeInOut"}}
      >

      </motion.div>
    </>
  )
}

export default Creat
