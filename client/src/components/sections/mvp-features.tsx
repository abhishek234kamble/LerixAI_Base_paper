import { Card, CardContent } from "@/components/ui/card";
import { Zap, BarChart3, Brain, Network, Shield, Gauge } from "lucide-react";

export default function MvpFeatures() {
  const features = [
    {
      icon: Zap,
      title: "Instant Site Scan",
      description: "Lightning-fast website analysis via URL input with comprehensive reporting"
    },
    {
      icon: BarChart3,
      title: "SEO & Performance Metrics",
      description: "Detailed analysis of SEO rankings, page speed, and technical performance"
    },
    {
      icon: Brain,
      title: "AI-Generated Suggestions",
      description: "Smart recommendations for optimization based on advanced machine learning"
    },
    {
      icon: Network,
      title: "DNS-Based Analysis",
      description: "Quick domain analysis for rapid website health assessment"
    },
    {
      icon: Shield,
      title: "Threat Detection",
      description: "AI-powered security monitoring and vulnerability assessment"
    },
    {
      icon: Gauge,
      title: "Central Dashboard",
      description: "Unified interface for all insights, metrics, and recommendations"
    }
  ];

  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            MVP Features
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive website analysis and optimization tools powered by advanced AI algorithms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-[var(--lerix-teal)] rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
