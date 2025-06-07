import { Badge } from '../components/ui/Badge';
import { Card, CardContent } from '../components/ui/Card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Webpack', 'Vite', 'Figma', 'VS Code', 'npm/yarn'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Concepts',
      skills: ['Responsive Design', 'Performance Optimization', 'Accessibility', 'Testing', 'CI/CD'],
      color: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate about modern web technologies and always learning new tools to create better user experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-gray-800/80 backdrop-blur-sm border-gray-700 shadow-lg"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-xl">{category.title.charAt(0)}</span>
                </div>
                
                <h3 className="text-2xl font-semibold text-center mb-6 text-white">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skill} 
                      variant="secondary" 
                      className="px-3 py-1 text-sm bg-gray-700 text-gray-200 hover:bg-gray-600 transition-colors duration-200"
                      style={{ animationDelay: `${(index * 0.2) + (skillIndex * 0.1)}s` }}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;