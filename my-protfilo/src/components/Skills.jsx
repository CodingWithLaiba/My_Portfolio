import { motion } from "framer-motion";
import {
  SiHtml5,

  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiJquery,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiGithub,
   SiNodedotjs,
} from "react-icons/si";

import { PiFileCss} from "react-icons/pi";
import { VscVscodeInsiders } from "react-icons/vsc";
import { DiResponsive } from "react-icons/di";
import { TbApi } from "react-icons/tb";


const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: PiFileCss, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React.js", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "jQuery", icon: SiJquery, color: "#0769AD" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Styling & Tools",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#ffffff" },
      { name: "VS Code", icon: VscVscodeInsiders, color: "#007ACC" },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Responsive Design", icon: DiResponsive, color: "#ffffff" },
      { name: "REST API Integration", icon: TbApi, color: "" },
      { name: "Agile/Scrum", icon: null, color: "" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-16 flex items-center gap-4">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {skillCategories.map((category, idx) => (
              <div key={idx}>
                <h3 className="text-lg font-medium text-muted-foreground mb-6 uppercase tracking-wider text-sm">
                  {category.title}
                </h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex flex-wrap gap-3"
                >
                  {category.skills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="flex items-center gap-2 px-4 py-2 bg-secondary border border-border/50 rounded-lg text-sm font-medium hover:border-primary/50 transition-colors shadow-sm cursor-default"
                      data-testid={`skill-badge-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    >
                      {skill.icon && (
                        <skill.icon
                          style={{ color: skill.color }}
                          className="w-4 h-4"
                        />
                      )}
                      {skill.name}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
