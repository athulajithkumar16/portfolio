"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, Github, Linkedin } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement('a')
    link.href = '/Athul K A Resume.pdf'
    link.download = 'Athul K A Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const titleText = "Hi, I'm Athul K A"
  const words = titleText.split(" ")

  const getWordOpacity = (index: number) => {
    const scrollProgress = Math.max(0, scrollY) / 300
    const wordProgress = scrollProgress * words.length - index
    return Math.min(1, Math.max(0.2, wordProgress))
  }

  return (
    <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="transition-all duration-300"
                  style={{
                    color: word.includes("Athul") 
                      ? `rgba(34, 211, 238, ${getWordOpacity(index)})` 
                      : `rgba(255, 255, 255, ${getWordOpacity(index)})`,
                  }}
                >
                  {word}{" "}
                </span>
              ))}
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Computer Science graduate skilled in Python, SQL, and Power BI. Experienced in data analysis, forecasting,
              and dashboarding. Passionate about transforming data into actionable insights for business growth.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="glass-effect border-cyan-400/30 hover:bg-cyan-500/20 text-cyan-300 bg-cyan-400/10"
            >
              <Mail className="mr-2 h-4 w-4" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="glass-effect border-blue-400/30 hover:bg-blue-500/20 text-blue-300 bg-transparent"
              onClick={handleDownloadResume}
            >
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="mailto:athulajithkumar16@gmail.com"
              className="text-white/60 hover:text-cyan-400 transition-colors p-2"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/athulka16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-cyan-400 transition-colors p-2"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/athulajithkumar16"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 hover:text-cyan-400 transition-colors p-2"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
