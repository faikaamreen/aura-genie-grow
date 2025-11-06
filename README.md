# GENIE - Gamified AI Companion for Emotional Intelligence

Welcome to GENIE, your AI-powered companion for emotional intelligence and cognitive growth!

## 🌟 Features

### Core Modules
- **🧠 Emotion Detection**: Real-time facial emotion tracking using face-api.js
- **💬 AI Tutor**: Emotion-adaptive chat companion for personalized learning
- **📊 Mood Analysis**: Visualize emotional patterns with interactive charts
- **📚 Gamified Lessons**: Learn and earn XP, badges, and maintain streaks
- **📈 Progress Dashboard**: Track your stats and achievements
- **⚙️ Automation & Feedback**: Generate AI-powered summaries of your reflections

### Technologies
- **Frontend**: React + Vite + TypeScript
- **Styling**: TailwindCSS with custom neon pastel theme
- **Animations**: Framer Motion
- **Backend**: Firebase (Auth + Firestore)
- **Charts**: Recharts
- **Emotion Detection**: face-api.js

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd genie
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:8080`

## 📱 App Structure

```
src/
├── components/        # Reusable UI components
│   ├── FloatingGenie.tsx
│   ├── EmotionTracker.tsx
│   ├── AITutor.tsx
│   ├── LessonCard.tsx
│   ├── DashboardStats.tsx
│   └── MoodChart.tsx
├── pages/            # Main application pages
│   ├── Landing.tsx
│   ├── ExploreGenie.tsx
│   ├── Emotion.tsx
│   ├── Chat.tsx
│   ├── Lesson.tsx
│   ├── Dashboard.tsx
│   └── Feedback.tsx
├── context/          # React Context providers
│   ├── AuthContext.tsx
│   └── EmotionContext.tsx
├── hooks/            # Custom React hooks
│   ├── useAuth.ts
│   └── useXPSystem.ts
├── config/           # Configuration files
│   └── firebase.js
└── utils/            # Utility functions
    └── motion.js
```

## 🎨 Design System

The app features a **neon pastel aesthetic** with:
- Blue → Pink → Purple gradients
- Glassmorphism effects
- Smooth animations
- Hover glow effects
- Dark theme with vibrant accents

All design tokens are defined in:
- `src/index.css` - CSS variables
- `tailwind.config.ts` - Tailwind theme extensions

## 🔥 Firebase Setup

The app is pre-configured with Firebase. The following collections are used:

- **users**: User profiles with XP, level, streak, badges
- **emotions**: Emotion detection history
- **lessons**: (Optional) Lesson completion tracking

### Firebase Collections Structure

```typescript
// users collection
{
  email: string,
  xp: number,
  level: number,
  streak: number,
  badges: string[],
  createdAt: string
}

// emotions collection
{
  userId: string,
  emotion: string,
  timestamp: string
}
```

## 🧩 Key Components

### FloatingGenie
Animated mascot with particle effects and glow animations.

### EmotionTracker
Webcam-based emotion detection using face-api.js. Detects:
- Happy
- Sad
- Angry
- Surprised
- Neutral
- Fearful
- Disgusted

### AITutor
Chat interface with emotion-adaptive responses. Currently uses mock responses - ready for AI integration.

### LessonCard
Gamified lesson cards with XP rewards, difficulty levels, and progress tracking.

### DashboardStats
Overview cards showing Level, XP, Streak, and Badges with animated progress indicators.

### MoodChart
Line chart visualization of mood trends over time using Recharts.

## 🎮 Gamification System

### XP System
- Complete lessons to earn XP
- Level up every 100 XP
- Track progress in real-time

### Streaks
- Maintain daily learning streaks
- Visual streak counter in dashboard

### Badges
- Earn badges for milestones
- "First Steps" - Complete first beginner lesson
- "Expert Learner" - Complete advanced lesson
- Extensible badge system

## 🔮 Next Steps

### AI Integration
Replace mock AI responses in `AITutor` component with:
- OpenAI GPT API
- Google Gemini
- Anthropic Claude
- Or any LLM of your choice

### Automation (n8n)
The Feedback page simulates automation triggers. Connect to n8n for:
- Automated progress reports
- Email summaries
- Slack notifications
- Custom workflows

### Enhanced Emotion Detection
- Add more emotion categories
- Implement emotion history analytics
- Create emotion-based recommendations

### Social Features
- Leaderboards
- Friend challenges
- Share achievements

## 🚢 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel
```

### Deploy to Render
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📄 License

This project was built with Lovable.

## 🙏 Acknowledgments

- **face-api.js** for emotion detection
- **Framer Motion** for smooth animations
- **Recharts** for beautiful charts
- **Firebase** for backend services
- **TailwindCSS** for styling

---

Built with ❤️ using React, TypeScript, and AI
