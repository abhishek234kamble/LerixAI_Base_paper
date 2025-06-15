import { Card, CardContent } from "@/components/ui/card";
import { Search, Clock, Shield } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Problem */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
              The Problem We're Solving
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Search className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Poor SEO Performance</h3>
                  <p className="text-slate-600">Most websites struggle with visibility and ranking due to inadequate SEO optimization</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                  <Clock className="text-orange-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Slow Load Times</h3>
                  <p className="text-slate-600">Performance issues lead to poor user experience and lost conversions</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <Shield className="text-red-600" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Security Vulnerabilities</h3>
                  <p className="text-slate-600">Undetected threats compromise customer trust and business reputation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Cybersecurity monitoring dashboard" 
              className="rounded-2xl shadow-xl mb-8 w-full h-auto"
            />
            
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Solution</h3>
                <p className="text-slate-600 mb-6">
                  LerixAI provides instant, AI-powered analysis combining SEO optimization, 
                  performance monitoring, and threat detection in one unified dashboard.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-[var(--lerix-teal)]/5 rounded-xl">
                    <div className="text-2xl font-bold text-[var(--lerix-teal)]">Instant</div>
                    <div className="text-sm text-slate-600">Analysis</div>
                  </div>
                  <div className="text-center p-4 bg-[var(--lerix-teal)]/5 rounded-xl">
                    <div className="text-2xl font-bold text-[var(--lerix-teal)]">AI-Powered</div>
                    <div className="text-sm text-slate-600">Insights</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
