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
    hover: { scale: 1.03, boxShadow: "0px 0px 8px rgba(0,0,0,0.2)", transition: { duration: 0.3 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    hover: { x: 5, transition: { duration: 0.2 } },
  }

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
            <h3 className="text-2xl font-bold mb-4 flex items-center text-purple-700">
              <FaBriefcase className="mr-2" /> Work Experience
            </h3>
            <motion.div variants={itemVariants} className="mb-4" whileHover="hover">
              <h4 className="text-xl font-semibold text-blue-700">Summer Internship (July-August 2023)</h4>
              <p className="text-gray-600">Vaerdia Solutions</p>
              <p className="text-gray-700 mt-2">
                <strong>Technologies:</strong> Laravel, MySQL, Blade
              </p>
              <p className="text-gray-700">
                <strong>Project:</strong> User Ticket Management System
              </p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>User authentication with role management</li>
                <li>Customized dashboards for administrators, support agents, and clients</li>
                <li>Ticket tracking and management</li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-4" whileHover="hover">
  <h4 className="text-xl font-semibold text-blue-700">Full Stack Internship (Jul–Sep 2025)</h4>
  <p className="text-gray-600">Mediwave</p>
  <p className="text-gray-700 mt-2">
    <strong>Technologies:</strong> React.js, NestJS
  </p>
  <p className="text-gray-700">
    <strong>Project:</strong> Multifunctional Medical Platform
  </p>
  <ul className="list-disc list-inside mt-2 text-gray-700">
    <li>Developed secure authentication with professional license verification</li>
    <li>Implemented appointment scheduling, availability tracking, and automated reminders</li>
    <li>Built digital medical records for test results, prescriptions, and clinical notes</li>
    <li>Integrated real-time messaging, medical news feed, and event management features</li>
  </ul>
</motion.div>

          </motion.div>

          <motion.div variants={sectionVariants} className="bg-white rounded-lg p-6 shadow-lg" whileHover="hover">
            <h3 className="text-2xl font-bold mb-4 flex items-center text-purple-700">
              <FaGraduationCap className="mr-2" /> Education
            </h3>
            <motion.div variants={itemVariants} className="mb-4" whileHover="hover">
              <h4 className="text-xl font-semibold text-blue-700">Software Engineering</h4>
              <p className="text-gray-600">ISSATSO (2024 - Present)</p>
            </motion.div>
            <motion.div variants={itemVariants} whileHover="hover">
              <h4 className="text-xl font-semibold text-blue-700">Pre-engineering (MPI)</h4>
              <p className="text-gray-600">ISSATSO (2021 - 2023)</p>
            </motion.div>
          </motion.div>

          <motion.div variants={sectionVariants} className="bg-white rounded-lg p-6 shadow-lg md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 flex items-center text-purple-700">
              <FaCertificate className="mr-2" /> Certifications
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: "CCNA 1", image: "/ccna1.png", provider: "Cisco" },
                { name: "CCNA 2", image: "/ccna1.png", provider: "Cisco" },
                { name: "DevNet Associate", image: "/devnet.png", provider: "Cisco" },
                { name: "Cyber Threat Management", image: "/cybertm.jpeg", provider: "Cisco" },
              ].map((cert) => (
                <motion.div
                  key={cert.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0,0,0,0.2)" }}
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 rounded-lg text-white text-center shadow-md"
                >
                  <Image
                    src={cert.image || "/placeholder.svg"}
                    alt={cert.name}
                    width={64}
                    height={64}
                    className="mx-auto mb-2"
                  />
                  <h4 className="font-semibold">{cert.name}</h4>
                  <p className="text-sm">{cert.provider}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.a
          href="/gaaloul ines.pdf" // Replace with your resume
          download
          className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full mt-12 mx-auto block w-fit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { delay: 0.8 } },
          }}
        >
          <FaDownload className="mr-2" />
          Download Full Resume (PDF)
        </motion.a>
      </div>
    </section>
  )
}

export default Resume

