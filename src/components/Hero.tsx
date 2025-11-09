import { Button } from "@/components/ui/button";
import { ExternalLink, Mail, Phone, MapPin } from "lucide-react";
import avatarImage from "@/assets/bharat-avatar.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background to-muted">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8">
          <img
            src={avatarImage}
            alt="Bharat Khalate"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-accent shadow-glow"
          />
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Bharat Khalate
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6">
            Software Developer Engineer - I
          </p>
          <p className="text-lg max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            2025 B.Tech CSE Graduate with 12+ months of internship expereince, 
            passionate about building scalable and meaningful tech solutions.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Mail className="w-4 h-4" />
            <span>bharatkhalate50@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Phone className="w-4 h-4" />
            <span>+91-8010269748</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <span>Tuljapur, Maharashtra</span>
          </div>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Button 
            asChild 
            className="bg-gradient-primary hover:opacity-90 text-white shadow-elegant"
          >
            <a href="#projects">
              View Projects
            </a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
          >
            <a href="https://github.com/bharat-khalate" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
