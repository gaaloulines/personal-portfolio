"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import { FaHome, FaUser, FaCog, FaBriefcase, FaCode, FaFileAlt, FaEnvelope } from "react-icons/fa"
import { useActiveSection } from "../hooks/useActiveSection"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const activeSection = useActiveSection()

  const menuItems = [
    { name: "Home", icon: FaHome },
    { name: "About", icon: FaUser },
    { name: "Skills", icon: FaCog },
    { name: "Services", icon: FaBriefcase },
    { name: "Projects", icon: FaCode },
    { name: "Resume", icon: FaFileAlt },
    { name: "Contact", icon: FaEnvelope },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = e.currentTarget.href.split("#")[1]
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed w-full bg-background/80 backdrop-blur-md z-50 dark:bg-background/80"
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <motion.div whileHover={{ scale: 1.1 }} className="text-2xl font-bold">
          Ines Gaaloul
        </motion.div>
        <div className="hidden md:flex items-center space-x-4">
          <ul className="flex space-x-4">
            {menuItems.map((item) => (
              <motion.li key={item.name} whileHover={{ scale: 1.1 }}>
                <Link
                  href={`#${item.name.toLowerCase()}`}
                  className={`hover:text-primary transition-colors flex items-center ${
                    activeSection === item.name.toLowerCase() ? "text-blue-500 font-bold" : ""
                  }`}
                  onClick={handleScroll}
                >
                  <item.icon className="mr-1" />
                  <span>{item.name}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="ml-4 text-foreground focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-background dark:bg-background py-2"
        >
          <ul className="flex flex-col items-center">
            {menuItems.map((item) => (
              <motion.li key={item.name} whileHover={{ scale: 1.1 }} className="py-2">
                <Link
                  href={`#${item.name.toLowerCase()}`}
                  onClick={() => {
                    setIsOpen(false)
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    handleScroll
                  }}
                  className={`hover:text-primary transition-colors flex items-center ${
                    activeSection === item.name.toLowerCase() ? "text-blue-500 font-bold" : ""
                  }`}
                >
                  <item.icon className="mr-2" />
                  <span>{item.name}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.header>
  )
}

export default Header

