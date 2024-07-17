import { motion } from "framer-motion"
const Contact = () => {
  return (
    <div className="border-t border-neutral-700 pb-20">
      <motion.h2 
        whileInView={{opacity:1, y:0}}
        initial={{opacity:0, y:-100}}
        transition={{duration:0.5}}
        className="my-10 text-center text-4xl">
            Get in Touch</motion.h2>
      <div className="text-center tracking-tighter">
        <motion.p 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:-100}}
        transition={{duration:0.5}}
        className="my-4 tracking-wider">Laxmi Nagar, Delhi-110040</motion.p>
        <motion.p 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x:100}}
        transition={{duration:1}}
        className="my-4 tracking-wider">+91 904 0781 875</motion.p>
        <a href="#" className="tracking-wide">ramesh_prajapati0@gmail.com</a>
      </div>
    </div>
  )
}

export default Contact
