import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";

export default function Team() {
  const teamMembers = [
    {
      name: "Abhishek",
      role: "Founder, AI/ML Lead",
      description: "Leading AI innovation and machine learning implementation strategies",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Yaseen",
      role: "Backend & Frontend",
      description: "Full-stack development expertise with modern web technologies",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Sudarshan",
      role: "UI/UX Designer",
      description: "Creating intuitive and engaging user experiences",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      name: "Jayshree",
      role: "Data Visualization (Power BI)",
      description: "Transforming complex data into actionable business insights",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Our Expert Team
          </h2>
          <p className="text-xl text-slate-600">
            Experienced professionals driving innovation in AI and web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-slate-50 hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <img 
                  src={member.image} 
                  alt={`${member.name} - ${member.role}`} 
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{member.name}</h3>
                <p className="text-[var(--lerix-teal)] font-medium mb-2">{member.role}</p>
                <p className="text-slate-600 text-sm">{member.description}</p>
              </CardContent>
            </Card>
          ))}

          <Card className="bg-gradient-to-br from-[var(--lerix-teal)]/5 to-[var(--lerix-light)]/5 border-2 border-dashed border-[var(--lerix-teal)]">
            <CardContent className="p-8 text-center">
              <div className="w-24 h-24 rounded-full mx-auto mb-4 bg-[var(--lerix-teal)]/10 flex items-center justify-center">
                <Plus className="text-[var(--lerix-teal)]" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Join Our Team</h3>
              <p className="text-[var(--lerix-teal)] font-medium mb-2">Marketing & Business Head</p>
              <p className="text-slate-600 text-sm">Looking for experienced marketing and business development leader</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
