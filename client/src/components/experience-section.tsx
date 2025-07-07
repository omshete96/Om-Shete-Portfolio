import { motion } from "framer-motion";

const experiences = [
  {
    title: "AI Intern",
    company: "Edunet Foundation",
    period: "Jan - Feb 2025",
    description: "Explored AI/ML concepts and applications, contributing to educational technology initiatives and AI research projects.",
    color: "bg-gradient-to-r from-primary to-purple-500",
  },
  {
    title: "Node.js Intern",
    company: "Celebal Technologies",
    period: "May - July 2025",
    description: "Learned and implement about how Node.js is used in backend and helpful for various backend operations",
    color: "bg-gradient-to-r from-secondary to-primary",
  },
];

const highlights = [
  {
    title: "Competitive Programming",
    description: "Solved 350+ DSA problems on LeetCode, 5-star HackerRank, 3-star CodeChef",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
  },
  {
    title: "Academic Excellence",
    description: "8.53 CGPA in Computer Engineering (Aggregate Till Sem VI), 78.17% in HSC",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
  },
  {
    title: "Technology Learning",
    description: "Enthusiastic about emerging technologies and continuous learning",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300",
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-dark-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Professional Experience</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My journey through various roles and companies that shaped my expertise
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line with glow effect */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full shadow-lg"></div>
            
            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.title}-${experience.company}`}
                className={`relative flex items-center justify-between mb-12 ${
                  index % 2 === 0 ? '' : 'flex-row-reverse'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                  <div className="bg-dark-secondary p-6 rounded-xl border border-glass-border card-glow">
                    <h3 className="text-xl font-semibold text-primary mb-2">{experience.title}</h3>
                    <h4 className="text-lg font-medium text-gray-300 mb-2">{experience.company}</h4>
                    <p className="text-gray-400 mb-3">{experience.period}</p>
                    <p className={`text-sm text-gray-300 ${experience.company === 'Edunet Foundation' ? 'text-justify' : ''}`}>{experience.description}</p>
                  </div>
                </div>
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 ${experience.color} rounded-full border-4 border-dark-primary shadow-lg animate-glow`}></div>
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              className="text-center p-6 bg-dark-secondary rounded-xl border border-glass-border card-glow"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">{highlight.title}</h3>
              <p className="text-gray-400 text-sm">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
