
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "DecentralizeIt - Petition-System-Blockchain",
      description: "A revolutionary blockchain-based petition system that ensures transparency, immutability, and democratic participation in decision-making processes.",
      tech: ["Blockchain", "Smart Contracts", "Web3", "Solidity", "React"],
      github: "https://github.com/Pratham-Chavan18",
      live: "#",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "Healthcare Monitoring System",
      description: "An intelligent health tracking and monitoring system that provides real-time health metrics analysis and personalized recommendations.",
      tech: ["Python", "Machine Learning", "IoT", "Data Analytics", "Flask"],
      github: "https://github.com/Pratham-Chavan18",
      live: "#",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=600&h=400"
    },
    {
      title: "JARVIS - Personal AI Assistant",
      description: "An advanced AI-powered personal assistant capable of voice recognition, natural language processing, and task automation.",
      tech: ["Python", "AI/ML", "NLP", "Speech Recognition", "TensorFlow"],
      github: "https://github.com/Pratham-Chavan18",
      live: "#",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&h=400"
    }
  ];

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and cutting-edge technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-secondary rounded text-xs text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  <Button
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
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

export default Portfolio;
