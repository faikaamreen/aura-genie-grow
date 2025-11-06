import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DashboardStats } from '@/components/DashboardStats';
import { MoodChart } from '@/components/MoodChart';
import { useXPSystem } from '@/hooks/useXPSystem';
import { fadeIn } from '@/utils/motion';

const Dashboard = () => {
  const navigate = useNavigate();
  const { userData } = useXPSystem();

  // Mock mood data
  const moodData = [
    { date: 'Mon', mood: 7 },
    { date: 'Tue', mood: 8 },
    { date: 'Wed', mood: 6 },
    { date: 'Thu', mood: 9 },
    { date: 'Fri', mood: 8 },
    { date: 'Sat', mood: 7 },
    { date: 'Sun', mood: 9 },
  ];

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
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Progress Dashboard</h1>
              <p className="text-muted-foreground">Track your growth and achievements</p>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <DashboardStats
          xp={userData.xp}
          level={userData.level}
          streak={userData.streak}
          badges={userData.badges}
        />

        {/* Mood Chart */}
        <motion.div variants={fadeIn('up', 0.4)} initial="hidden" animate="show">
          <MoodChart data={moodData} />
        </motion.div>

        {/* Badges Section */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          animate="show"
          className="glass-card rounded-2xl p-6"
        >
          <h2 className="text-xl font-bold mb-4">Your Badges</h2>
          {userData.badges.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {userData.badges.map((badge, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-yellow-400/20 to-yellow-600/20 rounded-xl p-4 text-center"
                >
                  <p className="text-2xl mb-2">🏆</p>
                  <p className="text-sm font-semibold">{badge}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">Complete lessons to earn badges!</p>
          )}
        </motion.div>

        {/* Insights */}
        <motion.div
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          animate="show"
          className="glass-card rounded-2xl p-6"
        >
          <h2 className="text-xl font-bold mb-4">Insights</h2>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <span className="text-sm">Most common emotion</span>
              <span className="font-semibold text-primary">Happy</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <span className="text-sm">Best learning time</span>
              <span className="font-semibold text-primary">Morning</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
              <span className="text-sm">Lessons completed</span>
              <span className="font-semibold text-primary">{Math.floor(userData.xp / 50)}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
