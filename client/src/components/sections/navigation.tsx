import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#market", label: "Market" },
    { href: "#solution", label: "Solution" },
    { href: "#team", label: "Team" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
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
                  <span className="text-2xl font-bold text-[var(--lerix-teal)]">Lerix</span>
                  <span className="text-2xl font-bold text-slate-800">AI</span>
                </div>
                <p className="text-xs text-slate-600 leading-none -mt-1">Analyze. Detect. Instantly.</p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-slate-600 hover:text-[var(--lerix-teal)] transition-colors"
              >
                {link.label}
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection("#investment")}
              className="bg-[var(--lerix-teal)] text-white hover:bg-[var(--lerix-dark)]"
            >
              Investment Opportunity
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => scrollToSection(link.href)}
                      className="text-left text-slate-600 hover:text-[var(--lerix-teal)] transition-colors py-2"
                    >
                      {link.label}
                    </button>
                  ))}
                  <Button 
                    onClick={() => scrollToSection("#investment")}
                    className="bg-[var(--lerix-teal)] text-white hover:bg-[var(--lerix-dark)] mt-4"
                  >
                    Investment Opportunity
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
