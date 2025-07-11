"use client"

import { useEffect, useState } from "react"

export function AboutSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const highlights = [
    "Data Analysis & Visualization",
    "Machine Learning & Forecasting",
    "Dashboard Development",
    "Statistical Analysis",
    "Business Intelligence",
  ]

  const introText =
    "Computer Science graduate with expertise in data science and analytics. Specialized in collecting, cleaning, and analyzing large datasets to drive business decisions through Python programming, SQL database management, and Power BI visualizations. Successfully reduced forecast errors by 30% through machine learning models and improved reporting efficiency by 40%. Passionate about leveraging data to solve complex business problems and drive strategic decision-making."

  const words = introText.split(" ")

  const getWordOpacity = (index: number) => {
    const scrollProgress = Math.max(0, scrollY - 300) / 500
    const wordProgress = scrollProgress * words.length - index
    return Math.min(1, Math.max(0.2, wordProgress))
  }

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Passionate about transforming data into actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">Professional Summary</h3>
            <p className="text-white/80 mb-6 leading-relaxed text-lg">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="transition-all duration-300"
                  style={{
                    color: `rgba(255, 255, 255, ${getWordOpacity(index)})`,
                  }}
                >
                  {word}{" "}
                </span>
              ))}
            </p>
            <div className="flex flex-wrap gap-2">
              {highlights.map((highlight, index) => (
                <span
                  key={index}
                  className="px-3 py-1 backdrop-blur-md bg-cyan-400/10 text-cyan-300 rounded-full text-sm font-medium border border-cyan-400/30"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-xl p-6 border-l-4 border-l-cyan-400">
              <h4 className="font-semibold text-white mb-2">Education</h4>
              <p className="text-white/80">B.Tech in Computer Science & Engineering</p>
              <p className="text-sm text-white/60 mt-1">APJ Abdul Kalam Technological University</p>
            </div>

            <div className="glass-card rounded-xl p-6 border-l-4 border-l-green-400">
              <h4 className="font-semibold text-white mb-2">Key Achievement</h4>
              <p className="text-white/80">Built ML models reducing forecast errors by 30%</p>
              <p className="text-sm text-white/60 mt-1">Sales Forecasting Project</p>
            </div>

            <div className="glass-card rounded-xl p-6 border-l-4 border-l-blue-400">
              <h4 className="font-semibold text-white mb-2">Specialization</h4>
              <p className="text-white/80">Data Analysis, Machine Learning & Business Intelligence</p>
              <p className="text-sm text-white/60 mt-1">Python, SQL, Power BI Expert</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
