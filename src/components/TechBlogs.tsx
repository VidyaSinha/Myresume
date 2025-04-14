
import { useEffect, useRef } from 'react';
import { ExternalLink } from 'lucide-react';

const blogs = [
  {
    title: "Why Zero-Shot Learning is Like Human Knowledge Expansion",
    description: "Exploring how zero-shot learning mirrors human cognitive processes in acquiring and applying knowledge across domains without explicit training.",
    link: "https://medium.com/@TechwithVidya/why-zero-shot-learning-is-like-human-knowledge-expansion-4d6331e991e0",
    date: "2023-08-15"
  },
  {
    title: "Can AI predict your dreams?",
    description: "A deep dive into the importance of creating AI models that can explain their decision-making processes.",
    link: "https://medium.com/@TechwithVidya/can-ai-predict-your-dreams-03b7ec8c3a76",
    date: "2023-07-01"
  },
  {
    title: "How Much Math Do I Need to Know to Learn About Computer Vision?",
    description: "How theoretical computer vision concepts are being applied in real-world scenarios and changing industries.",
    link: "https://medium.com/@TechwithVidya/how-much-math-do-i-need-to-know-to-learn-about-computer-vision-46360950af62",
    date: "2023-06-10"
  }
];

const TechBlogs = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const blogRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    const blogElements = blogRefs.current.filter(Boolean) as HTMLDivElement[];
    blogElements.forEach(el => observer.observe(el));

    return () => {
      blogElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null, index: number) => {
    blogRefs.current[index] = el;
  };

  return (
    <section id="blogs" className="py-24 bg-ai-black relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute w-full h-full bg-neural-pattern bg-cover bg-center opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-heading inline-block mx-auto">Tech Blogs</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Sharing insights and knowledge on artificial intelligence, machine learning, and technology.
            <a 
              href="https://medium.com/@TechwithVidya" 
              className="text-ai-red hover:underline ml-2"
              target="_blank" 
              rel="noopener noreferrer"
            >
              Follow me on Medium →
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div 
              key={index}
              ref={(el) => addToRefs(el, index)}
              className="ai-card relative group overflow-hidden staggered-appear border-glow h-full"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-ai-red/10 rounded-full blur-3xl group-hover:bg-ai-red/20 transition-all duration-700"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <span className="text-sm text-ai-red mb-2">{blog.date}</span>
                <h3 className="text-xl font-bold text-white group-hover:text-ai-red transition-colors duration-300 mb-3">{blog.title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{blog.description}</p>
                <a 
                  href={blog.link}
                  className="ai-button mt-auto w-full text-center group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center justify-center">
                    Read Article
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </span>
                </a>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-ai-red/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechBlogs;
