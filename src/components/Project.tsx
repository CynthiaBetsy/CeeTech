import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ExternalLink, Github } from 'lucide-react';
import TechFemmePic from '../assets/TechFemme.jpg';
import MediConnectPic from '../assets/Medi-connect.jpg';
const Projects = () => {
  const projects = [
    {
      title: 'Medi-Connect',
      description: 'A modern, responsive website built with HTML, CSS and JavaScript mainly for connecting medical practitioners with their prospective clients.',
      image: MediConnectPic,
      tech: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      liveUrl: 'https://medi-connect.com',
      githubUrl: 'https://github.com/CynthiaBetsy/medi-connect'
    },
    {
      title: 'TechFemme Academy website',
      description: 'Techfemme Academy is a platform that empowers women in tech through mentorship, training, and career support',
      image: TechFemmePic,  
      tech: ['React', 'Firebase', 'Material-UI', 'Context API'],
      liveUrl: 'https://example-taskmanager.com',
      githubUrl: 'https://github.com/CynthiaBetsy/TechFemme'
    },
    {
      title: 'A Portfolio Site',
      description: 'A personal portfolio showcasing a frontend development skills.Features projects, experience, and a passion for building the web.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      tech: ['React', 'Typescript', 'Tailwind CSS', 'Node.js'],
      liveUrl: 'https://cee-tech-three.vercel.app/',
      githubUrl: 'https://github.com/CynthiaBetsy/CeeTech'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating modern web development practices and creative problem-solving.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-gray-800 border-gray-700 shadow-lg"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-gray-700 text-gray-200 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white transition-all duration-300"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white"
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;