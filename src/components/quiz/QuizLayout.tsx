import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface QuizLayoutProps {
  children: ReactNode;
}

export const QuizLayout = ({ children }: QuizLayoutProps) => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8"
      style={{
        backgroundImage: `url('/lovable-uploads/ce08bdaa-0440-4064-9cd7-04bd6a5ed979.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-400/20 to-yellow-500/20" />
      <Card className="max-w-2xl w-full bg-white/90 backdrop-blur-sm p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8 relative z-10">
        {children}
      </Card>
    </div>
  );
};