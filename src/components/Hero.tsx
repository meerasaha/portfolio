
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { FloatingShapes } from "./FloatingShapes";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <FloatingShapes />
      
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 dark:text-gray-100 mb-6">
            Hello, I'm{" "}
            <span className="font-medium text-blue-600 dark:text-blue-400 relative">
              John Doe
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-sm -z-10 animate-pulse"></div>
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            A passionate full-stack developer creating beautiful and functional digital experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Get In Touch
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-gray-400 dark:text-gray-500" size={24} />
        </div>
      </div>
    </section>
  );
};
