import { GithubIcon, Linkedin, InstagramIcon } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-primary text-white py-12 border-t border-glass-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 gradient-text">Om Shete</h3>
          <p className="text-gray-400 mb-6">Building innovative solutions with code and creativity</p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a
              href="https://github.com/omshete96"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/om-shete-13701924b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/omshete98/"
              className="text-gray-400 hover:text-primary transition-colors duration-300"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">© {currentYear} Om Shete. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
