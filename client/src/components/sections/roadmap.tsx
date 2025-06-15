import { Card, CardContent } from "@/components/ui/card";

export default function Roadmap() {
  const phases = [
    {
      phase: 1,
      title: "MVP Development",
      duration: "1-2 months",
      description: "Core functionality development including instant site scanning, basic analytics, and AI recommendation engine"
    },
    {
      phase: 2,
      title: "Full UI + DB Integration",
      duration: "2-3 months",
      description: "Complete user interface development, database architecture, and advanced analytics features"
    },
    {
      phase: 3,
      title: "Beta Testing & Feedback",
      duration: "3-4 months",
      description: "Closed beta with select users, gathering feedback, and iterating on features based on real-world usage"
    },
    {
      phase: 4,
      title: "Launch & Scale",
      duration: "Go to Market",
      description: "Public launch, marketing campaigns, customer acquisition, and scaling infrastructure"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Development Roadmap
          </h2>
          <p className="text-xl text-slate-600">
            Strategic phases for bringing LerixAI to market
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[var(--lerix-teal)] hidden lg:block"></div>
          
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div key={index} className="relative flex items-start lg:space-x-8 space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-[var(--lerix-teal)] rounded-full flex items-center justify-center text-white font-bold text-lg z-10">
                  {phase.phase}
                </div>
                <Card className="flex-1 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <h3 className="text-xl font-bold text-slate-900">{phase.title}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        phase.duration === "Go to Market" 
                          ? "bg-green-100 text-green-700"
                          : "bg-[var(--lerix-teal)]/10 text-[var(--lerix-dark)]"
                      }`}>
                        {phase.duration}
                      </span>
                    </div>
                    <p className="text-slate-600">{phase.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
