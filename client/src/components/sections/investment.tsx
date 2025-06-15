import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { DollarSign, Handshake, Users, Check } from "lucide-react";

export default function Investment() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    interestType: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contacts", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Thank you for your interest!",
        description: "We will be in touch soon.",
      });
      setFormData({
        name: "",
        email: "",
        organization: "",
        interestType: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.interestType || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    contactMutation.mutate(formData);
  };

  const seekingItems = [
    {
      icon: DollarSign,
      title: "Seed Funding",
      description: "Capital for MVP development, team expansion, and initial market penetration"
    },
    {
      icon: Handshake,
      title: "Strategic Mentorship",
      description: "Guidance from experienced investors and industry leaders"
    },
    {
      icon: Users,
      title: "Early Adopters & Pilot Partners",
      description: "Beta customers to validate our solution and provide feedback"
    }
  ];

  const whyInvestReasons = [
    "Massive addressable market ($75B+ combined)",
    "First-mover advantage in unified AI analytics",
    "Experienced team with proven track record",
    "Clear path to profitability"
  ];

  return (
    <section id="investment" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Investment Opportunity
          </h2>
          <p className="text-xl text-slate-600">
            Join us in revolutionizing website optimization with AI
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">What We're Seeking</h3>
            
            <div className="space-y-6 mb-8">
              {seekingItems.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[var(--lerix-teal)] rounded-xl flex items-center justify-center">
                    <item.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Card className="p-6 bg-[var(--lerix-teal)]/5 border-[var(--lerix-teal)]/20">
              <h4 className="text-lg font-semibold text-slate-900 mb-3">Why Invest Now?</h4>
              <ul className="space-y-2 text-slate-600">
                {whyInvestReasons.map((reason, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="text-[var(--lerix-teal)]" size={16} />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <Card className="bg-slate-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="organization">Organization</Label>
                  <Input
                    id="organization"
                    type="text"
                    placeholder="Your company or fund"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="interestType">Interest Type *</Label>
                  <Select value={formData.interestType} onValueChange={(value) => setFormData({ ...formData, interestType: value })}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="investment">Investment Opportunity</SelectItem>
                      <SelectItem value="partnership">Strategic Partnership</SelectItem>
                      <SelectItem value="beta">Beta Testing</SelectItem>
                      <SelectItem value="general">General Inquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your interest in LerixAI..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[var(--lerix-teal)] text-white hover:bg-[var(--lerix-dark)] py-4 h-auto"
                  disabled={contactMutation.isPending}
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
