import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { AITutor } from '@/components/AITutor';
import { fadeIn } from '@/utils/motion';

const Chat = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto space-y-6 h-[calc(100vh-3rem)]">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
          <Button variant="ghost" onClick={() => navigate('/explore')} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Explore
          </Button>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">AI Tutor</h1>
              <p className="text-muted-foreground">Chat with your emotion-adaptive learning companion</p>
            </div>
          </div>
        </motion.div>

        {/* AI Tutor Component */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          className="h-[calc(100%-8rem)]"
        >
          <AITutor />
        </motion.div>
      </div>
    </div>
  );
};

export default Chat;
