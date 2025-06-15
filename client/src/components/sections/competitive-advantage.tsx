import { Card, CardContent } from "@/components/ui/card";
import { Check, X } from "lucide-react";

export default function CompetitiveAdvantage() {
  const advantages = [
    "AI-powered threat detection",
    "SEO + Security + Performance unified",
    "One comprehensive dashboard",
    "Instant analysis and recommendations",
    "Machine learning insights"
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Our Competitive Edge
          </h2>
          <p className="text-xl text-slate-300">
            While competitors focus on single solutions, we provide unified AI-powered insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[var(--lerix-light)] mb-8">Traditional Tools vs LerixAI</h3>
            
            <div className="space-y-6">
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3">SEMrush, Ubersuggest</h4>
                  <p className="text-slate-300 mb-3">Focus primarily on SEO and keyword analysis</p>
                  <div className="flex items-center text-red-400 mb-1">
                    <X className="mr-2" size={16} />
                    Limited threat detection
                  </div>
                  <div className="flex items-center text-red-400">
                    <X className="mr-2" size={16} />
                    Separate performance tools needed
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-3">Screaming Frog</h4>
                  <p className="text-slate-300 mb-3">Excellent for crawling but lacks AI insights</p>
                  <div className="flex items-center text-red-400 mb-1">
                    <X className="mr-2" size={16} />
                    No security monitoring
                  </div>
                  <div className="flex items-center text-red-400">
                    <X className="mr-2" size={16} />
                    Manual analysis required
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-[var(--lerix-teal)]/20 to-[var(--lerix-light)]/20 border-[var(--lerix-teal)]/30">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold text-[var(--lerix-light)] mb-6">LerixAI Advantage</h4>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                      <Check className="text-white" size={16} />
                    </div>
                    <span>{advantage}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
