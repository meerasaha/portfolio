
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Palette, Rocket, Globe, Smartphone } from "lucide-react";
import { Card3D } from "./Card3D";

export const Skills = () => {
  const [animateSkills, setAnimateSkills] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimateSkills(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 82 },
        { name: "PostgreSQL", level: 78 },
        { name: "Redis", level: 75 }
      ]
    },
    {
      icon: Palette,
      title: "Design & UI/UX",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Figma", level: 92 },
        { name: "Adobe XD", level: 85 },
        { name: "Photoshop", level: 80 },
        { name: "Framer", level: 75 }
      ]
    },
    {
      icon: Globe,
      title: "DevOps & Cloud",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "AWS", level: 78 },
        { name: "Docker", level: 82 },
        { name: "CI/CD", level: 80 },
        { name: "Kubernetes", level: 70 }
      ]
    }
  ];

  const technologies = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Node.js", 
    "Python", "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", "Figma", "Tailwind CSS"
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and design principles 
            for creating exceptional digital experiences.
          </p>
        </div>

        {/* Interactive Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card3D key={index}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mr-4`}>
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out transform group-hover:scale-y-110`}
                          style={{ 
                            width: animateSkills ? `${skill.level}%` : '0%',
                            transitionDelay: `${skillIndex * 200}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card3D>
          ))}
        </div>

        {/* Technology Tags Cloud */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-8">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-4 py-2 text-sm bg-white/50 dark:bg-gray-800/50 border-gray-300 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: animateSkills ? 'fadeIn 0.5s ease-out' : 'none'
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Floating Skill Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-10 opacity-20">
            <Rocket className="text-blue-500 animate-float" size={32} />
          </div>
          <div className="absolute top-1/3 right-20 opacity-20" style={{ animationDelay: '1s' }}>
            <Smartphone className="text-purple-500 animate-float" size={28} />
          </div>
          <div className="absolute bottom-1/4 left-1/4 opacity-20" style={{ animationDelay: '2s' }}>
            <Code2 className="text-green-500 animate-float" size={30} />
          </div>
        </div>
      </div>
    </section>
  );
};
