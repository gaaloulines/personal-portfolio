"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const projects = [
  {
    title: "Intelligent text summarizer",
    description:
      "This is a Text Analysis and Summarization Platform built with Next.js, Prisma, PostgreSQL, and integrates MeaningCloud API for text analysis. The platform allows users to generate text summaries, extract key phrases, perform sentiment analysis, and even convert text to speech. Users can view their summary history and analyze both pasted text and uploaded files.",
    image: "/capture sumarizer.PNG",
    demoLink: "/videos/demo text summarizer.mp4",
    githubLink: "https://github.com/gaaloulines/intelligent-text-summarizer",
  },
  {
    title: "Book recommendation system",
    description:
      "This is a modern web-based Book Recommendation System built with Next.js, Prisma, MySQL, and integrates OpenAI's API to generate personalized book recommendations. The system includes user authentication, stores user information, and logs all recommendations in a database.",
    image: "/cap mrigla book recommendor.PNG",
    demoLink: "/videos/demo book recommendor ‐ Réalisée avec Clipchamp.mp4",
    githubLink: "https://github.com/gaaloulines/book-recommendation-system",
  },
  {
    title: "Client Ticketing System",
    description:
      "This is a Ticketing System built with Laravel, MySQL, and Laravel Breeze for authentication. The system allows users to create, view, and manage customer support tickets. The system features multiple roles, including Admin, Support Agent, and Client, with each role having different permissions to interact with the tickets.",
    image: "/image.png",
    demoLink: "/videos/demo ticketing system.mp4",
    githubLink: "https://github.com/gaaloulines/ticketing-system",
  },
    {
    title: "My ISSATSO Forum",
    description:
      "Full-stack forum application designed for university students, using Angular for the frontend and Spring Boot for the backend. The platform enables real-time discussions through WebSocket integration and was tested by a group of users to ensure performance and usability. The project focused on creating a dynamic, responsive, and engaging environment for academic exchange.",
    image: "/Capture.PNG",
    demoLink: "/videos/demo forum app.mp4",
    githubLink: "https://github.com/gaaloulines/ticketing-system",
  },
]

const Projects = () => {
  const { ref, controls, variants } = useScrollAnimation("up")

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Recent Projects
        </motion.h2>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={variants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.2 },
                },
              }}
              whileHover={{ scale: 1.05, zIndex: 1 }}
              className="bg-purple-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300"
            >
              <motion.div
                className="relative h-48 overflow-hidden"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300"
                />
                <motion.div
                  className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0"
                  whileHover={{ opacity: 1 }}
                >
                  <div className="text-white text-center">
                    <p className="font-bold text-lg mb-2">View Project</p>
                    <div className="flex space-x-4">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub Repo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

