import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react"

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "athulajithkumar16@gmail.com",
      href: "mailto:athulajithkumar16@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9495421605",
      href: "tel:+919495421605",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/athulka16",
      href: "https://linkedin.com/in/athulka16",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/athulajithkumar16",
      href: "https://github.com/athulajithkumar16",
    },
  ]

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Ready to collaborate on data-driven projects or discuss opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center space-x-4 p-4 backdrop-blur-md bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 group border border-white/10"
                >
                  <div className="backdrop-blur-md bg-white/5 p-3 rounded-lg group-hover:bg-white/10 transition-colors border border-cyan-400/30">
                    <contact.icon className="h-5 w-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{contact.label}</p>
                    <p className="text-white/70">{contact.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-xl p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Current Status</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 backdrop-blur-md bg-green-400/10 rounded-lg border border-green-400/30">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span className="text-white/80 font-medium">Available for new opportunities</span>
              </div>
              <div className="flex items-center space-x-3 p-4 backdrop-blur-md bg-cyan-400/10 rounded-lg border border-cyan-400/30">
                <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                <span className="text-white/80 font-medium">Open to data science roles</span>
              </div>
              <div className="flex items-center space-x-3 p-4 backdrop-blur-md bg-white/5 rounded-lg border border-white/10">
                <MapPin className="h-4 w-4 text-white/50" />
                <span className="text-white/80 font-medium">Based in Kerala, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
