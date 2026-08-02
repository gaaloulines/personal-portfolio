"use client"

import { motion } from "framer-motion"
import { FaDownload, FaBriefcase, FaGraduationCap, FaCertificate } from "react-icons/fa"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"
import Image from "next/image"

const Resume = () => {
  const { ref, controls, variants } = useScrollAnimation("up")

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.02, transition: { duration: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    hover: { x: 5, transition: { duration: 0.2 } },
  }

  const certifications = [
    { name: "AI Fundamentals", provider: "IBM", image: "/ibm.png" },
    { name: "CyberOps Associate", provider: "Cisco", image: "/cisco.png" },
    { name: "CCNA 2 v7", provider: "Cisco", image: "/ccna1.png" },
    { name: "CCNA 1", provider: "Cisco", image: "/ccna1.png" },
    { name: "DevNet Associate", provider: "Cisco", image: "/devnet.png" },
    { name: "Cyber Threat Management", provider: "Cisco", image: "/cybertm.jpeg" },
  ]

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-purple-900 to-indigo-900">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Resume
        </motion.h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={sectionVariants} className="bg-white rounded-lg p-6 shadow-lg" whileHover="hover">
            <h3 className="text-2xl font-bold mb-6 flex items-center text-purple-700">
              <FaBriefcase className="mr-2" /> Work Experience
            </h3>

            <motion.div variants={itemVariants} className="mb-6 border-l-4 border-purple-500 pl-4" whileHover="hover">
              <h4 className="text-xl font-bold text-blue-700">Full Stack & AI Engineer  h4>
              <p className="text-gray-600 font-semibold italic text-sm">Anypli — Feb 2026 – July 2026</p>
               <ul className="list-disc list-inside mt-2 text-gray-700 text-sm space-y-1">
    <li>
      Designed and developed <strong>SkinTalk</strong>, a GenAI-powered community platform for cosmetic product analysis using <strong>React.js, Laravel, and MySQL</strong>.
    </li>
    <li>
      Deployed <strong>FastAPI microservices</strong> on <strong>Hugging Face Spaces</strong>, integrating <strong>PaddleOCR, LLMs (Qwen2.5), and a RAG pipeline</strong> for automated ingredient list processing.
    </li>
    <li>
      Engineered a personalized <strong>compatibility engine</strong> that maps product ingredients to user skin profiles (type, allergies, concerns) to generate scores, confidence levels, and tailored explanations.
    </li>
    <li>
      Built a hybrid recommendation system using <strong>FAISS vector embeddings</strong>, featuring a <strong>&quot;Dupe Finder&quot;</strong> and <strong>&quot;Skin Twin&quot;</strong> matching for high-precision product suggestions.
    </li>
    <li>
      Implemented real-time features with <strong>WebSockets</strong>, secure <strong>JWT/OAuth 2.0</strong> authentication, and a containerized architecture using <strong>Docker</strong>.
    </li>
    <li>
      Managed the full <strong>Agile SDLC</strong>, from requirements analysis and system design to deployment and continuous iterative improvements.
    </li>
  </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-6 border-l-4 border-blue-400 pl-4" whileHover="hover">
              <h4 className="text-xl font-bold text-blue-700">Full Stack Intern</h4>
              <p className="text-gray-600 font-semibold italic text-sm">Mediwave — July 2025 – Sept 2025</p>
              <ul className="list-disc list-inside mt-2 text-gray-700 text-sm space-y-1">
                <li>Built a <strong>microservice-based</strong> medical platform (React, NestJS).</li>
                <li>Implemented smart scheduling and secure digital medical records.</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="border-l-4 border-gray-300 pl-4" whileHover="hover">
              <h4 className="text-xl font-bold text-blue-700">Full Stack Intern</h4>
              <p className="text-gray-600 font-semibold italic text-sm">Vaerdia Solutions — June 2024 – Aug 2024</p>
              <ul className="list-disc list-inside mt-2 text-gray-700 text-sm space-y-1">
                <li>Developed customer-support app with <strong>Spring Boot & Angular</strong>.</li>
                <li>Reduced processing time by 60% and automated deployment with <strong>Docker</strong>.</li>
              </ul>
            </motion.div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.div variants={sectionVariants} className="bg-white rounded-lg p-6 shadow-lg" whileHover="hover">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-purple-700">
                <FaGraduationCap className="mr-2" /> Education
              </h3>
              <motion.div variants={itemVariants} className="mb-6" whileHover="hover">
                <h4 className="text-lg font-bold text-blue-700">National Engineering Degree in Software Engineering</h4>
                <p className="text-gray-600">ISSAT Sousse (2023 - 2026)</p>
                <p className="text-xs text-gray-400 italic mt-1">Focus: Full Stack Dev & AI Integration</p>
              </motion.div>
              <motion.div variants={itemVariants} whileHover="hover">
                <h4 className="text-lg font-bold text-blue-700">Pre-engineering (MPI)</h4>
                <p className="text-gray-600">ISSAT Sousse (2021 - 2023)</p>
                <p className="text-xs text-gray-400 italic mt-1">Mathematics, Physics, and Computer Science</p>
              </motion.div>
            </motion.div>

            <motion.div variants={sectionVariants} className="bg-white rounded-lg p-6 shadow-lg" whileHover="hover">
              <h3 className="text-2xl font-bold mb-4 flex items-center text-purple-700">
                <FaCertificate className="mr-2" /> Certifications
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03 }}
                    className="flex flex-col items-center p-3 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg border border-purple-100 text-center"
                  >
                    <div className="w-10 h-10 relative mb-2">
                      <Image
                        src={cert.image || "/placeholder.svg"}
                        alt={cert.provider}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h4 className="font-bold text-[10px] sm:text-xs text-indigo-900 leading-tight uppercase tracking-tighter">
                      {cert.name}
                    </h4>
                    <p className="text-[10px] text-purple-600">{cert.provider}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.a
          href="/cv ines angalis.pdf"
          download
          className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full mt-12 mx-auto block w-fit shadow-lg shadow-purple-900/20"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload className="mr-2" />
          Download Full Resume (PDF)
        </motion.a>
      </div>
    </section>
  )
}

export default Resume
