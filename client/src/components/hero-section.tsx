import { Button } from "@/components/ui/button";
import { GithubIcon, Linkedin, InstagramIcon } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="gradient-text">Om Shete</span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-600 mb-8 font-light">
              Full Stack Developer & AI Enthusiast
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-2xl">
              Computer Engineering graduate with 9.19 CGPA, passionate about Full Stack Development, 
              AI/ML, and Data Science. I build innovative web applications and solve complex problems through code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("#portfolio")}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-base font-semibold transition-all duration-300"
              >
                Let's Talk
              </Button>
            </div>
            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/omshete96"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors duration-300"
              >
                <GithubIcon className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/om-shete"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/omshete98/"
                className="text-gray-600 hover:text-primary transition-colors duration-300"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            className="relative animate-float"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Professional coding workspace"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -top-4 -right-4 bg-accent text-white px-4 py-2 rounded-lg font-semibold shadow-lg">
              Available for Hire
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
