
import { useEffect, useRef } from 'react';
import { Brain, Code, Database, Server, Terminal, Layers, Share2, Users } from 'lucide-react';

const skillCategories = [
  {
    name: "Machine Learning",
    icon: <Brain className="w-6 h-6" />,
    skills: [
      { name: "Python", level: 90 },
      { name: "Decision Trees", level: 85 },
      { name: "Random Forests", level: 85 },
      { name: "Image Processing", level: 80 },
    ]
  },
  {
    name: "Web Development",
    icon: <Code className="w-6 h-6" />,
    skills: [
      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "PHP", level: 75 },
    ]
  },
  {
    name: "Programming",
    icon: <Terminal className="w-6 h-6" />,
    skills: [
      { name: "C++", level: 85 },
      { name: "Python", level: 90 },
      { name: "Java", level: 75 },
    ]
  },
  {
    name: "Database",
    icon: <Database className="w-6 h-6" />,
    skills: [
      { name: "MySQL", level: 80 },
    ]
  },
  {
    name: "Soft Skills",
    icon: <Users className="w-6 h-6" />,
    skills: [
      { name: "Communication", level: 90 },
      { name: "Collaboration", level: 85 },
      { name: "Adaptability", level: 80 },
      { name: "Creativity", level: 85 },
    ]
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
          <h2 className="section-heading inline-block mx-auto">Technical Skills</h2>
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

              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={`${category.name}-${skill.name}`} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-ai-red">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%`, animationDelay: `${index * 200}ms` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
