
import { useEffect, useRef } from 'react';
import { Brain, Code, Database, Server, Terminal, Layers, Share2, Users } from 'lucide-react';

const skillCategories = [
  {
    name: "Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    skills: ["Python", "Decision Trees", "Random Forests", "Image Processing"]
  },
  {
    name: "Web Development",
    icon: <Code className="w-6 h-6" />,
    skills: ["HTML/CSS", "JavaScript", "React.js", "PHP"]
  },
  {
    name: "Programming",
    icon: <Terminal className="w-6 h-6" />,
    skills: ["C++", "Python", "Java"]
  },
  {
    name: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: ["MySQL"]
  },
  {
    name: "Soft Skills",
    icon: <Users className="w-6 h-6" />,
    skills: ["Communication", "Collaboration", "Adaptability", "Creativity"]
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    cards.forEach(card => observer.observe(card));

    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    cardRefs.current[index] = el;
  };

  return (
    <section id="skills" className="py-24 bg-ai-gray relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-ai-red filter blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-ai-red filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="section-heading inline-block mx-auto">Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.name}
              ref={(el) => addToRefs(el, categoryIndex)}
              className="ai-card staggered-appear"
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 rounded-lg bg-ai-red/10 text-ai-red">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.name}</h3>
              </div>

              <ul className="list-disc list-inside space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-gray-300">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
