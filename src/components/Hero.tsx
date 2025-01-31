"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { FaLinkedin, FaGithub, FaDownload } from "react-icons/fa"
import { useEffect, useRef } from "react"
import Typed from "typed.js"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const Hero = () => {
  const typedRef = useRef(null)
  const typed = useRef<Typed | null>(null)

  const { ref: textRef, controls: textControls, variants: textVariants } = useScrollAnimation("left")
  const { ref: imageRef, controls: imageControls, variants: imageVariants } = useScrollAnimation("right")

  useEffect(() => {
    if (typedRef.current) {
      typed.current = new Typed(typedRef.current, {
        strings: ["Ines","A Developer", "A Software Engineering Student"],
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 2000,
        loop: true,
        cursorChar: "|",
        smartBackspace: true,
        showCursor: true,
      })
    }

    return () => {
      if (typed.current) {
        typed.current.destroy()
      }
    }
  }, [])

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
    <section id="home" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <motion.div ref={textRef} initial="hidden" animate={textControls} variants={textVariants} className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
            Hi, I'm <span ref={typedRef} className="text-primary inline-block min-w-[240px]" />
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-foreground/80">Full Stack Developer & 2nd Year Software Engineering Student </h2>
          <p className="mb-8 text-foreground/60">I create amazing web experiences with cutting-edge technologies.</p>
          <div className="flex space-x-4 mb-8">
            <motion.a
              href="https://linkedin.com/in/inesgaaloul"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              className="text-foreground hover:text-primary transition-colors"
            >
              <FaLinkedin size={32} />
            </motion.a>
            <motion.a
              href="https://github.com/gaaloulines"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              className="text-foreground hover:text-primary transition-colors"
            >
              <FaGithub size={32} />
            </motion.a>
          </div>
          <motion.a
            href="/gaaloul_ines_resume.pdf"
            download
            className="inline-flex items-center bg-purple-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { delay: 0.8 } },
            }}
          >
            <FaDownload className="mr-2" />
            Download Resume (PDF)
          </motion.a>
        </motion.div>

        {/* Image Section */}
        <motion.div
          ref={imageRef}
          initial="hidden"
          animate={imageControls}
          variants={imageVariants}
          className="md:w-1/2 mt-8 md:mt-0 flex justify-end md:pl-16 lg:pl-32"
        >
          <Image
            src="/profile-pic.png"
            alt="Ines Gaaloul"
            width={400}
            height={400}
            className="rounded-full border-4 border-primary"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
