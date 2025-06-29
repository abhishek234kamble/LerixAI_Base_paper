import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, TrendingUp, ArrowUp } from "lucide-react";

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
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 lerix-gradient rounded-lg flex items-center justify-center">
                  <TrendingUp className="text-white text-lg" size={20} />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--lerix-light)] rounded-full flex items-center justify-center">
                  <ArrowUp className="text-white" size={8} />
                </div>
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-xl font-bold text-[var(--lerix-teal)]">Lerix</span>
                  <span className="text-xl font-bold text-slate-800">AI</span>
                </div>
                <p className="text-xs text-slate-600 leading-none">Analyze. Detect. Instantly.</p>
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
