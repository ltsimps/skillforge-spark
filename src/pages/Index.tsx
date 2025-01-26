import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
                Master New Skills with SkillForge
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Unlock your potential with our expert-led courses and hands-on learning experiences.
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
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Instructors",
                  description: "Learn from industry professionals with years of experience."
                },
                {
                  title: "Flexible Learning",
                  description: "Study at your own pace with our on-demand courses."
                },
                {
                  title: "Practical Projects",
                  description: "Apply your knowledge with real-world projects and exercises."
                }
              ].map((feature, index) => (
                <div key={index} className="p-6 rounded-lg border bg-white hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;