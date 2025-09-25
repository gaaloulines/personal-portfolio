"use client"
import { motion } from "framer-motion"
import { FaJs, FaReact, FaNodeJs, FaDocker, FaGitAlt, FaJava, FaPhp } from "react-icons/fa"
import { SiTypescript, SiNextdotjs, SiPostgresql, SiAngular, SiMysql, SiTailwindcss, SiNestjs, SiMongodb } from "react-icons/si"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const skills = [
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Angular", icon: SiAngular },
  { name: "Laravel", icon: FaPhp },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Nest.js", icon: SiNestjs },
  { name: "Spring Boot", icon: FaJava },
  { name: "MySQL", icon: SiMysql },
  { name: "PostgreSQL", icon: SiPostgresql },
    
  { name: "MongoDb", icon: SiMongodb },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: FaGitAlt },
  { name: "Docker", icon: FaDocker },
];

const Skills = () => {
  const { ref, controls, variants } = useScrollAnimation("up")

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-8 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { delay: index * 0.1 } },
              }}
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="bg-purple-800 hover:bg-blue-700 rounded-lg p-6 text-center flex flex-col items-center justify-center shadow-lg transition-colors duration-300"
              >
              <skill.icon className="text-4xl mb-2" />
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

