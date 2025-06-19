
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Card3D } from "./Card3D";

export const Projects = () => {
  const projects = [
    {
      title: "Gate Pass System",
      description: "Developed a real-time facial recognition application to streamline campus security, enhancing the entry/exit process for students and staff. Designed and integrated AWS Rekognition for facial recognition and S3 Buckets for efficient data storage, ensuring scalability for large datasets. Achieved 79% model accuracy with a local setup, focusing on performance, scalability, and usability.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      tech: ["AWS Rekognition", "S3 Bucket", "OpenCV", "React.js"],
      liveUrl: "#",
      githubUrl: "https://github.com/rishav2404/Drishti-The-Ultimate-Eye"
    },
    {
      title: "Club Management App",
      description: "Developed a mobile application to centralize event management for college student clubs, resulting in a 40% increase in event attendance and a 25% rise in student engagement. Integrated Firebase Auth and Realtime Database for real-time user management and updates, ensuring seamless performance and user satisfaction. Improved application performance with a focus on mobile responsiveness and user experience.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      tech: ["Kotlin", "Firebase Auth", "Android Studio", "Firebase Realtime Database"],
      liveUrl: "#",
      githubUrl: "https://github.com/rishav2404/SMVDU_Club_App"
    },
    {
      description: "A visually engaging movie and TV show discovery platform with search, genre filtering, popularity/rating sorting, and detailed analytics for each title. Features interactive carousels, infinite scrolling, and trailers. Powered by The Movie Database (TMDb) API for up-to-date content and metadata.",
      title: "Movie Mania",
      tech: ["React.js", "Redux", "TMDb API", "Axios", "SCSS", "Vite"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", // Placeholder, update with actual app screenshot if available
      liveUrl: "https://movie-mania-liard.vercel.app",
      githubUrl: "https://github.com/rishav2404/Movie-Mania",
    }
  ];

  const handleRedirect = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Here are some of the projects I've worked on recently. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card3D key={index}>
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full hover:scale-105 transition-transform duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex-1 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-200"
                    onClick={() => handleRedirect(project.liveUrl)}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:scale-105 transition-all duration-200"
                    onClick={() => handleRedirect(project.githubUrl)}
                  >
                    <Github size={16} className="mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card3D>
          ))}
        </div>
      </div>
    </section>
  );
};
