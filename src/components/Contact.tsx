
import { useEffect, useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    
    // Simulate sending - in a real app, this would connect to a backend
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset "sent" status after 3 seconds
      setTimeout(() => setSent(false), 3000);
    }, 1500);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-ai-black relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-ai-gray to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6" ref={sectionRef}>
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="section-heading inline-block mx-auto">Get In Touch</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="space-y-8 opacity-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Let's Talk</h3>
              <p className="text-gray-300">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-ai-red/10 flex items-center justify-center text-ai-red">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Email</h4>
                  <a href="mailto:vidyasinha939@gmail.com" className="text-white hover:text-ai-red transition-colors">
                    vidyasinha939@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-ai-red/10 flex items-center justify-center text-ai-red">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  {/* <h4 className="text-gray-400 text-sm">Phone</h4>
                  <a href="tel:+917778300667" className="text-white hover:text-ai-red transition-colors">
                    +91 7778300667
                  </a> */}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-ai-red/10 flex items-center justify-center text-ai-red">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">Location</h4>
                  <p className="text-white">Gujarat, India</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-ai-red/10 flex items-center justify-center text-ai-red">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-sm">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/vidyasinha20" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-ai-red transition-colors"
                  >
                    linkedin.com/in/vidyasinha20
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="opacity-0 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <form 
              action="mailto:vidyasinha939@gmail.com" 
              method="post" 
              encType="text/plain"
              onSubmit={handleSubmit} 
              className="glass-panel rounded-xl p-6 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-ai-lightGray border border-gray-700 text-white focus:border-ai-red focus:ring-1 focus:ring-ai-red/50 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-ai-lightGray border border-gray-700 text-white focus:border-ai-red focus:ring-1 focus:ring-ai-red/50 outline-none transition-all"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-ai-lightGray border border-gray-700 text-white focus:border-ai-red focus:ring-1 focus:ring-ai-red/50 outline-none transition-all resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={sending || sent}
                className={`ai-button w-full flex items-center justify-center ${
                  sending ? 'opacity-80' : sent ? 'bg-green-600' : ''
                }`}
              >
                {sending ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : sent ? (
                  <span className="flex items-center">
                    <svg className="-ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Message Sent
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
