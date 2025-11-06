import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEmotion } from '@/context/EmotionContext';
import { fadeIn, staggerContainer } from '@/utils/motion';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AITutor = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi! I'm GENIE, your AI companion. How can I help you today?" },
  ]);
  const [input, setInput] = useState('');
  const { currentEmotion } = useEmotion();

  const generateAIResponse = (userMessage: string): string => {
    // Emotion-adaptive responses
    const emotionPrefixes: Record<string, string> = {
      happy: "That's wonderful! ",
      sad: "I understand this might be difficult. ",
      angry: "I hear you, let's work through this together. ",
      surprised: "That's interesting! ",
      neutral: "",
    };

    const prefix = emotionPrefixes[currentEmotion] || "";

    // Simple mock responses
    if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
      return `${prefix}Hello! How can I assist you with learning today?`;
    }
    if (userMessage.toLowerCase().includes('help')) {
      return `${prefix}I'm here to help! I can assist with lessons, answer questions, or just chat. What would you like to explore?`;
    }
    if (userMessage.toLowerCase().includes('learn')) {
      return `${prefix}Great! I can help you learn various topics. Check out the Lessons page to explore structured learning paths.`;
    }

    return `${prefix}That's a great question! Let me think about that... Based on your current emotion (${currentEmotion}), I'd say you're in a good mindset for learning.`;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        role: 'assistant',
        content: generateAIResponse(input),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 500);

    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 h-full flex flex-col">
      <motion.div
        className="flex-1 space-y-4 overflow-y-auto mb-4 pr-2"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
      >
        {messages.map((message, index) => (
          <motion.div
            key={index}
            variants={fadeIn('up', index * 0.1)}
            className={`flex items-start gap-3 ${
              message.role === 'user' ? 'flex-row-reverse' : ''
            }`}
          >
            <div
              className={`p-2 rounded-full ${
                message.role === 'user' ? 'bg-primary/20' : 'bg-secondary/20'
              }`}
            >
              {message.role === 'user' ? (
                <User className="w-4 h-4" />
              ) : (
                <Bot className="w-4 h-4" />
              )}
            </div>

            <div
              className={`max-w-[80%] p-4 rounded-2xl ${
                message.role === 'user'
                  ? 'bg-primary/10 border border-primary/20'
                  : 'bg-card border border-border'
              }`}
            >
              <p className="text-sm">{message.content}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          className="flex-1"
        />
        <Button onClick={handleSend} size="icon">
          <Send className="w-4 h-4" />
        </Button>
      </div>

      <p className="text-xs text-muted-foreground mt-2">
        Current emotion: <span className="text-primary capitalize">{currentEmotion}</span>
      </p>
    </div>
  );
};
