import { Card, CardContent } from '../components/ui/Card';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code that follows best practices and modern standards.'
    },
    {
      icon: Lightbulb,
      title: 'Creative Solutions',
      description: 'Turning complex problems into simple, elegant solutions that users love.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with designers, developers, and stakeholders to deliver exceptional results.'
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'Staying updated with the latest technologies and trends in web development.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p className="text-gray-300">
                Hello! I'm Cynthia, a passionate frontend developer with 2 years of experience 
                creating digital experiences that combine beautiful design with robust functionality.
              </p>
              <p className="text-gray-300">
                My journey began with a curiosity about how websites work, and it has evolved into 
                a deep appreciation for crafting user-centered applications that solve real problems.
              </p>
              <p className="text-gray-300">
                When I'm not coding, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Card 
                  key={item.title}
                  className="bg-gray-800/60 backdrop-blur-sm border-gray-700 hover:bg-gray-700/60 transition-all duration-300 transform hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;