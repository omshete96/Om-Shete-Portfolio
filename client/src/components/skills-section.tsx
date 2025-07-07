import { motion } from "framer-motion";
import { BrainCircuit, Code, Server, Settings } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    color: "text-primary",
    skills: [
      { name: "Next.js/React", level: 70 },
      { name: "JavaScript", level: 88 },
      { name: "HTML/CSS", level: 70 },
    ],
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "text-secondary",
    skills: [
      { name: "Node.js/Express", level: 85 },
      { name: "Python", level: 82 },
      { name: "Java", level: 80 },
    ],
  },
  {
    title: "Programming & Tools",
    icon: Settings,
    color: "text-accent",
    skills: [
      { name: "C++", level: 95 },
      { name: "Git/GitHub", level: 90 },
      { name: "Database Systems", level: 85 },
    ],
  },
  {
    title: "AI/ML",
    icon: BrainCircuit,
    color: "text-green-500",
    skills: [
      { name: "Artificial Intelligence", level: 80 },
      { name: "Machine Learning", level: 80 },
      { name: "Data Science", level: 80 },
    ],
  },
];

const technologies = [
  "C++","Python","Java","JavaScript","Next.js", "React.js", "Node.js","Express.js",    
   "MySQL", "MongoDB", "PostgreSQL", "Oracle", "Git & GitHub",
  "Artificial Intelligence", "Machine Learning", "Data Science", "Docker"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-dark-secondary p-8 rounded-2xl border border-glass-border card-glow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`text-4xl mb-4 ${category.color}`}>
                <category.icon className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-tertiary rounded-full h-2">
                      <motion.div
                        className="skill-bar h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-dark-secondary p-8 rounded-2xl border border-glass-border card-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center gradient-text">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                className="tech-tag px-4 py-2 rounded-full font-medium text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
