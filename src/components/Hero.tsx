
import { useEffect, useRef } from 'react';
import { ArrowDown, Brain, Cpu, Cable, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-hero-pattern matrix-bg px-4 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-ai-red/20 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-ai-red/15 filter blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto text-center md:text-left md:flex md:items-center md:justify-between relative z-10 pt-20">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-4 opacity-0"
          >
            <span className="text-white">Vidya </span>
            <span className="text-ai-red animate-matrix-text">Sinha</span>
          </h1>
          
          <p className="text-gray-300 text-xl md:text-2xl mb-4 opacity-0 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            Software Developer | Machine Learning | Computer Vision
          </p>

          <p className="text-ai-red italic text-lg mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            "Work, hustle and enjoy"
          </p>
          
          <p className="text-gray-400 mb-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.5s' }}>
            "Creativity is intelligence having fun." - Albert Einstein
          </p>
          
          <div className="flex justify-center md:justify-start space-x-4 mb-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href="mailto:vidyasinha030@gmail.com" 
              className="ai-button group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border border-ai-red text-white rounded-lg hover:bg-ai-red/10 transition-all duration-300"
              aria-label="View Projects"
            >
              View Projects
            </a>
          </div>
          
          <div className="flex justify-center md:justify-start space-x-6 opacity-0 animate-slide-up" style={{ animationDelay: '0.9s' }}>
            <a 
              href="https://linkedin.com/in/VidyaSinha" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-ai-red transition-colors duration-300"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-ai-red transition-colors duration-300"
              aria-label="GitHub profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:vidyasinha030@gmail.com" 
              className="text-gray-400 hover:text-ai-red transition-colors duration-300"
              aria-label="Email contact"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="hidden md:block md:w-2/5">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-ai-red opacity-30 rounded-xl"></div>
            <div className="rounded-xl overflow-hidden border-2 border-ai-red/20 shadow-2xl">
              <img 
                src="\lovable-uploads\783dfd5d-0737-4252-a365-6598c7315044.png" 
                alt="Vidya Sinha" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-ai-red opacity-30 rounded-xl"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="flex flex-col items-center text-gray-400 hover:text-ai-red transition-colors duration-300"
          aria-label="Scroll down"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-ai-black to-transparent"></div>
    </section>
  );
};

export default Hero;
