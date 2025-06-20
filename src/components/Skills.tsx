
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Brain, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Java", "Python", "HTML", "CSS", "JavaScript"],
      color: "text-blue-400"
    },
    {
      title: "Databases & Systems",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "MongoDB", "Linux", "Windows", "MacOS"],
      color: "text-green-400"
    },
    {
      title: "Machine Learning",
      icon: <Brain className="h-6 w-6" />,
      skills: ["Supervised Learning", "Unsupervised Learning", "Computer Vision", "PyTorch", "TensorFlow"],
      color: "text-purple-400"
    },
    {
      title: "Tools & Frameworks",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Git", "Docker", "AWS", "Jenkins", "DevOps", "Flask", "Blockchain"],
      color: "text-orange-400"
    },
    {
      title: "Libraries",
      icon: <Code className="h-6 w-6" />,
      skills: ["Pandas", "NumPy", "Matplotlib", "React", "Node.js"],
      color: "text-cyan-400"
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: ["Critical Thinking", "Problem-Solving", "Effective Communication", "Team Collaboration"],
      color: "text-pink-400"
    },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and methodologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className={`${category.color} mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-secondary rounded-full text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    >
                      {skill}
                    </span>
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
