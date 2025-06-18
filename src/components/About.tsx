
import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Rocket } from "lucide-react";
import { Card3D } from "./Card3D";
import { AnimatedCode } from "./AnimatedCode";

export const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Development",
      description: "Building robust applications with modern technologies like React, Node.js, and TypeScript."
    },
    {
      icon: Palette,
      title: "Design",
      description: "Creating intuitive and beautiful user interfaces with attention to detail and user experience."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Always exploring new technologies and methodologies to deliver cutting-edge solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated developer with 5+ years of experience in creating digital solutions. 
            I believe in clean code, beautiful design, and meaningful user experiences.
          </p>
        </div>

        {/* Animated Code Block */}
        <div className="mb-16 max-w-2xl mx-auto">
          <AnimatedCode />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card3D key={index}>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden">
                  <skill.icon className="text-blue-600 dark:text-blue-400 relative z-10" size={28} />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 animate-pulse"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};
