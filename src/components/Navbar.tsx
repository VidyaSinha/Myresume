
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Brain, Cpu } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-ai-black/90 backdrop-blur-md border-b border-ai-red/10 py-3' : 'py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-white group"
            onClick={closeMenu}
          >
            <Cpu className="h-6 w-6 text-ai-red group-hover:animate-pulse transition-all" />
            <span className="font-bold text-xl tracking-tight">
              Vidya<span className="text-ai-red">Sinha</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-300 hover:text-ai-red transition-colors duration-200 capitalize relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ai-red transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-gray-300 hover:text-ai-red"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`absolute top-full left-0 right-0 bg-ai-black/95 backdrop-blur-md border-b border-ai-red/10 transition-all duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {['about', 'skills', 'experience', 'projects', 'contact'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={closeMenu}
                className="text-gray-300 hover:text-ai-red py-2 transition-colors duration-200 capitalize"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
