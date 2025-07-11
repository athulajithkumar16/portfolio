import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science & Engineering",
      institution: "APJ Abdul Kalam Technological University",
      location: "Kerala, India",
      period: "Dec 2020 – June 2024",
      type: "Bachelor's Degree",
      activities: [
        "Media Head - Community of Developers (Dept of Computer Science)",
        "Organized flagship event BEACH HACK 5",
        "Volunteer - CODe Design Week",
      ],
    },
    {
      degree: "Senior Secondary – Computer Science",
      institution: "Central Board of Secondary Education",
      location: "Kerala, India",
      period: "June 2018 – March 2020",
      type: "High School",
      activities: ["Student Council Head – Coordinated school events and student initiatives"],
    },
  ]

  const achievements = [
    "Organized BEACH HACK 5 - Major hackathon event",
    "Media Head for Community of Developers",
    "Student Council Head with leadership responsibilities",
    "Active participant in technical workshops and events",
  ]

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">Academic background and leadership experience</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="glass-card rounded-xl p-6 hover:bg-white/5 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="backdrop-blur-md bg-white/5 p-3 rounded-lg border border-cyan-400/30">
                    <GraduationCap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <span className="px-3 py-1 backdrop-blur-md bg-white/5 text-white/80 text-sm font-medium rounded-full border border-white/10">
                      {edu.type}
                    </span>
                    <h3 className="text-xl font-semibold text-white mt-3 mb-3">{edu.degree}</h3>
                    <div className="space-y-2 text-white/60 mb-4">
                      <div className="flex items-center space-x-2">
                        <GraduationCap className="h-4 w-4" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <h4 className="font-semibold text-white mb-2">Activities & Leadership:</h4>
                    <ul className="space-y-1">
                      {edu.activities.map((activity, actIndex) => (
                        <li key={actIndex} className="text-white/70 flex items-start">
                          <span className="text-cyan-400 mr-2">▸</span>
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-5 w-5 text-cyan-400" />
                <h3 className="text-lg font-semibold text-white">Key Achievements</h3>
              </div>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-2 backdrop-blur-md bg-white/5 rounded border border-white/10"
                  >
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/80 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Academic Focus</h3>
              <div className="flex flex-wrap gap-2">
                {["Computer Science", "Data Structures", "Algorithms", "Database Systems", "Software Engineering"].map(
                  (focus, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 backdrop-blur-md bg-cyan-400/10 text-cyan-300 rounded-full text-sm font-medium border border-cyan-400/30"
                    >
                      {focus}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
