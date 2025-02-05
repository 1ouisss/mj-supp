import { Card } from "@/components/ui/card";
import { ReactNode, useMemo, useEffect } from "react";

interface QuizLayoutProps {
  children: ReactNode;
  currentQuestion: number;
}

const backgroundImages = [
  '/lovable-uploads/3e65bec2-4941-441a-89ed-a79bc8965a02.png',
  '/lovable-uploads/d5909b03-6e45-4800-9745-c277e084faf9.png',
  '/lovable-uploads/2e0bb200-ebeb-42d1-9631-c0fd9eb9d463.png',
  '/lovable-uploads/7336c578-a712-4ec7-bf62-9be26f615a1f.png',
  '/lovable-uploads/8f477ad6-19c0-4072-9d12-a6338adacc31.png'
];

// Preload images function
const preloadImages = () => {
  backgroundImages.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

export const QuizLayout = ({ children, currentQuestion }: QuizLayoutProps) => {
  // Preload images on component mount
  useEffect(() => {
    preloadImages();
  }, []);

  const currentBackground = useMemo(() => {
    const index = currentQuestion % backgroundImages.length;
    return backgroundImages[index];
  }, [currentQuestion]);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 transition-all duration-500 ease-in-out"
      style={{
        backgroundColor: '#E4D780',
        backgroundImage: `linear-gradient(to bottom, rgba(228, 215, 128, 0.95), rgba(228, 215, 128, 0.95)), url('${currentBackground}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#E4D780]/30 to-[#E4D780]/30 transition-opacity duration-500" />
      <Card className="max-w-2xl w-full bg-white/90 backdrop-blur-sm p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 relative z-10 animate-fade-in">
        {children}
      </Card>
    </div>
  );
};