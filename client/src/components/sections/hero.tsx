import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket } from "lucide-react";

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-6 bg-[var(--lerix-teal)]/10 text-[var(--lerix-dark)] hover:bg-[var(--lerix-teal)]/20">
              <Rocket className="mr-2 h-4 w-4" />
              Seeking Seed Funding
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              The Future of{" "}
              <span className="text-[var(--lerix-teal)]">AI-Powered</span>{" "}
              Website Analytics
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              LerixAI revolutionizes website optimization with instant AI analysis, threat detection, and actionable insights. One dashboard. Infinite possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("#investment")}
                className="bg-[var(--lerix-teal)] text-white hover:bg-[var(--lerix-dark)] px-8 py-4 text-lg h-auto"
              >
                View Investment Deck
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("#solution")}
                className="border-2 border-[var(--lerix-teal)] text-[var(--lerix-teal)] hover:bg-[var(--lerix-teal)] hover:text-white px-8 py-4 text-lg h-auto"
              >
                Request Demo
              </Button>
            </div>
          </div>
          <div className="animate-slide-up">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="AI technology dashboard interface" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
