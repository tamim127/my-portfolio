import { useState, useEffect } from "react";
import { Commet } from "react-loading-indicators";

const SplashScreen = ({ onFinish }) => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      if (onFinish) onFinish(); // Optional callback to show main content
    }, 2000); // 2 seconds splash
    return () => clearTimeout(timer);
  }, [onFinish]);

  if (!showSplash) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black  overflow-hidden px-4">
      {/* Floating shapes */}
      <div className="absolute top-10 left-5 w-4 h-4 bg-white rounded-full opacity-30 animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-pink-500 rounded-full opacity-40 animate-bounce-slower"></div>
      <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-yellow-500 rounded-full opacity-25 animate-bounce"></div>
      <div className="absolute bottom-1/3 left-1/4 w-5 h-5 bg-indigo-400 rounded-full opacity-20 animate-bounce-slow"></div>

      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        {/* Main Heading */}
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold animate-pulse drop-shadow-lg">
          Assalamu Alaikum!
        </h1>

        {/* Sub Heading */}
        <h2 className="text-amber-300 text-xl sm:text-2xl md:text-4xl font-semibold animate-fadeIn drop-shadow-md">
          Welcome to my Portfolio Website
        </h2>

        {/* Loader */}
        <div className="mt-6">
          <Commet color="#cc3190" size="medium" text="" textColor="" />
        </div>

        {/* Footer */}
        <p className="text-white text-sm sm:text-base mt-70 drop-shadow-md">
          Developed by Tamim.dev
        </p>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.2s ease-in-out forwards;
        }
        .animate-bounce-slow {
          animation: bounce 3s infinite alternate;
        }
        .animate-bounce-slower {
          animation: bounce 4s infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;
