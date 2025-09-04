import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Building } from "lucide-react";

export const About = () => {
  const skills = [
    { category: "Languages", items: ["Java", "JavaScript", "TypeScript", "Dart", "SQL", "HTML", "CSS"] },
    { category: "Frameworks", items: ["React.js", "Spring Boot", "Express.js", "Flutter"] },
    { category: "Databases", items: ["PostgreSQL", "MySQL"] },
    { category: "Tools", items: ["Git", "Docker", "Kafka", "Redis"] },
    { category: "ORMs", items: ["Spring Data JPA", "MyBatis", "Prisma"] }
  ];

  const achievements = [
    "🏆 Winner – Sinhagad Hackathon 2k23 (Winter)",
    "🥈 Runner-Up – Sinhagad Hackathon 2k23 (Summer)", 
    "🥈 Runner-Up – Hack-X-Spirit National Hackathon"
  ];

  return (
    <section id="about" className="py-20 px-6 bg-muted/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-accent" />
                Education
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">SKN Sinhgad College of Engineering, Pandharpur</h4>
                <p className="text-muted-foreground">B.Tech in Computer Science (2022 – 2025)</p>
                <p className="font-medium text-accent">CGPA: 8.11</p>
              </div>
              <div>
                <h4 className="font-semibold">Government Polytechnic, Solapur</h4>
                <p className="text-muted-foreground">Diploma in Computer Technology (2019 – 2022)</p>
                <p className="font-medium text-accent">85.94%</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="w-5 h-5 text-accent" />
                Work Experience
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold">Techbulls Softech Pvt. Ltd.</h4>
                <p className="text-accent font-medium">Software Developer </p>
                <p className="text-sm text-muted-foreground">Feb 2025 – Jul-2025</p>
                <p className="text-sm mt-2">Contributing to backend and frontend features using Spring Boot and React.</p>
              </div>
              <div>
                <h4 className="font-semibold">Eagle Software Solution Ltd.</h4>
                <p className="text-accent font-medium">Web Developer </p>
                <p className="text-sm text-muted-foreground">Jun 2024 – Sep 2024</p>
                <p className="text-sm mt-2">Built and deployed MERN stack apps with MySQL DB schemas.</p>
              </div>
               <div>
                <h4 className="font-semibold">LeadSoft It Solutions.</h4>
                <p className="text-accent font-medium">FullStack Developer </p>
                <p className="text-sm text-muted-foreground">Aug 2023 – Sep 2023</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="shadow-elegant mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-accent" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-4 bg-gradient-secondary rounded-lg text-white">
                  {achievement}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-elegant">
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="font-semibold mb-3 text-accent">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <Badge key={skill} variant="secondary" className="hover:bg-accent hover:text-accent-foreground transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
