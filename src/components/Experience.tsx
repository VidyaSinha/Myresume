
import { useEffect, useRef } from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    title: "Full Stack Web Developer",
    company: "WORKEASY CO-WORKING SPACE",
    location: "Rajkot, Gujarat",
    period: "May 2024 - July 2024",
    description: [
      "Achieved 40% growth and strengthened the CEO's personal brand value, increased online visibility, and enhanced personal credibility, leading to better networking and business opportunities.",
      "Enhanced website performance by 30% through code optimization and efficient database queries.",
      "Built Personal branding website features for the company along with educational website and optimized responsive web applications using HTML, CSS, JavaScript and PHP."
    ],
    icon: <Briefcase className="w-5 h-5" />
  },
  {
    title: "Bachelor of Computer Science",
    company: "Marwadi University",
    location: "Information and Communication Technology",
    period: "Expected 2026",
    description: [
      "Studying Computer Science with focus on Machine Learning and AI technologies",
      "Industry Connect Student Coordinator of Marwadi University"
    ],
    icon: <GraduationCap className="w-5 h-5" />
  },
  {
    title: "HSC",
    company: "Air Force School",
    location: "",
    period: "2021 - 2022",
    description: [
      "Completed Higher Secondary Education with focus on Mathematics and Computer Science"
    ],
    icon: <GraduationCap className="w-5 h-5" />
  }
];

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    const items = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    items.forEach(item => observer.observe(item));

    return () => {
      items.forEach(item => observer.unobserve(item));
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    itemRefs.current[index] = el;
  };

  return (
    <section id="experience" className="py-24 bg-ai-black relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-ai-gray to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6" ref={sectionRef}>
        <div className="text-center mb-16">
          <h2 className="section-heading inline-block mx-auto">Experience & Education</h2>
        </div>

        <div className="relative mx-auto max-w-5xl">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-px bg-gradient-to-b from-ai-red/40 via-ai-red/20 to-ai-red/5 transform md:-translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <div 
              key={index}
              ref={(el) => addToRefs(el, index)}
              className={`relative mb-12 staggered-appear ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-0' : 'md:pl-12 md:ml-0 md:mr-auto'
              } md:w-1/2`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute top-0 md:top-6 left-0 md:left-auto md:right-0 transform md:translate-x-1/2 w-5 h-5 rounded-full bg-ai-red animate-pulse-red"></div>

              <div className="md:pl-0 pl-8 relative">
                <div className="rounded-xl glass-panel p-6 transition-all duration-300 hover:bg-ai-gray/60 hover:border-ai-red/30">
                  <div className="flex flex-col md:items-end">
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-ai-red font-medium mb-2">{exp.company}</p>
                    <div className="flex flex-wrap items-center gap-3 text-gray-400 text-sm mb-4">
                      {exp.location && (
                        <div className="flex items-center">
                          <MapPin className="mr-1 w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <Calendar className="mr-1 w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="text-gray-300 space-y-2 list-disc ml-5">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
