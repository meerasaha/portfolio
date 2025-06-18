
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

export const AnimatedCode = () => {
  const [displayedCode, setDisplayedCode] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  const codeLines = [
    "const developer = {",
    "  name: 'John Doe',",
    "  skills: ['React', 'TypeScript', 'Node.js'],",
    "  passion: 'Building amazing experiences',",
    "  status: 'Available for hire'",
    "};",
    "",
    "console.log('Welcome to my portfolio!');",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentLineIndex < codeLines.length) {
        const currentLine = codeLines[currentLineIndex];
        if (currentCharIndex < currentLine.length) {
          setDisplayedCode(prev => prev + currentLine[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        } else {
          // Move to next line
          setDisplayedCode(prev => prev + '\n');
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
        }
      } else {
        // Reset animation after completion
        setTimeout(() => {
          setDisplayedCode("");
          setCurrentLineIndex(0);
          setCurrentCharIndex(0);
        }, 3000);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex, codeLines]);

  return (
    <Card className="bg-gray-900 dark:bg-gray-950 border-gray-700 shadow-lg overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 text-sm ml-2">portfolio.js</span>
        </div>
        <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre">
          {displayedCode}
          <span className="animate-pulse bg-green-400 w-2 h-5 inline-block ml-1"></span>
        </pre>
      </CardContent>
    </Card>
  );
};
