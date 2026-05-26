import { motion } from "framer-motion";
// import { GoArrowUpRight } from "react-icons/go";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    number: "01",
    title: "Blogging Platform",
    description:
      "Full-stack blogging platform with secure authentication, role-based access control (RBAC), and separate admin/user dashboards. Features include post management, category organization, content moderation, and responsive UI design.",
    tech: ["Laravel", "PHP", "Bootstrap", "JavaScript", "MySQL"],
    github: "https://github.com/Riha-Laiba-Dev-Studio/Blogging_website",
    image: "/projects_img/blogging.jpg",
    gradient: "from-teal-500 via-cyan-500 to-emerald-500",
    bgGlow: "from-teal-500/18 to-cyan-600/10",
    accentColor: "text-teal-400",
    borderHover: "hover:border-teal-500/40",
  },

  {
    number: "02",
    title: "Warehouse Management System",
    description:
      "Inventory and warehouse management system with authentication, dashboard analytics, stock tracking, product management, and role-based permissions. Designed to streamline warehouse operations with a responsive admin interface.",
    tech: ["Laravel", "PHP", "Bootstrap", "JavaScript", "MySQL"],
    github: "https://github.com/Riha-Laiba-Dev-Studio/Ware-house-management",
    image: "/projects_img/WMS.jpg",
    gradient: "from-teal-500 via-cyan-500 to-emerald-500",
    bgGlow: "from-teal-500/18 to-cyan-600/10",
    accentColor: "text-teal-400",
    borderHover: "hover:border-teal-500/40",
  },

  {
    number: "03",
    title: "Smart Notes App",
    description:
      "Modern note-taking application built with Laravel MVC architecture featuring CRUD functionality, authentication, responsive design, and clean UI interactions for efficient note organization.",
    tech: ["Laravel", "PHP", "Tailwind CSS", "JavaScript", "MySQL"],
    github: "https://github.com/Riha-Laiba-Dev-Studio/Smart-NotesApp",
    image: "/projects_img/user-dashboard-light.png",
    gradient: "from-cyan-400 via-teal-400 to-sky-400",
    bgGlow: "from-cyan-500/15 to-teal-500/10",
    accentColor: "text-cyan-400",
    borderHover: "hover:border-cyan-500/40",
  },

  {
    number: "04",
    title: "Mobile Bio Lab",
    description:
      "Responsive laboratory management application with secure authentication, sample tracking, and modern dashboard UI. Built with scalable React architecture.",
    tech: ["React.js", "Next.js", "Tailwind CSS"],
    github: "https://github.com/CodingWithLaiba/MobileBioLab",
    image: "/projects_img/mobilebiolab.jpg",
    gradient: "from-emerald-500 via-teal-500 to-cyan-400",
    bgGlow: "from-emerald-500/18 to-teal-500/10",
    accentColor: "text-emerald-400",
    borderHover: "hover:border-emerald-500/40",
  },

  {
    number: "05",
    title: "Weather App",
    description:
      "Real-time weather forecasting application with live API integration, search functionality, and responsive UI.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "HTML5"],
    github: "https://github.com/CodingWithLaiba/weather-app",
    image: "/projects_img/weatherapp.jpg",
    gradient: "from-sky-400 via-cyan-400 to-teal-400",
    bgGlow: "from-sky-500/15 to-cyan-500/10",
    accentColor: "text-sky-400",
    borderHover: "hover:border-sky-500/40",
  },

  {
    number: "06",
    title: "Calculator App",
    description:
      "Interactive calculator application with responsive design and optimized arithmetic operations built using JavaScript.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/CodingWithLaiba/Calculator-app",
    image: "/projects_img/calculator.jpg",
    gradient: "from-orange-400 via-amber-400 to-yellow-400",
    bgGlow: "from-orange-500/15 to-yellow-500/10",
    accentColor: "text-orange-400",
    borderHover: "hover:border-orange-500/40",
  },

  {
    number: "07",
    title: "AI Assistant App",
    description:
      "AI-powered assistant with real-time chat interface and OpenAI API integration.",
    tech: ["React.js", "Tailwind CSS", "JavaScript", "OpenAI API"],
    github: "https://github.com/CodingWithLaiba/AIAPP",
    image: "/projects_img/AIAPP.jpg",
    gradient: "from-fuchsia-500 via-cyan-500 to-teal-400",
    bgGlow: "from-fuchsia-500/15 to-cyan-500/10",
    accentColor: "text-fuchsia-400",
    borderHover: "hover:border-fuchsia-500/40",
  },

  {
    number: "08",
    title: "Hoster PK",
    description:
      "Modern hosting website UI designed for showcasing hosting plans, services, and pricing with a clean responsive layout and user-friendly interface.",
    tech: ["HTML", "CSS", "Bootstrap"],
    github: "https://codingwithlaiba.github.io/HosterPk/",
    image: "/projects_img/hosterpk.jpg",
    gradient: "from-teal-300 via-cyan-300 to-sky-300",
    bgGlow: "from-teal-300/15 to-cyan-400/10",
    accentColor: "text-teal-300",
    borderHover: "hover:border-teal-400/40",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 bg-card/20 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <p className="text-primary text-sm font-mono uppercase mb-3">
                What I've Built
              </p>
              <h2 className="text-4xl md:text-5xl font-bold">
                Featured{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                  Projects
                </span>
              </h2>
            </div>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="relative group h-full flex flex-col bg-card border border-border/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* IMAGE */}
                  <div
                    className={`relative h-44 flex items-center justify-center bg-gradient-to-br ${project.bgGlow}`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                    />

                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <span
                      className={`absolute top-3 right-4 text-4xl font-bold opacity-20 ${project.accentColor}`}
                    >
                      {project.number}
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold group-hover:text-primary">
                        {project.title}
                      </h3>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg bg-secondary hover:bg-primary/10"
                      >
                        <FiGithub />
                      </a>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 flex-grow">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className={`text-xs px-2 py-1 rounded border ${project.accentColor}`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`h-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100`}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
