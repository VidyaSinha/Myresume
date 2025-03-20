
import { useEffect, useRef } from 'react';
import { Brain, Code, Laptop, Target, Award, Users } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

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

    const elements = elementsRef.current.filter(Boolean) as HTMLDivElement[];
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    elementsRef.current[index] = el;
  };

  return (
    <section id="about" className="py-24 bg-ai-black relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-heading inline-block mx-auto hover-lift">About Me</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="md:w-2/5" ref={sectionRef}>
            <div 
              ref={(el) => addToRefs(el, 0)} 
              className="relative rounded-xl overflow-hidden staggered-appear border-glow"
            >
              <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden glass-panel" style={{animation: "blob-morph 8s ease-in-out infinite"}}>
                <img 
                  src="/lovable-uploads/84938767-2c0c-40a6-ac86-dc9246ad44cc.png" 
                  alt="Vidya Sinha" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-ai-black via-transparent to-ai-red/10"></div>
              </div>
              <div className="absolute -bottom-2 -right-2 w-24 h-24 border-2 border-ai-red opacity-50 rounded-xl pulse-shadow"></div>
            </div>
          </div>

          <div className="md:w-3/5">
            <div 
              ref={(el) => addToRefs(el, 1)} 
              className="text-gray-300 space-y-4 staggered-appear"
            >
              <p className="text-lg leading-relaxed">
                Aspiring software developer with a strong foundation in web development, 
                <span className="text-ai-red font-medium"> machine learning</span>, and 
                <span className="text-ai-red font-medium"> problem solving</span>. 
                Passionate about creating innovative solutions, leading impactful projects, 
                and continuously improving technical and analytical skills.
              </p>
              <p className="text-lg leading-relaxed">
                Currently pursuing a Bachelor's degree in Computer Science at Marwadi University, 
                with a focus on Information and Communication Technology. Expected to graduate in 2026.
              </p>
              <p className="text-lg leading-relaxed italic text-shimmer">
                "Work, hustle and enjoy"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div 
                ref={(el) => addToRefs(el, 2)} 
                className="ai-card staggered-appear border-glow"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-ai-red/10 text-ai-red pulse-shadow">
                    <Code className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Technical Expertise</h3>
                    <p className="text-gray-400 text-sm">
                      Skilled in Machine Learning algorithms, Computer Vision, and Full Stack Development
                    </p>
                  </div>
                </div>
              </div>

              <div 
                ref={(el) => addToRefs(el, 3)} 
                className="ai-card staggered-appear border-glow"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-full bg-ai-red/10 text-ai-red pulse-shadow">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-2">Career Focus</h3>
                    <p className="text-gray-400 text-sm">
                      Dedicated to developing AI solutions that solve real-world problems
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* New Section for Leadership and Non-Technical Skills */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-8 relative inline-block hover-lift">
            Leadership & Non-Technical Skills
            <span className="absolute -bottom-2 left-0 h-1 bg-ai-red w-1/2 transition-all duration-500 hover:w-full"></span>
          </h3>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-2/5">
              <div 
                ref={(el) => addToRefs(el, 4)} 
                className="relative rounded-xl overflow-hidden staggered-appear border-glow"
              >
                <div className="aspect-w-1 aspect-h-1 rounded-xl overflow-hidden glass-panel" style={{animation: "float-rotate 10s ease-in-out infinite"}}>
                  <img 
                    src="/lovable-uploads/7e0a0792-6c8c-4716-b57f-6865857bd1bf.png" 
                    alt="YUVA Young Indians Leadership" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-ai-black via-transparent to-ai-red/10"></div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-24 h-24 border-2 border-ai-red opacity-50 rounded-xl pulse-shadow"></div>
              </div>
            </div>

            <div className="md:w-3/5">
              <div 
                ref={(el) => addToRefs(el, 5)} 
                className="space-y-4 staggered-appear"
              >
                <div className="ai-card border-glow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-ai-red/10 text-ai-red pulse-shadow">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">YUVA Young Indians</h3>
                      <p className="text-gray-300">
                        Serving as the College Chair of YUVA Young Indians, where I lead initiatives focused on youth empowerment, social responsibility, and national development.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="ai-card border-glow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-full bg-ai-red/10 text-ai-red pulse-shadow">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-white mb-2">Leadership Skills</h3>
                      <p className="text-gray-300">
                        Experienced in team management, public speaking, event organization, and community engagement. Passionate about mentoring others and driving positive change.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
