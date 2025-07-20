import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, ExternalLink } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to new opportunities and interesting projects. 
          Whether you want to collaborate or just say hello, feel free to reach out!
        </p>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader className="pb-3">
              <Mail className="w-8 h-8 text-accent mx-auto" />
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">bharatkhalate50@gmail.com</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader className="pb-3">
              <Phone className="w-8 h-8 text-accent mx-auto" />
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">+91-8010269748</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader className="pb-3">
              <MapPin className="w-8 h-8 text-accent mx-auto" />
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">Tuljapur, Maharashtra</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardHeader className="pb-3">
              <Github className="w-8 h-8 text-accent mx-auto" />
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-sm text-muted-foreground">bharat-khalate</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild className="bg-gradient-primary hover:opacity-90 text-white shadow-elegant">
            <a href="mailto:bharatkhalate50@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </a>
          </Button>
          <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            <a href="https://github.com/bharat-khalate" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              View GitHub
            </a>
          </Button>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            <em>Thanks for visiting my portfolio! Let's build something impactful together.</em>
          </p>
        </div>
      </div>
    </section>
  );
};