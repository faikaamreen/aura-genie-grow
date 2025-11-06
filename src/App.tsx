import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { EmotionProvider } from "@/context/EmotionContext";
import Landing from "./pages/Landing";
import ExploreGenie from "./pages/ExploreGenie";
import Emotion from "./pages/Emotion";
import Chat from "./pages/Chat";
import Lesson from "./pages/Lesson";
import Dashboard from "./pages/Dashboard";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <EmotionProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/explore" element={<ExploreGenie />} />
              <Route path="/emotion" element={<Emotion />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/lesson" element={<Lesson />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/feedback" element={<Feedback />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </EmotionProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
