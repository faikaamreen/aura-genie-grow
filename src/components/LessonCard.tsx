import { motion } from 'framer-motion';
import { BookOpen, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scaleIn, hoverScale } from '@/utils/motion';

interface LessonCardProps {
  title: string;
  description: string;
  duration: string;
  xpReward: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  onStart: () => void;
}

export const LessonCard = ({ title, description, duration, xpReward, difficulty, onStart }: LessonCardProps) => {
  const difficultyColors = {
    beginner: 'text-green-400',
    intermediate: 'text-yellow-400',
    advanced: 'text-red-400',
  };

  return (
    <motion.div
      variants={scaleIn}
      whileHover={hoverScale}
      className="glass-card rounded-2xl p-6 space-y-4 cursor-pointer border-2 border-transparent hover:border-primary/30 transition-all"
    >
      <div className="flex items-start justify-between">
        <div className="p-3 bg-primary/10 rounded-xl">
          <BookOpen className="w-6 h-6 text-primary" />
        </div>
        <div className="flex items-center gap-1 text-sm">
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="font-semibold">{xpReward} XP</span>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{duration}</span>
        </div>
        <span className={`capitalize font-semibold ${difficultyColors[difficulty]}`}>{difficulty}</span>
      </div>

      <Button onClick={onStart} className="w-full">
        Start Lesson
      </Button>
    </motion.div>
  );
};
