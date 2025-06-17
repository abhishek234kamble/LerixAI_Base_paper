import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { href: "#about", label: "About Us" },
    { href: "#solution", label: "Our Solution" },
    { href: "#team", label: "Team" },
    { href: "#investment", label: "Invest" }
  ];

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lerix-icon.svg" 
                alt="LerixAI Icon" 
                className="h-8 w-auto object-contain"
              />
              <div>
                <div className="flex items-center">
                  <span className="text-xl font-bold text-[var(--lerix-light)]">Lerix</span>
                  <span className="text-xl font-bold text-white">AI</span>
                </div>
              </div>
            </div>
            <p className="text-slate-300 mb-6 max-w-md">
              Revolutionizing website optimization with AI-powered analysis, threat detection, and actionable insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[var(--lerix-teal)] transition-colors">
                <FaLinkedin />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[var(--lerix-teal)] transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-[var(--lerix-teal)] transition-colors">
                <FaGithub />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-slate-300">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-[var(--lerix-light)] transition-colors text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-slate-300">
              <li>founders@lerixai.com</li>
              <li>+91 98765 43210</li>
              <li>Bangalore, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2024 LerixAI. All rights reserved. | Building the future of AI-powered website analytics.</p>
        </div>
      </div>
    </footer>
  );
}
