import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Globe, MessageSquareShare, Mic, Sparkles, Clock, LogOut } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="absolute top-4 right-4">
        <Button variant="ghost" onClick={handleLogout}>
          <LogOut className="h-4 w-4 mr-2" />
          Logout
        </Button>
      </div>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                AI-Powered Knowledge Transfer Across Generations
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Share your wisdom through interactive conversations. Our AI helps capture your unique perspectives and experiences, making them accessible to future generations through voice-enabled learning experiences.
              </p>
              <Button size="lg" variant="secondary" className="group">
                Start Learning
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Brain className="h-8 w-8 mb-4 text-primary" />,
                  title: "Smart Learning Templates",
                  description: "Multiple formats including explanations, flashcards, scenarios, and interactive exercises to capture knowledge effectively."
                },
                {
                  icon: <Sparkles className="h-8 w-8 mb-4 text-primary" />,
                  title: "AI-Powered Similarity Detection",
                  description: "Advanced vector database ensures unique content and prevents duplicates while maintaining quality."
                },
                {
                  icon: <Globe className="h-8 w-8 mb-4 text-primary" />,
                  title: "Global Knowledge Network",
                  description: "Access a vast repository of wisdom shared by users worldwide, with customizable privacy settings."
                },
                {
                  icon: <Mic className="h-8 w-8 mb-4 text-primary" />,
                  title: "Voice-Enabled Experience",
                  description: "Natural voice interactions powered by OpenAI for seamless knowledge sharing and learning."
                },
                {
                  icon: <MessageSquareShare className="h-8 w-8 mb-4 text-primary" />,
                  title: "Interactive Scenarios",
                  description: "AI-generated real-world scenarios help capture your decision-making process and problem-solving approach."
                },
                {
                  icon: <Clock className="h-8 w-8 mb-4 text-primary" />,
                  title: "Smart Learning Queue",
                  description: "Balanced learning schedule with our 'Touch Grass' feature to prevent information overload."
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 rounded-lg border bg-white hover:shadow-lg transition-shadow">
                  <div className="flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    title: "Share Your Knowledge",
                    description: "Engage with AI-powered conversations that capture your unique perspectives and experiences through various learning templates."
                  },
                  {
                    title: "Smart Content Organization",
                    description: "Our vector database ensures your wisdom is properly categorized and easily accessible, while preventing duplicate content."
                  },
                  {
                    title: "Voice-Enabled Learning",
                    description: "Use natural voice commands to interact with the platform, making knowledge sharing as simple as having a conversation."
                  },
                  {
                    title: "Balanced Learning Experience",
                    description: "Access curated learning queues with our smart scheduling system that prevents information overload while maintaining engagement."
                  }
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;