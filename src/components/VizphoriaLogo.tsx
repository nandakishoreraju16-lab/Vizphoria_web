import { motion } from "motion/react";
import { Crown } from "lucide-react";

interface VizphoriaLogoProps {
  size?: "small" | "medium" | "large";
  animated?: boolean;
  showSubtitle?: boolean;
  className?: string;
}

export function VizphoriaLogo({ 
  size = "medium", 
  animated = false,
  showSubtitle = true,
  className = "" 
}: VizphoriaLogoProps) {
  const sizeClasses = {
    small: "text-3xl md:text-4xl",
    medium: "text-5xl md:text-7xl",
    large: "text-7xl md:text-9xl",
  };

  const crownSizes = {
    small: "w-8 h-8",
    medium: "w-12 h-12 md:w-16 md:h-16",
    large: "w-16 h-16 md:w-24 md:h-24",
  };

  const LogoContent = () => (
    <div className={`inline-flex flex-col items-center ${className}`}>
      {/* Crown ornament */}
      <motion.div
        animate={animated ? {
          y: [0, -8, 0],
          rotate: [0, 5, -5, 0],
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="mb-2"
      >
        <Crown className={`${crownSizes[size]} text-[#C9A227]`} />
      </motion.div>

      {/* Main logo text */}
      <div className="relative">
        {/* Gold glow effect */}
        <div 
          className="absolute inset-0 blur-2xl opacity-40"
          style={{ 
            background: 'radial-gradient(ellipse, #C9A227 0%, transparent 70%)',
            transform: 'scale(1.2)',
          }}
        />
        
        {/* Text with gradient and shadow */}
        <h1 
          className={`${sizeClasses[size]} font-['Playfair_Display'] italic relative z-10`}
          style={{
            backgroundImage: 'linear-gradient(135deg, #C9A227 0%, #E5C158 25%, #C9A227 50%, #9B7E1F 75%, #C9A227 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 4px 12px rgba(201, 162, 39, 0.3)',
            fontWeight: 700,
            letterSpacing: '0.05em',
          }}
        >
          Vizphoria
        </h1>
        
        {/* Decorative underline */}
        <div className="flex items-center justify-center gap-2 mt-1">
          <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#C9A227]" />
          <div className="w-2 h-2 rounded-full bg-[#C9A227]" />
          <div className="h-px w-16 bg-gradient-to-r from-[#C9A227] via-[#E5C158] to-[#C9A227]" />
          <div className="w-2 h-2 rounded-full bg-[#C9A227]" />
          <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#C9A227]" />
        </div>
      </div>

      {/* Subtitle */}
      {showSubtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`font-['EB_Garamond'] italic text-[#660000] mt-2 ${
            size === 'large' ? 'text-xl md:text-3xl' : 
            size === 'medium' ? 'text-lg md:text-xl' : 
            'text-sm md:text-base'
          }`}
        >
          A Renaissance Celebration
        </motion.p>
      )}
    </div>
  );

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ 
          duration: 1, 
          type: "spring",
          stiffness: 100 
        }}
      >
        <LogoContent />
      </motion.div>
    );
  }

  return <LogoContent />;
}
