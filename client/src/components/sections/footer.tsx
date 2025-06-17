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
              <svg width="32" height="24" viewBox="0 0 240 160" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
                <circle cx="70" cy="80" r="50" fill="none" stroke="#00bcd4" strokeWidth="8" strokeDasharray="220 100" strokeDashoffset="30" transform="rotate(-90 70 80)"/>
                <rect x="110" y="100" width="20" height="40" fill="#3f51b5"/>
                <rect x="140" y="80" width="20" height="60" fill="#3f51b5"/>
                <rect x="170" y="60" width="20" height="80" fill="#3f51b5"/>
                <rect x="200" y="40" width="20" height="100" fill="#3f51b5"/>
                <path d="M180 50 L220 10 L210 20 L230 0 L240 10 L220 30 L230 20 L190 60 Z" fill="#00bcd4"/>
              </svg>
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
