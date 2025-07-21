'use client'
import { motion } from "framer-motion";

const nav = [
  {label: 'LinkedIn', href: '#'},
  {label: 'Github', href: '##'},
  {label: 'Email', href: 'mailto:jepgpersonal@gmail.com'},
]

export default function Footer() {
  return (
    <motion.div 
      initial={{opacity: 0, x:300}} 
      animate={{opacity: 1, x:0}} 
      transition={{duration: .7}} 
      className="fixed bottom-150 right-6 rotate-[-90deg] origin-right text-[1px] font-light text-muted"
    >
      <ul className="nav-list">
        <li className="select-none">Developed by Jacob Greene</li>
        {nav.map(({label, href}) => (
          <li key={href}>
            <a href={href} className="inline-block transition-transform transform hover:scale-110 ease-in-out">
              {label}
            </a>
          </li>
        ))}
      </ul>
    
    </motion.div>
  );
}
