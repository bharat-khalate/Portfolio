import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "🍕 Pizza Palace",
      description: "A pizza ordering system with menu customization, inventory management, and secure authentication.",
      tech: ["Spring Boot", "PostgreSQL", "React.js", "Docker", "MyBatis", "TypeScript"],
      github: "https://github.com/bharat-khalate/srpingboot-react",
      live: null
    },
    {
      title: "🌾 KM_AGRI – Smart Agri Platform", 
      description: "Platform to help farmers connect with agri experts, using JWT, chat features, and Kafka for performance.",
      tech: ["Spring Boot", "Redis", "Kafka", "Docker", "AI Microservices"],
      github: "https://github.com/bharat-khalate/springboot",
      live: null
    },
    {
      title: "🗞 News Application",
      description: "Real-time news app using NewsData.io APIs with shimmer UI, infinite scroll, and personalized feeds.",
      tech: ["Dart", "Flutter", "Node.js", "PostgreSQL"],
      github: "https://github.com/bharat-khalate/flutter", 
      live: null
    },
    {
      title: "📚 IJRCSIT Journal System",
      description: "Platform for publishing academic research papers with JWT auth, download tracking, and Prisma ORM.",
      tech: ["Node.js", "Prisma", "PostgreSQL", "React"],
      github: "https://github.com/bharat-khalate/mern",
      live: "https://ijrcsit.sknscoe.ac.in/"
    }
  ];

  const hostedProjects = [
    {
      title: "IJRCSIT Journal",
      url: "https://ijrcsit.sknscoe.ac.in/",
      description: "Academic research paper publishing platform"
    },
    {
      title: "Samarth Farm Fresh", 
      url: "https://samarthfarmfresh.in/",
      description: "Fresh farm produce delivery platform"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="border-accent text-accent">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button asChild size="sm" className="bg-gradient-primary hover:opacity-90">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button asChild size="sm" variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6 text-accent">Live Hosted Projects</h3>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {hostedProjects.map((project, index) => (
              <Card key={index} className="shadow-elegant hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <Button asChild size="sm" className="bg-gradient-secondary hover:opacity-90">
                    <a href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Site
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};