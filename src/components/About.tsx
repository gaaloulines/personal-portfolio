"use client"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const About = () => {
  const { ref, controls, variants } = useScrollAnimation("up")

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="bg-purple-800 rounded-lg p-8 shadow-lg"
        >
          <p className="text-lg mb-4">
          Hello! I am a passionate full-stack developer & a 3rd year software engineering student at ISSATSO with a love for creating beautiful, functional, and
          user-friendly web applications and with a strong foundation in both front-end and back-end technologies</p>
<p className="text-lg mb-4">
  Always exploring new technologies, contributing to open source, and solving challenges over a good cup of coffee.
</p>
<p className="text-lg">
  Committed to continuous learning and delivering cutting-edge solutions.
</p>

        </motion.div>
      </div>
    </section>
  )
}

export default About

