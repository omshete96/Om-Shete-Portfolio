import { Button } from "@/components/ui/button";
import { ExternalLink, GithubIcon } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Web Based Encryption & Decryption Tool",
    description: "A secure web-based data encryption/decryption tool built with Next.js frontend and C++ backend. Provides fast, reliable data encryption with modern web interface for easy file and text processing.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "C++", "Encryption"],
    liveUrl: "https://web-based-encryption-decryption-too.vercel.app/",
    githubUrl: "https://github.com/omshete96/Web-Based-Data-Encryption-Decryption-Tool",
  },
  {
    title: "User Authentication System",
    description: "Developed a secure user authentication system using Next.js and MySQL, implementing password hashing for secure storage. The system ensures data privacy and security with a clean, user-friendly interface.",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "MySQL", "Authentication"],
    // liveUrl: "#",
    githubUrl: "https://github.com/omshete96/User-Authentication-System",
  },
  {
    title: "Netflix Movie Recommender System",
    description: "A terminal-based Netflix movie recommender system using machine learning (TF-IDF + cosine similarity) to suggest similar movies based on descriptions, genres, cast, and director. Built with Python and pandas.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "Machine Learning", "Pandas"],
    // liveUrl: "#",
    githubUrl: "https://github.com/omshete96/Netflix-Movie-Recommender-System",
  },
  {
    title: "News Aggregator",
    description: "Developed a news aggregator with Next.js that uses News API to fetch and display real-time headlines. Demonstrated skills in API integration and modern web development practices.",
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "News API", "JavaScript"],
    // liveUrl: "#",
    githubUrl: "https://github.com/omshete96/News-Aggregator",
  },
  {
    title: "Automatic Language Translator Bot",
    description: "The language translator bot can translate source language into destination language with the help of python and its packages. Efficient translation system with multiple language support.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "Translation API", "NLP"],
    // liveUrl: "#",
    githubUrl: "https://github.com/omshete96/Real-Time-Language-Translator-Bot-Using-python",
  },
];

const techColors = {
  "Next.js": "bg-blue-100 text-blue-800",
  "C++": "bg-red-100 text-red-800",
  "Encryption": "bg-purple-100 text-purple-800",
  "MySQL": "bg-orange-100 text-orange-800",
  "Authentication": "bg-green-100 text-green-800",
  "Python": "bg-yellow-100 text-yellow-800",
  "Machine Learning": "bg-indigo-100 text-indigo-800",
  "Pandas": "bg-cyan-100 text-cyan-800",
  "News API": "bg-pink-100 text-pink-800",
  "JavaScript": "bg-amber-100 text-amber-800",
  "Translation API": "bg-teal-100 text-teal-800",
  "NLP": "bg-violet-100 text-violet-800",
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I'm passionate about
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2 py-1 rounded text-sm ${techColors[tech as keyof typeof techColors] || 'bg-gray-100 text-gray-800'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.title === "Web Based Encryption & Decryption Tool" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-medium flex items-center gap-1 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-500 hover:text-primary transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button
              size="lg"
          onClick={() => window.open("https://github.com/omshete96?tab=repositories", "_blank")}
          className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
        View All Projects
      </Button>

        </motion.div>
      </div>
    </section>
  );
}
