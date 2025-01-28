import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Globe, MessageSquareShare, Mic } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 hero-gradient">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Share Your Wisdom Across Generations
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Preserve your life experiences and insights through AI-powered conversations, creating a lasting legacy for future generations.
              </p>
              <Button size="lg" variant="secondary" className="group">
                Start Sharing
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <MessageSquareShare className="h-8 w-8 mb-4 text-primary" />,
                  title: "Interactive Wisdom Sharing",
                  description: "Share your responses to life scenarios through natural conversations with AI."
                },
                {
                  icon: <Brain className="h-8 w-8 mb-4 text-primary" />,
                  title: "AI-Powered Memory Bank",
                  description: "Our AI helps capture and preserve your experiences and decision-making process."
                },
                {
                  icon: <Globe className="h-8 w-8 mb-4 text-primary" />,
                  title: "Global Wisdom Network",
                  description: "Access shared insights from people around the world while controlling your privacy."
                },
                {
                  icon: <Mic className="h-8 w-8 mb-4 text-primary" />,
                  title: "Voice-Enabled Experience",
                  description: "Share your stories naturally through voice conversations powered by OpenAI."
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 rounded-lg border bg-white hover:shadow-lg transition-shadow text-center">
                  <div className="flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
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
                    title: "Share Your Experiences",
                    description: "Engage in meaningful conversations about life scenarios and share your approach to handling them."
                  },
                  {
                    title: "AI-Enhanced Preservation",
                    description: "Our advanced AI technology captures the essence of your wisdom, making it easily accessible for future reference."
                  },
                  {
                    title: "Connect Across Generations",
                    description: "Create a bridge of knowledge that connects past experiences with future generations seeking guidance."
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