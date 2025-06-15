import { Card, CardContent } from "@/components/ui/card";

export default function TechStack() {
  const techStacks = [
    {
      category: "Frontend",
      technologies: ["React", "TailwindCSS", "D3.js"]
    },
    {
      category: "Backend",
      technologies: ["Flask", "FastAPI"]
    },
    {
      category: "AI/ML",
      technologies: ["TensorFlow", "Scikit-learn", "PyTorch"]
    },
    {
      category: "Tools",
      technologies: ["Power BI", "GitHub", "Slack"]
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Built with Modern Technology
          </h2>
          <p className="text-xl text-slate-600">
            Leveraging cutting-edge tools and frameworks for scalable, performant solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStacks.map((stack, index) => (
            <div key={index} className="text-center">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">{stack.category}</h3>
              <div className="space-y-3">
                {stack.technologies.map((tech, techIndex) => (
                  <Card key={techIndex}>
                    <CardContent className="p-3">
                      <div className="text-slate-700">{tech}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
