import { motion } from 'framer-motion';
import { Trophy, Zap, Flame, Award } from 'lucide-react';
import { fadeIn } from '@/utils/motion';

interface DashboardStatsProps {
  xp: number;
  level: number;
  streak: number;
  badges: string[];
}

export const DashboardStats = ({ xp, level, streak, badges }: DashboardStatsProps) => {
  const stats = [
    {
      icon: Trophy,
      label: 'Level',
      value: level,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Zap,
      label: 'Total XP',
      value: xp,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Flame,
      label: 'Day Streak',
      value: streak,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: Award,
      label: 'Badges',
      value: badges.length,
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-400/10',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          variants={fadeIn('up', index * 0.1)}
          initial="hidden"
          animate="show"
          className="glass-card rounded-2xl p-6 space-y-3"
        >
          <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
            <stat.icon className={`w-6 h-6 ${stat.color}`} />
          </div>

          <div>
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>

          {/* Progress indicator for XP */}
          {stat.label === 'Total XP' && (
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-neon"
                initial={{ width: 0 }}
                animate={{ width: `${(xp % 100)}%` }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
};
