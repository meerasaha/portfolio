
export const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated geometric shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-blue-400/30 rotate-45 animate-spin" 
           style={{ animationDuration: '20s' }}></div>
      
      <div className="absolute top-40 right-20 w-12 h-12 bg-blue-500/20 rounded-full animate-bounce"
           style={{ animationDelay: '1s', animationDuration: '3s' }}></div>
      
      <div className="absolute bottom-40 left-20 w-8 h-8 bg-purple-500/30 transform rotate-45 animate-pulse"
           style={{ animationDelay: '2s' }}></div>
      
      <div className="absolute top-60 left-1/3 w-6 h-20 bg-gradient-to-b from-blue-400/20 to-transparent animate-pulse"
           style={{ animationDelay: '0.5s' }}></div>
      
      <div className="absolute bottom-60 right-1/4 w-14 h-14 border-2 border-purple-400/30 rounded-full animate-ping"
           style={{ animationDuration: '4s' }}></div>
      
      {/* CSS Grid pattern */}
      <div className="absolute top-32 right-32 w-24 h-24 opacity-20">
        <div className="grid grid-cols-3 gap-1 h-full">
          {Array.from({ length: 9 }).map((_, i) => (
            <div 
              key={i} 
              className="bg-blue-400 animate-pulse" 
              style={{ 
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s'
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Binary code rain effect */}
      <div className="absolute right-10 top-0 h-full w-1 opacity-30">
        <div className="text-green-400 text-xs font-mono animate-pulse">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="mb-2" style={{ animationDelay: `${i * 0.1}s` }}>
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
