
import { Card, CardContent } from '@/components/ui/card';
import { Monitor, Smartphone, Code, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "Web Development",
      description: "Creating responsive, modern websites with clean code and optimal performance. Specializing in React, HTML5, CSS3, and JavaScript.",
      features: ["Responsive Design", "Modern Frameworks", "Performance Optimization", "Cross-browser Compatibility"]
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Mobile-First Design",
      description: "Developing mobile-first, responsive interfaces that provide excellent user experience across all devices and screen sizes.",
      features: ["Mobile Optimization", "Touch-friendly UI", "Progressive Web Apps", "Responsive Layouts"]
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Frontend Development",
      description: "Building interactive and dynamic user interfaces using modern JavaScript frameworks and libraries with focus on user experience.",
      features: ["React Development", "Interactive Components", "State Management", "API Integration"]
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "UI/UX Implementation",
      description: "Transforming design concepts into pixel-perfect, interactive web interfaces with attention to detail and user experience.",
      features: ["Design Implementation", "User Experience", "Animation & Transitions", "Accessibility Standards"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized frontend development services focused on creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-primary mr-4 p-3 bg-primary/10 rounded-lg">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
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

export default Services;
