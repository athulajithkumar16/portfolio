import { Calendar, MapPin, Building } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Luminar Technolab",
      location: "Kerala, India",
      period: "August 2024 – April 2025",
      type: "Internship",
      responsibilities: [
        "Collect, clean, and organize data from internal and external sources",
        "Conducted trend analysis and pattern recognition using Python and SQL",
        "Create dashboards and reports using Excel, SQL and Power BI",
        "Cleaned and analyzed 10K+ rows of sales data using Python (Pandas)",
      ],
      skills: ["Python", "SQL", "Power BI", "Excel", "Pandas", "Data Analysis"],
    },
    {
      title: "Financial Documentation",
      company: "N&N Infra & Interiors",
      location: "Kerala, India",
      period: "April 2024 – July 2024",
      type: "Contract",
      responsibilities: [
        "Maintain and update financial ledgers, ensuring accuracy",
        "Filing of financial documents, including invoices, budgets, and contracts",
        "Analyzed financial trends using Excel, reducing variation by 15%",
      ],
      skills: ["Excel", "Financial Analysis", "Data Management", "Documentation"],
    },
    {
      title: "Database Update & Quality Assurance",
      company: "Stratecis FZ LLC - I4G Platform",
      location: "Remote",
      period: "May 2021 – June 2021",
      type: "Remote",
      responsibilities: [
        "Performed QA testing to identify bugs, broken links and UX issues",
        "Report issues clearly to the development team for resolution",
      ],
      skills: ["Quality Assurance", "Testing", "Bug Reporting", "Database Management"],
    },
  ]

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">My journey in data science and technology</p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-blue-400"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12">
                <div className="absolute left-0 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-black rounded-full"></div>
                </div>

                <div className="glass-card rounded-xl p-6 hover:bg-white/5 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center space-x-4 text-white/60 mb-2">
                        <div className="flex items-center space-x-1">
                          <Building className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-white/50" />
                        <span className="text-white/60">{exp.period}</span>
                        <span className="px-2 py-1 backdrop-blur-md bg-cyan-400/10 text-cyan-300 text-xs rounded-full border border-cyan-400/30">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-white mb-3">Key Responsibilities:</h4>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="text-white/70 flex items-start">
                          <span className="text-cyan-400 mr-3 mt-1">▸</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 backdrop-blur-md bg-cyan-400/10 text-cyan-300 rounded-full text-sm font-medium border border-cyan-400/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
