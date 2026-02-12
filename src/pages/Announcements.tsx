import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Megaphone, Sparkles, Send, Bot, User } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const studyTips = [
  "Break your study sessions into 25-minute focus intervals (Pomodoro technique).",
  "Teach what you've learned to a peer to reinforce understanding.",
  "Use mnemonics to remember complex lists in Anatomy and Pharmacology.",
  "Stay hydrated! Brain function drops significantly with dehydration.",
];

const Announcements = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([
    {role: 'ai', text: "Hello! I am your AI Study Assistant. Ask me to explain a concept, summarize notes, or create a study plan!"}
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if(!query.trim()) return;
    
    const userMessage = query;
    setQuery("");
    setMessages(prev => [...prev, {role: 'user', text: userMessage}]);
    setLoading(true);

    try {
        const response = await fetch('http://localhost:5000/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userMessage })
        });

        const data = await response.json();
        
        setMessages(prev => [...prev, {
            role: 'ai', 
            text: data.reply || "Sorry, I couldn't understand that."
        }]);

    } catch (error) {
        setMessages(prev => [...prev, {
            role: 'ai', 
            text: "Error connecting to the AI server. Please make sure the backend is running."
        }]);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      
      <section className="gradient-primary py-12 shadow-lg">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="p-2 bg-white/20 rounded-full backdrop-blur-sm">
                <Megaphone className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-3xl font-extrabold font-heading text-white">Student Hub</h1>
          </div>
          <p className="text-white/80">Latest updates and your personal AI tutor.</p>
        </div>
      </section>

      <div className="container py-12 grid lg:grid-cols-2 gap-8 items-start">
        {/* Study Tips Section */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="text-yellow-500 fill-yellow-500" />
            <h2 className="text-2xl font-bold font-heading text-slate-800">Study Tips of the Week</h2>
          </div>
          <div className="grid gap-4">
            {studyTips.map((tip, i) => (
              <div key={i} className="bg-white border-l-4 border-yellow-400 p-5 rounded-r-xl shadow-sm hover:shadow-md transition-shadow">
                <p className="text-slate-700 font-medium leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Chat Section */}
        <div className="flex flex-col h-[600px] bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 bg-slate-900 text-white flex items-center gap-3 shadow-md z-10">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-400 to-purple-500 flex items-center justify-center shadow-inner">
                <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
                <h3 className="font-bold">Gemini Assistant</h3>
                <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-xs text-slate-300">Online</span>
                </div>
            </div>
          </div>
          
          {/* Chat Area */}
          <div ref={scrollRef} className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex gap-3 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.role === 'ai' && (
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <Bot className="w-4 h-4 text-blue-600" />
                    </div>
                )}
                
                <div className={`max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-br-none' 
                  : 'bg-white text-slate-700 border border-slate-100 rounded-bl-none'
                }`}>
                  {m.text}
                </div>

                {m.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                        <User className="w-4 h-4 text-slate-600" />
                    </div>
                )}
              </div>
            ))}
            {loading && (
                <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <Bot className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-slate-100">
                        <div className="flex gap-1">
                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></span>
                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                            <span className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        </div>
                    </div>
                </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t">
            <div className="relative flex items-center gap-2">
                <Input 
                  value={query} 
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask for help with your studies..." 
                  className="rounded-full pl-5 pr-12 h-12 bg-slate-50 border-slate-200 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  disabled={loading}
                />
                <Button 
                    size="icon" 
                    onClick={handleSend} 
                    disabled={loading || !query.trim()}
                    className="absolute right-1 top-1 h-10 w-10 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Announcements;