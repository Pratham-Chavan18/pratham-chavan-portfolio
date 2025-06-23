
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, Calendar, Building2, Users } from 'lucide-react';

const Certificates = () => {
  const certificates = {
    technical: [
      {
        title: "Basics of Cloud Computing | Fundamentals of Cloud Computing",
        organization: "Udemy",
        date: "May 22, 2025",
        duration: "4 total hours",
        image: "/lovable-uploads/3c1d2c29-bb51-4845-a636-b38527a3ac82.png",
        type: "Course Completion"
      },
      {
        title: "Fundamentals of Docker & Kubernetes",
        organization: "Scaler Masterclass",
        date: "1st April 2025",
        instructors: ["Anshuman Singh", "Abhimanyu Saxena"],
        image: "/lovable-uploads/814aebd5-8784-4af0-bf71-b9c4f682ff6e.png",
        type: "Masterclass"
      },
      {
        title: "Software Engineering Job Simulation",
        organization: "JPMorgan Chase & Co. (via Forage)",
        date: "January 23rd, 2025",
        skills: ["Project Setup", "Kafka Integration", "H2 Integration", "REST API Integration", "REST API Controller"],
        image: "/lovable-uploads/ddb7bf5f-20f9-42d4-9ca4-101ea285e749.png",
        type: "Job Simulation"
      }
    ],
    workshops: [
      {
        title: "GAME UI Workshop",
        organization: "UXRIT CLUB - Ramaiah Institute of Technology",
        date: "13th May",
        type: "Workshop Participation",
        image: "/lovable-uploads/ae73d665-f10b-4e19-8e5c-87a445be4045.png",
        supervisors: ["DR. SINI ANNA ALEX", "DR. SIDESH GM"]
      }
    ],
    internships: [
      {
        title: "Artificial Intelligence and Data Science",
        organization: "Inventeron Technologies and Business Solutions LLP",
        duration: "02 Sep 2024 to 01 Oct 2024",
        regNo: "AAB9565",
        image: "/lovable-uploads/45f1b115-5d7a-40de-b992-0d6dd2585b79.png",
        type: "Internship"
      }
    ]
  };

  const renderCertificate = (cert: any, index: number) => (
    <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 overflow-hidden">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={cert.image} 
          alt={cert.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
        <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
          {cert.type}
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{cert.title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-muted-foreground">
            <Building2 className="h-4 w-4 mr-2" />
            <span className="text-sm">{cert.organization}</span>
          </div>
          
          <div className="flex items-center text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2" />
            <span className="text-sm">{cert.date || cert.duration}</span>
          </div>
          
          {cert.duration && cert.date && (
            <div className="flex items-center text-muted-foreground">
              <Award className="h-4 w-4 mr-2" />
              <span className="text-sm">{cert.duration}</span>
            </div>
          )}
          
          {cert.instructors && (
            <div className="flex items-center text-muted-foreground">
              <Users className="h-4 w-4 mr-2" />
              <span className="text-sm">{cert.instructors.join(", ")}</span>
            </div>
          )}
          
          {cert.supervisors && (
            <div className="flex items-center text-muted-foreground">
              <Users className="h-4 w-4 mr-2" />
              <span className="text-sm">Supervisors: {cert.supervisors.join(", ")}</span>
            </div>
          )}
          
          {cert.regNo && (
            <div className="flex items-center text-muted-foreground">
              <Award className="h-4 w-4 mr-2" />
              <span className="text-sm">Reg. No: {cert.regNo}</span>
            </div>
          )}
        </div>
        
        {cert.skills && (
          <div className="flex flex-wrap gap-2">
            {cert.skills.map((skill: string, skillIndex: number) => (
              <span
                key={skillIndex}
                className="px-2 py-1 bg-secondary rounded text-xs text-foreground"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <section id="certificates" className="py-20 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="gradient-text">Certificates</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing continuous learning and professional development across various domains
          </p>
        </div>

        <Tabs defaultValue="technical" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="technical">Technical Courses</TabsTrigger>
            <TabsTrigger value="workshops">Workshops</TabsTrigger>
            <TabsTrigger value="internships">Internships</TabsTrigger>
          </TabsList>
          
          <TabsContent value="technical" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.technical.map((cert, index) => renderCertificate(cert, index))}
            </div>
          </TabsContent>
          
          <TabsContent value="workshops" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.workshops.map((cert, index) => renderCertificate(cert, index))}
            </div>
          </TabsContent>
          
          <TabsContent value="internships" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.internships.map((cert, index) => renderCertificate(cert, index))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Certificates;
