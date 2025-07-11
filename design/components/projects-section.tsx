import { Button } from "@/components/ui/button"
import { ExternalLink, Github, TrendingUp, Users, Clock } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Sales Forecasting",
      description:
        "Built a comprehensive machine learning model using ARIMA algorithm to predict sales trends and patterns. Created interactive Power BI dashboards for real-time monitoring and reporting.",
      technologies: ["Python", "ARIMA", "Scikit-learn", "Power BI", "SQL"],
      achievements: [
        { icon: TrendingUp, text: "Reduced forecast errors by 30%" },
        { icon: Clock, text: "Cut reporting time by 40%" },
      ],
      category: "Machine Learning",
      featured: true,
    },
    {
      title: "SLConnect – Skilled Laborer Job Platform",
      description:
        "Developed a comprehensive job-matching mobile application connecting skilled laborers with employers. Designed intuitive UI/UX and implemented real-time matching algorithms.",
      technologies: ["Figma", "Flutter", "Firebase"],
      achievements: [
        { icon: Clock, text: "Reduced hiring time by 40%" },
        { icon: Users, text: "4.5/5 user rating" },
        { icon: TrendingUp, text: "Increased worker earnings by 30%" },
      ],
      category: "Mobile Development",
      featured: true,
    },
  ]

  const certifications = [
    "SQL for Data Analysis (LinkedIn, 2025)",
    "Excel Essential Training (LinkedIn, 2025)",
    "30 Days of Google Cloud (Google, 2021)",
    "Computer Vision Deep Learning Workshop with TensorFlow",
    "Python and Deep Learning Bootcamp - GDG Ranchi",
  ]

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Showcasing my expertise in data science and software development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`glass-card rounded-xl p-8 hover:bg-white/5 transition-all duration-300 ${
                project.featured ? "border-2 border-cyan-400/30" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="px-3 py-1 backdrop-blur-md bg-cyan-400/10 text-cyan-300 text-sm font-medium rounded-full border border-cyan-400/30">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-3 mb-2">{project.title}</h3>
                </div>
                {project.featured && (
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-400 to-blue-400 text-black text-sm font-medium rounded-full">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-white/70 mb-6 leading-relaxed text-lg">{project.description}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-white mb-3">Key Results:</h4>
                  <div className="space-y-3">
                    {project.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center space-x-3 text-green-400">
                        <achievement.icon className="h-5 w-5" />
                        <span className="font-medium">{achievement.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 backdrop-blur-md bg-white/5 text-white/80 rounded-full text-sm font-medium border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  className="glass-effect border-cyan-400/30 text-cyan-300 hover:bg-cyan-500/20 bg-transparent"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
                <Button
                  variant="outline"
                  className="glass-effect border-green-400/30 text-green-300 hover:bg-green-500/20 bg-transparent"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Certifications & Courses</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-3 backdrop-blur-md bg-white/5 rounded-lg border border-white/10"
              >
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-white/80">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
