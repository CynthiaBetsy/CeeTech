import { useEffect, useState, useMemo } from 'react';
import { Button } from '../components/ui/Button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = useMemo(
    () => ['Frontend Developer', 'React Specialist', 'UI/UX Enthusiast', 'Problem Solver'],
    []
  );

  useEffect(() => {
    const handleType = () => {
      const current = loopNum % roles.length;
      const fullText = roles[current];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNextSection = () => {
    const skillsSection = document.querySelector('#skills');
    skillsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
        CYNTHIA EMEKA
         </h1>
          <div className="text-2xl md:text-4xl text-gray-100 mb-8 h-16 flex items-center justify-center">
            <span className="mr-2">I'm a</span>
            <span className="text-blue-400 font-semibold min-w-[300px] text-left">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            Crafting beautiful, responsive web experiences with modern technologies. 
            I bring ideas to life through clean code and intuitive design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              onClick={scrollToProjects}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 animate-glow"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mb-12">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:alex.johnson@example.com"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <button 
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-blue-400 transition-colors duration-300"
        >
          <ArrowDown className="text-white/60" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;