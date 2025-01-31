import Header from "@/components/Header"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Services from "@/components/Services"
import Projects from "@/components/Projects"
import Resume from "@/components/Resume"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ScrollToTop from "@/components/ScrollToTop"

export default function Home() {
  return (
    <main className="dark bg-gradient-to-br from-purple-900 to-indigo-900 min-h-screen text-white">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  )
}

