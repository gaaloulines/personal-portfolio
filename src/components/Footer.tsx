"use client"
import { motion } from "framer-motion"
import { FaLinkedin, FaGithub } from "react-icons/fa"

const Footer = () => {
  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        duration: 0.3,
        yoyo: Number.POSITIVE_INFINITY,
      },
    },
  }

  return (
    <footer className="bg-background/80 backdrop-blur-md text-foreground py-8 border-t border-foreground/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Ines Gaaloul</h3>
            <p className="text-foreground/60">Full Stack Developer</p>
            <p className="text-foreground/60">Software Engineering Student</p>
          </div>
          <div className="flex space-x-4">
            <motion.a
              href="https://linkedin.com/in/inesgaaloul"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              className="text-foreground hover:text-primary transition-colors"
            >
              <FaLinkedin size={24} />
            </motion.a>
            <motion.a
              href="https://github.com/gaaloulines"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              className="text-foreground hover:text-primary transition-colors"
            >
              <FaGithub size={24} />
            </motion.a>
          </div>
        </div>
        <div className="mt-8 text-center text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Ines Gaaloul. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

