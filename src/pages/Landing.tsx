import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FloatingGenie } from '@/components/FloatingGenie';
import { fadeIn, staggerContainer } from '@/utils/motion';
import { Sparkles, Brain, Target } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5" />
      
      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-4xl mx-auto text-center space-y-8"
      >
        {/* Floating Genie */}
        <motion.div variants={fadeIn('down', 0.2)}>
          <FloatingGenie size="lg" />
        </motion.div>

        {/* Title */}
        <motion.div variants={fadeIn('up', 0.4)} className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            <span className="gradient-text">GENIE</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Your Gamified AI Companion for Emotional Intelligence and Cognitive Growth
          </p>
        </motion.div>

        {/* Features */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12"
        >
          {[
            { icon: Brain, title: 'Emotion Detection', desc: 'Real-time facial emotion tracking' },
            { icon: Sparkles, title: 'AI Tutor', desc: 'Adaptive learning companion' },
            { icon: Target, title: 'Gamified Progress', desc: 'XP, streaks, and achievements' },
          ].map((feature, i) => (
            <div key={i} className="glass-card rounded-2xl p-6 space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.desc}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={fadeIn('up', 0.8)}>
          <Button
            size="lg"
            onClick={() => navigate('/explore')}
            className="text-lg px-8 py-6 shadow-neon-blue hover:shadow-neon-pink transition-all"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Explore GENIE
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Landing;
