import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-primary">SkillForge</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">Courses</a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">About</a>
            <Button variant="default">Get Started</Button>
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;