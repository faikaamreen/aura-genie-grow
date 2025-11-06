import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface FloatingGenieProps {
  size?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

export const FloatingGenie = ({ size = 'md', animate = true }: FloatingGenieProps) => {
  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
  };

  return (
    <motion.div
      className={`${sizes[size]} relative flex items-center justify-center`}
      animate={
        animate
          ? {
              y: [-10, 10, -10],
              rotate: [-5, 5, -5],
            }
          : {}
      }
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      whileHover={{ scale: 1.1 }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-neon opacity-30 blur-xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Genie body */}
      <div className="relative glass-card rounded-full p-6 border-2 border-primary/30">
        <Sparkles className="w-full h-full text-primary" strokeWidth={1.5} />
        
        {/* Particle effects */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};
