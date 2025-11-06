import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Settings, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { fadeIn } from '@/utils/motion';
import { useToast } from '@/hooks/use-toast';
import { useXPSystem } from '@/hooks/useXPSystem';

const Feedback = () => {
  const navigate = useNavigate();
  const [feedback, setFeedback] = useState('');
  const [summary, setSummary] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();
  const { userData } = useXPSystem();

  const generateSummary = async () => {
    if (!feedback.trim()) {
      toast({
        title: 'No content',
        description: 'Please write some reflections first',
        variant: 'destructive',
      });
      return;
    }

    setIsGenerating(true);

    // Simulate AI summary generation (in production, this would trigger n8n automation)
    setTimeout(() => {
      const mockSummary = `Based on your reflections, you've shown great progress in understanding your emotional patterns. Your current level is ${userData.level} with ${userData.xp} XP earned. 

Key insights:
• You're developing strong self-awareness
• Your emotional regulation skills are improving
• Consider focusing on empathy building next

Keep up the excellent work! Your ${userData.streak}-day streak shows your commitment to growth.`;

      setSummary(mockSummary);
      setIsGenerating(false);

      toast({
        title: 'Summary Generated!',
        description: 'Your reflection summary is ready',
      });
    }, 2000);
  };

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
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
              <Settings className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Automation & Feedback</h1>
              <p className="text-muted-foreground">Reflect on your journey and generate insights</p>
            </div>
          </div>
        </motion.div>

        {/* Reflection Input */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          className="glass-card rounded-2xl p-6 space-y-4"
        >
          <div>
            <h2 className="text-xl font-bold mb-2">Your Reflections</h2>
            <p className="text-sm text-muted-foreground mb-4">
              Write about your learning journey, emotions, or insights
            </p>
          </div>

          <Textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Today I learned about emotional intelligence and how it impacts my daily interactions. I noticed that..."
            className="min-h-[200px] resize-none"
          />

          <Button onClick={generateSummary} disabled={isGenerating} className="w-full">
            <Sparkles className="w-4 h-4 mr-2" />
            {isGenerating ? 'Generating...' : 'Generate AI Summary'}
          </Button>
        </motion.div>

        {/* Summary Output */}
        {summary && (
          <motion.div
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            className="glass-card rounded-2xl p-6 space-y-4"
          >
            <h2 className="text-xl font-bold">AI-Generated Summary</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground whitespace-pre-line">{summary}</p>
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
          <h3 className="font-semibold mb-2">About Automation</h3>
          <p className="text-sm text-muted-foreground">
            This feature simulates integration with automation tools like n8n. In production, your
            reflections would be processed to generate personalized insights, track progress over time,
            and trigger notifications or actions based on your emotional patterns.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Feedback;
