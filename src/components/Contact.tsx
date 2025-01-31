"use client"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone } from "lucide-react"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

const Contact = () => {
  const { ref: leftRef, controls: leftControls, variants: leftVariants } = useScrollAnimation("left")
  const { ref: rightRef, controls: rightControls, variants: rightVariants } = useScrollAnimation("right")

  const iconVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location:",
      content: "Sousse,Tunisia",
      href: "https://google/maps/tunisia",
      color: "rgb(59, 130, 246)", // blue-500
    },
    {
      icon: Mail,
      title: "Email:",
      content: "ines.gaaloul18@gmail.com",
      href: "mailto:ines.gaaloul18@gmail.com",
      color: "rgb(16, 185, 129)", // green-500
    },
    {
      icon: Phone,
      title: "Call:",
      content: "+216 22209847",
      href: "tel:+21622209847",
      color: "rgb(236, 72, 153)", // pink-500
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            ref={leftRef}
            initial="hidden"
            animate={leftControls}
            variants={leftVariants}
            className="flex flex-col justify-between"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={info.title}
                href={info.href}
                className="flex items-center gap-6 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover="hover"
              >
                <motion.div
                  className="flex items-center justify-center w-16 h-16 rounded-full bg-background/10"
                  variants={iconVariants}
                  style={{ backgroundColor: `${info.color}20` }}
                >
                  <info.icon
                    className="w-8 h-8 transition-colors duration-200"
                    style={{
                      color: info.color,
                    }}
                  />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{info.title}</h3>
                  <p className="text-foreground/60 group-hover:text-primary transition-colors">{info.content}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>
          <motion.form
            ref={rightRef}
            initial="hidden"
            animate={rightControls}
            variants={rightVariants}
            className="space-y-4"
          >
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 text-gray-700 bg-white rounded dark:bg-gray-800 dark:text-gray-200"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 text-gray-700 bg-white rounded dark:bg-gray-800 dark:text-gray-200"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 text-gray-700 bg-white rounded dark:bg-gray-800 dark:text-gray-200"
                required
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/80 text-white font-bold py-2 px-4 rounded w-full"
              type="submit"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact

