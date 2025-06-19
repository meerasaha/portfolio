
import { Facebook, Github, Instagram, Linkedin, Twitter, X, Youtube } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://linkedin.com/in/rishav24",
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    {
      name: "X",
      icon: Twitter,
      href: "https://x.com/RISHAV0424",
      color: "hover:text-blue-700 dark:hover:text-blue-300"
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/rishav2404",
      color: "hover:text-black-700 dark:hover:text-blue-500"
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/rishav_saha_24",
      color: "hover:text-pink-600 dark:hover:text-pink-400"
    },
    // {
    //   name: "YouTube",
    //   icon: Youtube,
    //   href: "https://youtube.com/@johndoe",
    //   color: "hover:text-red-600 dark:hover:text-red-400"
    // }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            Let's Connect
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Follow me on social media for updates on my latest projects and insights.
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                aria-label={`Follow on ${social.name}`}
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          <div className="border-t border-gray-200 dark:border-gray-800 pt-8">
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              Made by Rishav Saha with ❤️.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
