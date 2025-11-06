import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LessonCard } from '@/components/LessonCard';
import { useXPSystem } from '@/hooks/useXPSystem';
import { staggerContainer, fadeIn } from '@/utils/motion';
import { useToast } from '@/hooks/use-toast';

const Lesson = () => {
  const navigate = useNavigate();
  const { addXP, incrementStreak, addBadge } = useXPSystem();
  const { toast } = useToast();

  const lessons = [
    {
      id: 1,
      title: 'Introduction to Emotional Intelligence',
      description: 'Learn the fundamentals of understanding and managing emotions',
      duration: '15 min',
      xpReward: 50,
      difficulty: 'beginner' as const,
    },
    {
      id: 2,
      title: 'Building Self-Awareness',
      description: 'Develop skills to recognize your own emotional patterns',
      duration: '20 min',
      xpReward: 75,
      difficulty: 'beginner' as const,
    },
    {
      id: 3,
      title: 'Empathy and Social Skills',
      description: 'Master the art of understanding others and building connections',
      duration: '25 min',
      xpReward: 100,
      difficulty: 'intermediate' as const,
    },
    {
      id: 4,
      title: 'Emotional Regulation Techniques',
      description: 'Advanced strategies for managing stress and difficult emotions',
      duration: '30 min',
      xpReward: 150,
      difficulty: 'advanced' as const,
    },
    {
      id: 5,
      title: 'Mindfulness Practice',
      description: 'Integrate mindfulness into your daily routine for better emotional health',
      duration: '20 min',
      xpReward: 100,
      difficulty: 'intermediate' as const,
    },
    {
      id: 6,
      title: 'Cognitive Flexibility',
      description: 'Enhance your ability to adapt thinking patterns and perspectives',
      duration: '25 min',
      xpReward: 125,
      difficulty: 'advanced' as const,
    },
  ];

  const handleStartLesson = async (lesson: typeof lessons[0]) => {
    // Simulate lesson completion
    await addXP(lesson.xpReward);
    await incrementStreak();

    // Award badges based on milestones
    if (lesson.difficulty === 'beginner') {
      await addBadge('First Steps');
    } else if (lesson.difficulty === 'advanced') {
      await addBadge('Expert Learner');
    }

    toast({
      title: 'Lesson Started!',
      description: `You'll earn ${lesson.xpReward} XP upon completion`,
    });
  };

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <Button variant="ghost" onClick={() => navigate('/explore')} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Explore
          </Button>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Gamified Lessons</h1>
              <p className="text-muted-foreground">Learn, grow, and earn rewards</p>
            </div>
          </div>
        </motion.div>

        {/* Lessons Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {lessons.map((lesson, index) => (
            <motion.div key={lesson.id} variants={fadeIn('up', index * 0.1)}>
              <LessonCard {...lesson} onStart={() => handleStartLesson(lesson)} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Lesson;
