'use client'
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.div initial={{opacity: 0, x:300}} animate={{opacity: 1, x:0}} transition={{duration: .7}} className="fixed bottom-150 right-6 rotate-[-90deg] origin-right text-lg font-light text-accent">
      
      <ul className="nav-list">
        <li>Developed by Jacob Greene</li>
        <li><a href="">LinkedIn</a></li>
        <li><a href="">GitHub</a></li>
        <li><a href="">Email</a></li>
      </ul>
    
    </motion.div>
  );
}
