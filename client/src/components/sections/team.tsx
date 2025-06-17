import { Card, CardContent } from "@/components/ui/card";
import { Plus } from "lucide-react";
import abhishekImage from "@assets/Yasin_1750164593844.png";
import jayshreeImage from "@assets/1747235988245_1750164594013.png";
import yaseenImage from "@assets/IMG-20250616-WA0002_1750164594042.jpg";
import sudarshanImage from "@assets/1750164274054_1750164594058.jpg";

export default function Team() {
  const teamMembers = [
    {
      name: "Abhishek Kamble",
      role: "Founder, AI/ML Lead",
      description: "Leading AI innovation and machine learning implementation strategies",
      image: abhishekImage
    },
    {
      name: "Yaseen",
      role: "Backend & Frontend",
      description: "Full-stack development expertise with modern web technologies",
      image: yaseenImage
    },
    {
      name: "Sudarshan",
      role: "UI/UX Designer",
      description: "Creating intuitive and engaging user experiences",
      image: sudarshanImage
    },
    {
      name: "Jayshree Maske",
      role: "Data Visualization (Power BI)",
      description: "Transforming complex data into actionable business insights",
      image: jayshreeImage
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
