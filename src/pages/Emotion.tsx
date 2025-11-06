import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EmotionTracker } from '@/components/EmotionTracker';
import { useEmotion } from '@/context/EmotionContext';
import { fadeIn } from '@/utils/motion';

const Emotion = () => {
  const navigate = useNavigate();
  const { emotionHistory } = useEmotion();

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <Button variant="ghost" onClick={() => navigate('/explore')} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Explore
          </Button>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Emotion Detection</h1>
              <p className="text-muted-foreground">Track your emotions in real-time</p>
            </div>
          </div>
        </motion.div>

        {/* Emotion Tracker */}
        <motion.div variants={fadeIn('up', 0.2)} initial="hidden" animate="show">
          <EmotionTracker />
        </motion.div>

        {/* Emotion History */}
        {emotionHistory.length > 0 && (
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            className="glass-card rounded-2xl p-6"
          >
            <h2 className="text-xl font-bold mb-4">Recent Emotions</h2>
            <div className="space-y-2">
              {emotionHistory.slice(-5).reverse().map((entry, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                >
                  <span className="capitalize font-semibold text-primary">{entry.emotion}</span>
                  <span className="text-sm text-muted-foreground">
                    {new Date(entry.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Info Card */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          animate="show"
          className="glass-card rounded-2xl p-6"
        >
          <h3 className="font-semibold mb-2">How it works</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>• Click "Start Emotion Tracking" to begin</li>
            <li>• Allow camera access when prompted</li>
            <li>• GENIE will detect your facial expressions in real-time</li>
            <li>• Your emotions are saved and used to adapt your learning experience</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Emotion;
