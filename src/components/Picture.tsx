
import { Card, CardContent } from "@/components/ui/card";

export const Picture = () => {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-gray-100 mb-6">
            Meet the Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating digital experiences that make a difference.
          </p>
        </div>

        <div className="flex justify-center">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden bg-white dark:bg-gray-800">
            <CardContent className="p-8">
              <div className="relative">
                {/* Hexagon shaped image container */}
                <div className="w-80 h-80 mx-auto relative">
                  <div
                    className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-500 dark:to-blue-700"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                    }}
                  >
                    <img
                      src="/profile-pic.svg"
                      alt="Rishav Saha - Software Developer"
                      className="w-full h-full object-cover"
                      style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
                      }}
                    />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center animate-pulse">
                  <span className="text-blue-600 dark:text-blue-400 text-2xl">💻</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center animate-pulse delay-500">
                  <span className="text-blue-600 dark:text-blue-400 text-2xl">🚀</span>
                </div>
              </div>

              <div className="text-center mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Rishav Saha
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">
                  Full Stack Developer
                </p>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto leading-relaxed">
                  Crafting digital solutions with passion and precision. Always learning, always building.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
