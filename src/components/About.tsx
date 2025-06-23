import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Science",
      institution: "M.S Ramaiah Institute of Technology",
      year: "2026 (Expected)",
    },
    {
      degree: "Diploma",
      field: "",
      institution: "JSS Polytechnic",
      year: "2023",
    },
    {
      degree: "10th Standard",
      field: "Secondary Education",
      institution: "Kautilya Vidyalaya",
      year: "2020",
    },
  ];

  const experience = [
    {
      title: "Trainee Data Analyst",
      company: "Inventeron Technologies",
      period: "Sep - Oct 2024",
      responsibilities: [
        "Analyzed large datasets to extract meaningful insights",
        "Developed data visualization dashboards",
        "Collaborated with cross-functional teams on data-driven projects"
      ]
    },
    {
      title: "Trainee in PLC, SCADA, and IoT",
      company: "GTTC, Mysuru",
      period: "Feb - Jun 2023",
      responsibilities: [
        "Gained hands-on experience with industrial automation systems",
        "Programmed PLCs for various control applications",
        "Developed SCADA interfaces for monitoring and control",
        "Implemented IoT solutions for data collection and analysis"
      ]
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A dynamic and results-oriented engineering student with a passion for applying theoretical and practical knowledge
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <GraduationCap className="mr-3 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors duration-200">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg">{edu.degree}</h4>
                    {edu.field && <p className="text-primary font-medium">{edu.field}</p>}
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground mt-2">{edu.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Briefcase className="mr-3 text-primary" />
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors duration-200">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-lg">{exp.title}</h4>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-3">{exp.period}</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <Card className="bg-card border-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a proactive and adaptable individual with strong problem-solving skills and a creative approach to challenges. 
                My hands-on experience in various technologies, combined with my commitment to continuous learning, positions me 
                to contribute meaningfully in the technology field. I thrive in collaborative environments and am always eager 
                to take on new challenges that push the boundaries of innovation.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
