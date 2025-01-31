"use client"
import { motion } from "framer-motion"
import { FaCode, FaServer,  FaDesktop } from "react-icons/fa"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const services = [
  { 
    name: "Full-Stack Web Development", 
    icon: FaCode, 
    description: "Building dynamic, scalable, and responsive web applications using Laravel, Next.js, and Tailwind CSS." 
  },
  { 
    name: "Backend & API Development", 
    icon: FaServer, 
    description: "Designing secure and efficient RESTful APIs with Laravel and real-time functionalities." 
  },
  { 
    name: "Frontend Design & Development", 
    icon: FaDesktop, 
    description: "Crafting visually appealing and responsive user interfaces with modern web technologies like Next.js, React,Angular and Tailwind CSS." 
  },
  
];


const Services = () => {
  const { ref, controls, variants } = useScrollAnimation("up")

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Services
        </motion.h2>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="grid md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                visible: { opacity: 1, x: 0, transition: { delay: index * 0.2 } },
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-purple-800 hover:bg-blue-700 rounded-lg p-6 text-center flex flex-col items-center justify-center shadow-lg transition-colors duration-300"
            >
              <service.icon className="text-4xl mr-4 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

