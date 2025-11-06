import React, { createContext, useContext, useState } from 'react';

interface EmotionContextType {
  currentEmotion: string;
  emotionHistory: Array<{ emotion: string; timestamp: Date }>;
  updateEmotion: (emotion: string) => void;
}

const EmotionContext = createContext<EmotionContextType | null>(null);

export const useEmotion = () => {
  const context = useContext(EmotionContext);
  if (!context) throw new Error('useEmotion must be used within EmotionProvider');
  return context;
};

export const EmotionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentEmotion, setCurrentEmotion] = useState<string>('neutral');
  const [emotionHistory, setEmotionHistory] = useState<Array<{ emotion: string; timestamp: Date }>>([]);

  const updateEmotion = (emotion: string) => {
    setCurrentEmotion(emotion);
    setEmotionHistory((prev) => [...prev, { emotion, timestamp: new Date() }]);
  };

  const value: EmotionContextType = {
    currentEmotion,
    emotionHistory,
    updateEmotion,
  };

  return <EmotionContext.Provider value={value}>{children}</EmotionContext.Provider>;
};
