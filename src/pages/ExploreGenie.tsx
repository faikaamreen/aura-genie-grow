import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Brain, MessageSquare, BarChart3, BookOpen, TrendingUp, Settings } from 'lucide-react';
import { staggerContainer, fadeIn, hoverScale } from '@/utils/motion';
import { FloatingGenie } from '@/components/FloatingGenie';

const ExploreGenie = () => {
  const navigate = useNavigate();

  const modules = [
    {
      icon: Brain,
      title: 'Emotion Detection',
      description: 'Track your emotions in real-time using facial recognition',
      route: '/emotion',
      gradient: 'from-primary/20 to-primary/5',
    },
    {
      icon: MessageSquare,
      title: 'AI Tutor',
      description: 'Chat with your emotion-adaptive AI learning companion',
      route: '/chat',
      gradient: 'from-secondary/20 to-secondary/5',
    },
    {
      icon: BarChart3,
      title: 'Mood Analysis',
      description: 'Visualize your emotional patterns and performance',
      route: '/dashboard',
      gradient: 'from-accent/20 to-accent/5',
    },
    {
      icon: BookOpen,
      title: 'Gamified Lessons',
      description: 'Learn new skills and earn XP, badges, and streaks',
      route: '/lesson',
      gradient: 'from-primary/20 to-secondary/5',
    },
    {
      icon: TrendingUp,
      title: 'Progress Dashboard',
      description: 'View your stats, achievements, and learning journey',
      route: '/dashboard',
      gradient: 'from-secondary/20 to-accent/5',
    },
    {
      icon: Settings,
      title: 'Automation & Feedback',
      description: 'Generate summaries and reflections on your progress',
      route: '/feedback',
      gradient: 'from-accent/20 to-primary/5',
    },
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 space-y-4"
        >
          <div className="flex justify-center">
            <FloatingGenie size="md" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text">Explore GENIE</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover all the tools designed to enhance your emotional intelligence and cognitive growth
          </p>
        </motion.div>

        {/* Modules Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              variants={fadeIn('up', index * 0.1)}
              whileHover={hoverScale}
              onClick={() => navigate(module.route)}
              className="glass-card rounded-2xl p-6 space-y-4 cursor-pointer border-2 border-transparent hover:border-primary/30 transition-all"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${module.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
              >
                <module.icon className="w-8 h-8 text-primary" />
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">{module.title}</h3>
                <p className="text-sm text-muted-foreground">{module.description}</p>
              </div>

              <div className="flex items-center text-sm text-primary font-semibold">
                Explore →
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ExploreGenie;
