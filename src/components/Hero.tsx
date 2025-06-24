import { ArrowRight, Github, Linkedin, Mail, Code2, Palette, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const floatingElements = [
    { icon: Code2, position: 'top-20 left-10', delay: '0s' },
    { icon: Palette, position: 'top-32 right-16', delay: '1s' },
    { icon: Zap, position: 'bottom-32 left-20', delay: '2s' },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "https://github.com/Pratham-Chavan18"
    },
    {
      icon: Linkedin,
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/pratham-chavan-1b6b83334"
    },
    {
      icon: Code2,
      name: "LeetCode",
      href: "https://leetcode.com/u/Pratham-Chavan/"
    },
    {
      icon: Mail,
      name: "Email",
      href: "mailto:pratham1611c@gmail.com"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/30"></div>
      <div className="hero-gradient absolute inset-0"></div>
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25px 25px, rgba(59, 130, 246, 0.3) 2px, transparent 0)`,
          backgroundSize: '50px 50px',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`absolute ${element.position} p-4 bg-card/20 backdrop-blur-sm rounded-xl border border-border/20 animate-bounce hidden md:block`}
          style={{ animationDelay: element.delay, animationDuration: '3s' }}
        >
          <element.icon className="h-6 w-6 text-primary" />
        </div>
      ))}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          {/* Enhanced Typography */}
          <div className="mb-8">
            <div className="inline-block p-2 bg-primary/10 rounded-full mb-6">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
            </div>
            <p className="text-sm uppercase tracking-wider text-primary/80 mb-4 font-medium">
              Welcome to my portfolio
            </p>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="gradient-text block">Pratham</span>
            <span className="gradient-text block">Chavan</span>
          </h1>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
              Aspiring <span className="text-primary font-medium">Frontend Developer</span> & Engineering Student
            </p>
            
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
              Passionate about building innovative web solutions and turning ideas into reality through cutting-edge technology
            </p>
          </div>
          
          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground animate-glow group px-8 py-3 text-lg"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 px-8 py-3 text-lg hover:bg-primary/10 backdrop-blur-sm"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Enhanced Social Links with Names */}
          <div>
            <h3 className="text-lg font-medium text-muted-foreground mb-6">Connect with me</h3>
            <div className="flex justify-center space-x-8">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-4 rounded-2xl bg-card/40 backdrop-blur-sm border border-border/20 hover:bg-card/60 hover:border-primary/20 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="h-6 w-6 group-hover:text-primary transition-colors duration-200 mb-2" />
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors duration-200">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
