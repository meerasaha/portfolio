
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
}

export const Card3D = ({ children, className = "" }: Card3DProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    setMousePosition({ x, y });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  const transform = isHovered
    ? `perspective(1000px) rotateY(${mousePosition.x * 15}deg) rotateX(${-mousePosition.y * 15}deg) translateZ(20px)`
    : 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)';

  return (
    <div
      className={`transition-all duration-300 ease-out ${className}`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card className="relative overflow-hidden bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300">
        {isHovered && (
          <div 
            className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none"
            style={{
              transform: `translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 20}px)`,
            }}
          />
        )}
        {children}
      </Card>
    </div>
  );
};
