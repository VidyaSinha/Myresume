
import { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Activity, Brain, Code, Users, Database, Shield, Lightbulb, MessageCircle } from 'lucide-react';

const projects = [
  {
    title: "PethubA Platform",
    description: "Developed during HackTheMountains hackathon, this platform connects pet owners with caretakers and adopters. Features include real-time chat, video calls, and secure management of adoption offers.",
    tech: ["React", "Node.js", "MongoDB", "Jitsi API"],
    image: null,
    github: "#",
    demo: "#",
    icon: <MessageCircle className="w-6 h-6 text-ai-red opacity-70" />
  },
  {
    title: "Art Style Recognition",
    description: "Developed an AI and Computer Vision system for recognizing different art styles and movements, classifying artworks based on visual characteristics and historical context.",
    tech: ["AI", "Computer Vision", "Deep Learning", "Image Processing"],
    image: null,
    github: "#",
    demo: "#",
    icon: <Brain className="w-6 h-6 text-ai-red opacity-70" />
  },
  {
    title: "Art Community Platform",
    description: "Created a web-based community platform for artists to share work, collaborate, and engage with art enthusiasts. Built with advanced Java technologies focusing on user engagement and content sharing.",
    tech: ["Advanced Java", "Web Development", "UI/UX", "Database"],
    image: null,
    github: "#",
    demo: "#",
    icon: <Users className="w-6 h-6 text-ai-red opacity-70" />
  },
  {
    title: "Accreditation & Data Management System",
    description: "Built a comprehensive system for managing institutional accreditation processes and organizing large volumes of assessment data for educational institutions.",
    tech: ["HCD", "Database Design", "UI/UX", "System Architecture"],
    image: null,
    github: "#",
    demo: "#",
    icon: <Database className="w-6 h-6 text-ai-red opacity-70" />
  },
  {
    title: "Decision Tree & Random Forest Visualizer",
    description: "Developed an interactive Decision Tree & Random Forest Visualizer, helping users to tweak hyper-parameters by using ML algorithm. More than 270 people have used it so far.",
    tech: ["Machine Learning", "Data Visualization", "Python"],
    image: null,
    github: "#",
    demo: "#",
    icon: <Code className="w-6 h-6 text-ai-red opacity-70" />
  },
  {
    title: "Online Blood Bank Management System",
    description: "Created a centralized system for managing blood donation, inventory, and distribution to hospitals, with features for donor registration and emergency blood requests.",
    tech: ["Web Development", "Database", "UI/UX"],
    image: null,
    github: "#",
    demo: "#",
    icon: <Shield className="w-6 h-6 text-ai-red opacity-70" />
  },
  {
    title: "Drivers' Safety System",
    description: "Developed a system utilizing image processing to detect driver drowsiness and yawning. The system issues alerts through calls or audio signals to ensure timely driver intervention, enhancing road safety.",
    tech: ["Computer Vision", "Image Processing", "Python"],
    image: null,
    github: "#",
    demo: "#",
    icon: <Activity className="w-6 h-6 text-ai-red opacity-70" />
  },
  {
    title: "Navigation Belt for Blind People",
    description: "Designed and built a hardware solution that combines buzzer and vibration technologies to help visually impaired individuals navigate their environment safely.",
    tech: ["Hardware", "Embedded Systems", "Accessibility"],
    image: null,
    github: "#",
    demo: "#",
    icon: <Lightbulb className="w-6 h-6 text-ai-red opacity-70" />
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('staggered-appear-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = projectRefs.current.filter(Boolean) as HTMLDivElement[];
    projectElements.forEach(el => observer.observe(el));

    return () => {
      projectElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    projectRefs.current[index] = el;
  };

  return (
    <section id="projects" className="py-24 bg-ai-gray relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-full h-full bg-neural-pattern bg-cover bg-center opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="section-heading inline-block mx-auto">Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              ref={(el) => addToRefs(el, index)}
              className="ai-card relative group overflow-hidden staggered-appear h-full"
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-ai-red/10 rounded-full blur-3xl group-hover:bg-ai-red/20 transition-all duration-700"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-ai-red transition-colors duration-300">{project.title}</h3>
                  {project.icon}
                </div>

                <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 text-xs rounded-full bg-ai-red/10 text-ai-red border border-ai-red/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 mt-auto">
                  <a 
                    href={project.github} 
                    className="flex items-center text-gray-300 hover:text-ai-red transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo} 
                    className="flex items-center text-gray-300 hover:text-ai-red transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    <span>Demo</span>
                  </a>
                </div>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-r from-ai-red/5 to-transparent pointer-events-none transition-opacity duration-500 ${
                hoveredIndex === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
