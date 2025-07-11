import { Code, Database, BarChart3, Wrench } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "C", level: 70 },
      ],
    },
    {
      title: "Data Analysis & ML",
      icon: BarChart3,
      skills: [
        { name: "Pandas & NumPy", level: 88 },
        { name: "Machine Learning", level: 82 },
        { name: "Statistical Analysis", level: 80 },
      ],
    },
    {
      title: "Visualization Tools",
      icon: Database,
      skills: [
        { name: "Power BI", level: 85 },
        { name: "Excel", level: 90 },
        { name: "Matplotlib", level: 75 },
      ],
    },
    {
      title: "Other Tools",
      icon: Wrench,
      skills: [
        { name: "Figma", level: 70 },
        { name: "Adobe Creative Suite", level: 65 },
        { name: "Firebase", level: 60 },
      ],
    },
  ]

  const languages = [
    { name: "English", level: "Advanced" },
    { name: "Malayalam", level: "Proficient" },
    { name: "Hindi", level: "Intermediate" },
    { name: "Tamil", level: "Intermediate" },
    { name: "French", level: "Novice" },
  ]

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Technical proficiencies and tools I use to solve complex data problems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="glass-card rounded-xl p-6 hover:bg-white/5 transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 backdrop-blur-md bg-white/5 border border-cyan-400/30 rounded-lg">
                  <category.icon className="h-5 w-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-white/80">{skill.name}</span>
                      <span className="text-sm text-white/60">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/5 rounded-full h-2 backdrop-blur-sm">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-blue-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-xl p-6">
          <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
          <div className="flex flex-wrap gap-3">
            {languages.map((lang, index) => (
              <span
                key={index}
                className="px-4 py-2 backdrop-blur-md bg-white/5 rounded-full text-sm font-medium text-white/80 border border-white/10"
              >
                {lang.name} - {lang.level}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
