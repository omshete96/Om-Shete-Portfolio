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
      title: "Bloomberg Terminal Clone",
      description: "A real-time financial data terminal that replicates the classic Bloomberg Terminal experience with modern web technologies. Features live stock quotes, market indices, currency rates, and financial news with an authentic terminal-style interface.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "TypeScript", "Node.js", "Socket.IO", "Financial APIs"],
      githubUrl: "https://github.com/omshete96/Bloomberg-Terminal-Clone",
    },
    {
      title: "Netflix Movie Recommender System",
      description: "A terminal-based Netflix movie recommender system using machine learning (TF-IDF + cosine similarity) to suggest similar movies based on descriptions, genres, cast, and director. Built with Python and pandas.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "Machine Learning", "Pandas"],
      githubUrl: "https://github.com/omshete96/Netflix-Movie-Recommender-System",
    },
    {
      title: "News Aggregator",
      description: "Developed a news aggregator with Next.js that uses News API to fetch and display real-time headlines. Demonstrated skills in API integration and modern web development practices.",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "News API", "JavaScript"],
      githubUrl: "https://github.com/omshete96/News-Aggregator",
    },
    {
      title: "Automatic Language Translator Bot",
      description: "The language translator bot can translate source language into destination language with the help of python and its packages. Efficient translation system with multiple language support.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Python", "Translation API", "NLP"],
      githubUrl: "https://github.com/omshete96/Real-Time-Language-Translator-Bot-Using-python",
    },
    {
      title: "User Authentication System",
      description: "Developed a secure user authentication system using Next.js and MySQL, implementing password hashing for secure storage. The system ensures data privacy and security with a clean, user-friendly interface.",
      image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "MySQL", "Authentication"],
      githubUrl: "https://github.com/omshete96/User-Authentication-System",
    },
  ];
  
  const techColors = {
    "Next.js": "bg-blue-900/40 text-blue-300 border-blue-700/50",
    "C++": "bg-red-900/40 text-red-300 border-red-700/50",
    "Encryption": "bg-purple-900/40 text-purple-300 border-purple-700/50",
    "MySQL": "bg-orange-900/40 text-orange-300 border-orange-700/50",
    "Authentication": "bg-green-900/40 text-green-300 border-green-700/50",
    "Python": "bg-yellow-900/40 text-yellow-300 border-yellow-700/50",
    "Machine Learning": "bg-indigo-900/40 text-indigo-300 border-indigo-700/50",
    "Pandas": "bg-cyan-900/40 text-cyan-300 border-cyan-700/50",
    "News API": "bg-pink-900/40 text-pink-300 border-pink-700/50",
    "JavaScript": "bg-amber-900/40 text-amber-300 border-amber-700/50",
    "Translation API": "bg-teal-900/40 text-teal-300 border-teal-700/50",
    "NLP": "bg-violet-900/40 text-violet-300 border-violet-700/50",
  };
  
  export default function PortfolioSection() {
    return (
      <section id="portfolio" className="py-20 bg-dark-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Featured Projects</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of my recent work and the technologies I'm passionate about
            </p>
          </motion.div>
  
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                className="bg-dark-tertiary rounded-2xl border border-glass-border card-glow overflow-hidden"
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
                  <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-1 rounded text-sm border ${techColors[tech as keyof typeof techColors] || 'bg-gray-800/40 text-gray-300 border-gray-700/50'}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-blue-400 font-medium flex items-center gap-1 transition-colors duration-300"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-primary transition-colors"
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
              className="bg-gradient-to-r from-primary to-secondary hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View All Projects
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }
  
