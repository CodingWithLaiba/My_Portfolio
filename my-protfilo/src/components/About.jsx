import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Mail, ExternalLink } from "lucide-react";
import { FiGift, FiGithub } from "react-icons/fi";

const stats = [
  { value: "2+", label: "Year Experience" },
  { value: "6+", label: "Projects Built" },
  { value: "10+", label: "Tech Skills" },
];

const experience = [
  {
    role: "Associate Software Engineer Intern",
    company: "CodeSyncs",
    period: "Jan 2024 – Jun 2024",
    type: "Remote",
    color: "from-teal-500 to-cyan-500",
    points: [
      "Developed responsive web pages using HTML5, CSS3, Tailwind CSS, Bootstrap with a mobile-first approach",
      "Built dynamic UI components using JavaScript and jQuery in Agile workflow",
      "Refactored legacy code, participated in code reviews and sprint planning",
    ],
  },
];

const education = [
  {
    degree: "BS Computer Science",
    school: "Virtual University of Pakistan",
    period: "Mar 2024 – Feb 2026",
    color: "from-cyan-400 to-teal-400",
  },
  {
    degree: "Associate Degree in Computer Science",
    school: "Riphah International College",
    period: "Nov 2021 – Aug 2023",
    color: "from-teal-400 to-emerald-400",
  },
];
const certificates = [
  {
    title: "Advanced Web Application Development",
    organization: "NAVTTC",
    period: "Feb 2026 – May 2026",
    color: "from-teal-400 to-cyan-400",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="max-w-6xl mx-auto"
        >
          <p className="text-primary text-sm font-mono tracking-widest uppercase mb-3">Who I Am</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-16 leading-tight">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Me
            </span>
          </h2>

          {/* Top layout: Avatar + Bio + Stats */}
          <div className="grid lg:grid-cols-[320px_1fr] gap-12 mb-20 items-start">
            {/* Avatar card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55 }}
              className="flex flex-col items-center lg:items-start gap-6"
            >
              {/* Profile image frame */}
              <div className="relative w-56 h-56 mx-auto lg:mx-0">
                {/* Glow ring */}
                <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-primary via-blue-400 to-violet-600 opacity-80 blur-sm" />
                <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-br from-primary via-blue-400 to-violet-600" />
                {/* Inner container */}
                <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-[hsl(222_47%_12%)] to-[hsl(250_30%_16%)] flex items-center justify-center overflow-hidden">
                  {/* Abstract pattern */}
                  <svg
                    viewBox="0 0 200 200"
                    className="absolute inset-0 w-full h-full opacity-20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <radialGradient id="pg" cx="50%" cy="50%">
                        <stop offset="0%" stopColor="hsl(250,84%,65%)" />
                        <stop offset="100%" stopColor="transparent" />
                      </radialGradient>
                    </defs>
                    <circle cx="100" cy="100" r="100" fill="url(#pg)" />
                    {[40, 60, 80, 100, 120].map((r, i) => (
                      <circle key={i} cx="100" cy="100" r={r} fill="none" stroke="hsl(250,84%,65%)" strokeWidth="0.5" opacity={0.4} />
                    ))}
                    <line x1="0" y1="100" x2="200" y2="100" stroke="hsl(250,84%,65%)" strokeWidth="0.5" opacity={0.3} />
                    <line x1="100" y1="0" x2="100" y2="200" stroke="hsl(250,84%,65%)" strokeWidth="0.5" opacity={0.3} />
                  </svg>
                  {/* Initials */}
                  <div className="relative z-10 text-center select-none">
                    <span className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-teal-300 to-cyan-200">
                      LI
                    </span>
                    <p className="text-xs text-primary/80 font-mono tracking-widest mt-1">LAIBA IJAZ</p>
                  </div>
                </div>
              </div>

              {/* Info pills */}
              <div className="flex flex-col gap-2 w-full">
                <a
                  href="mailto:laibaijaz904@gmail.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  data-testid="link-email-about"
                >
                  <Mail className="w-4 h-4 text-primary/70 group-hover:text-primary" />
                  laibaijaz904@gmail.com
                </a>
                <span className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary/70" />
                  Sheikhupura, Punjab, Pakistan
                </span>
                <a
                  href="https://github.com/CodingWithLaiba"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
                  data-testid="link-github-about"
                >
                  <FiGithub className="w-4 h-4 text-primary/70 group-hover:text-primary" />
                  github.com/CodingWithLaiba
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-2 w-full pt-2">
                {stats.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex flex-col items-center justify-center bg-secondary/60 rounded-xl py-3 px-1 border border-border/40 text-center"
                  >
                    <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary to-blue-400">
                      {s.value}
                    </span>
                    <span className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{s.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="flex flex-col justify-center gap-6 pt-4"
            >
              <p className="text-foreground/90 text-xl leading-relaxed font-medium">
                Detail-oriented <span className="text-primary">Frontend Developer</span> with hands-on experience building responsive, full-stack web applications.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                I specialise in <span className="text-foreground/80 font-medium">React.js</span>, <span className="text-foreground/80 font-medium">Laravel</span>, and modern JavaScript — crafting role-based admin systems, RESTful integrations, and clean UI/UX interfaces that prioritize performance and usability.
              </p>
              <p className="text-muted-foreground text-base leading-relaxed">
                Quick learner with a collaborative mindset, I thrive in Agile environments and have a proven ability to deliver quality projects on time. Currently open to new opportunities where I can contribute and grow.
              </p>

              {/* Highlight tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["React.js", "Laravel", "Tailwind CSS", "MySQL", "REST APIs", "Agile"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary/90 hover:border-primary/50 hover:bg-primary/10 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Experience + Education */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="flex items-center gap-3 text-lg font-semibold mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20">
                  <Briefcase className="w-4 h-4 text-primary" />
                </span>
                Experience
              </h3>

              {experience.map((job, i) => (
                <div
                  key={i}
                  className="relative pl-5 border-l-2 border-border/60 hover:border-primary/50 transition-colors"
                >
                  {/* Dot */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-gradient-to-br from-primary to-blue-400 shadow-md shadow-primary/30" />

                  <div className="bg-card border border-border/50 rounded-2xl p-5 hover:border-border transition-all group overflow-hidden relative">
                    {/* Top accent line */}
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${job.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h4 className="font-semibold text-foreground text-sm">{job.role}</h4>
                        <p className="text-primary text-sm font-medium mt-0.5">{job.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-md">{job.period}</span>
                        <span className="text-xs text-muted-foreground/60">{job.type}</span>
                      </div>
                    </div>

                    <ul className="space-y-1.5">
                      {job.points.map((pt, pi) => (
                        <li key={pi} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/60 flex-shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="flex items-center gap-3 text-lg font-semibold mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20">
                  <GraduationCap className="w-4 h-4 text-primary" />
                </span>
                Education
              </h3>

              <div className="space-y-4">
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.12 }}
                    className="relative group bg-card border border-border/50 rounded-2xl p-5 hover:border-border transition-all overflow-hidden"
                  >
                    {/* Left color bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${edu.color} rounded-l-2xl`} />

                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-[0.04] transition-opacity`} />

                    <div className="relative z-10 pl-3">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">{edu.degree}</h4>
                          <p className="text-muted-foreground text-xs mt-1">{edu.school}</p>
                        </div>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-md whitespace-nowrap">{edu.period}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            {/* Certificates */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="flex items-center gap-3 text-lg font-semibold mb-6">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20">
                  <FiGift className="w-4 h-4 text-primary" />
                </span>
                Certificates
              </h3>

              <div className="space-y-4">
                {certificates.map((cert, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.12 }}
                    className="relative group bg-card border border-border/50 rounded-2xl p-5 hover:border-border transition-all overflow-hidden"
                  >
                    {/* Left color bar */}
                    <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${cert.color} rounded-l-2xl`} />

                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-[0.04] transition-opacity`} />

                    <div className="relative z-10 pl-3">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h4 className="font-semibold text-foreground text-sm">{cert.title}</h4>
                          <p className="text-muted-foreground text-xs mt-1">{cert.organization}</p>
                        </div>
                        <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-md whitespace-nowrap">{cert.period}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
