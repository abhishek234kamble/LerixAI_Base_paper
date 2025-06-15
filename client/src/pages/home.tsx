import Navigation from "@/components/sections/navigation";
import Hero from "@/components/sections/hero";
import MarketOpportunity from "@/components/sections/market-opportunity";
import ProblemSolution from "@/components/sections/problem-solution";
import MvpFeatures from "@/components/sections/mvp-features";
import TechStack from "@/components/sections/tech-stack";
import Team from "@/components/sections/team";
import CompetitiveAdvantage from "@/components/sections/competitive-advantage";
import Roadmap from "@/components/sections/roadmap";
import Investment from "@/components/sections/investment";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <Hero />
      <MarketOpportunity />
      <ProblemSolution />
      <MvpFeatures />
      <TechStack />
      <Team />
      <CompetitiveAdvantage />
      <Roadmap />
      <Investment />
      <Footer />
    </div>
  );
}
