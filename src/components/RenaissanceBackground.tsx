import { motion } from "motion/react";

export function RenaissanceBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#F5F1E8]">
      {/* Vintage paper texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Radial gradient vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-[#E8E4DB]/30" />
      
      {/* Top golden light rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-10 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-0 left-1/2 w-[2px] h-full origin-top"
            style={{
              background: 'linear-gradient(to bottom, #C9A227, transparent)',
              transform: `translateX(-50%) rotate(${(i - 4) * 8}deg)`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      {/* Floating golden particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            background: 'radial-gradient(circle, #E5C158, #C9A227)',
          }}
          animate={{
            y: [0, -100 - Math.random() * 100],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 8,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Ornamental corner decorations */}
      <div className="absolute top-0 left-0 w-48 h-48 opacity-10">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0 Q50 0 50 50 T0 100 M0 0 Q0 50 50 50 T100 0"
            stroke="#C9A227"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      
      <div className="absolute top-0 right-0 w-48 h-48 opacity-10 rotate-90">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0 Q50 0 50 50 T0 100 M0 0 Q0 50 50 50 T100 0"
            stroke="#C9A227"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-10 -rotate-90">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0 Q50 0 50 50 T0 100 M0 0 Q0 50 50 50 T100 0"
            stroke="#C9A227"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10 rotate-180">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 0 Q50 0 50 50 T0 100 M0 0 Q0 50 50 50 T100 0"
            stroke="#C9A227"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
      
      {/* Animated ambient orbs */}
      <motion.div
        className="absolute top-20 left-[10%] w-96 h-96 rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, #C9A227, transparent)' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.25, 0.15],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-[15%] w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
        style={{ background: 'radial-gradient(circle, #660000, transparent)' }}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.2, 0.1],
          x: [0, -40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
