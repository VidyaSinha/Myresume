
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-ai-black border-t border-ai-red/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl tracking-tight text-white">
                Vidya<span className="text-ai-red">Sinha</span>
              </span>
            </div>
            <p className="text-gray-400 mt-2 max-w-md">
              Software Developer | Machine Learning | Computer Vision
            </p>
          </div>

          <div className="flex space-x-8">
            <a 
              href="https://linkedin.com/in/VidyaSinha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-ai-red transition-colors duration-300"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-ai-red transition-colors duration-300"
              aria-label="GitHub profile"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:vidyasinha030@gmail.com" 
              className="text-gray-400 hover:text-ai-red transition-colors duration-300"
              aria-label="Email contact"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Vidya Sinha. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0 flex items-center">
            Made with <Heart className="inline-block w-4 h-4 mx-1 text-ai-red" /> and AI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
