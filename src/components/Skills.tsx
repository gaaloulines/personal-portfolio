"use client"

import { motion } from "framer-motion"
import { 
  FaJs, FaReact, FaDocker, FaGitAlt, FaJava, FaPhp, FaPython, FaAws, FaDatabase, FaRobot 
} from "react-icons/fa"
import { 
  SiTypescript, SiNextdotjs, SiPostgresql, SiAngular, SiMysql, SiTailwindcss, 
  SiNestjs, SiMongodb, SiFastapi, SiDotnet, SiCplusplus, SiPostman, SiFigma 
} from "react-icons/si"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const skills = [
  // Languages
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Python", icon: FaPython },
  { name: "Java", icon: FaJava },
  { name: "C++", icon: SiCplusplus },
  { name: "PHP", icon: FaPhp },
  
  // AI & Data (New - from Anypli role)
  { name: "Generative AI/LLM", icon: FaRobot },
  { name: "RAG / FAISS", icon: FaDatabase },

  // Frontend
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Angular", icon: SiAngular },
  { name: "Tailwind CSS", icon: SiTailwindcss },

  // Backend
  { name: "FastAPI", icon: SiFastapi },
  { name: "Spring Boot", icon: FaJava },
  { name: "NestJS", icon: SiNestjs },
  { name: "Laravel", icon: FaPhp },
  { name: ".NET", icon: SiDotnet },

  // Databases
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },

  // Cloud & DevOps
  { name: "Docker", icon: FaDocker },
  { name: "AWS", icon: FaAws },
  { name: "Git", icon: FaGitAlt },
  
  // Tools
  { name: "Postman", icon: SiPostman },
  { name: "Figma", icon: SiFigma },
];

const Skills = () => {
  const { ref, controls, variants } = useScrollAnimation("up")

  return (
    <section id="skills" className="py-20 bg-indigo-950 text-white">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Technical Skills
        </motion.h2>
        
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  transition: { delay: index * 0.05 } 
                },
              }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                backgroundColor: "#3b82f6", // blue-500
              }}
              className="bg-purple-900/40 border border-purple-500/30 rounded-xl p-6 text-center flex flex-col items-center justify-center shadow-lg transition-all duration-300 backdrop-blur-sm"
            >
              <skill.icon className={`text-4xl mb-3 ${skill.name === "Generative AI/LLM" ? "text-yellow-400" : "text-white"}`} />
              <span className="text-sm font-medium tracking-wide">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
