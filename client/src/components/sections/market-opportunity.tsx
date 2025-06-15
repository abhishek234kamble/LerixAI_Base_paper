import { Card, CardContent } from "@/components/ui/card";

export default function MarketOpportunity() {
  return (
    <section id="market" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Massive Market Opportunity
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Over 1 billion websites globally suffer from poor SEO, slow performance, and security vulnerabilities
          </p>
        </div>

        {/* Market Size Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-[var(--lerix-teal)]/5 to-[var(--lerix-light)]/5 border-[var(--lerix-teal)]/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-[var(--lerix-teal)] mb-2 animate-counter">$40B+</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">SEO Market</h3>
              <p className="text-slate-600">Growing global market for search engine optimization tools and services</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-[var(--lerix-teal)]/5 to-[var(--lerix-light)]/5 border-[var(--lerix-teal)]/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-[var(--lerix-teal)] mb-2 animate-counter">$10.9B</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Web Performance</h3>
              <p className="text-slate-600">Expected market size by 2028 for web performance optimization</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-[var(--lerix-teal)]/5 to-[var(--lerix-light)]/5 border-[var(--lerix-teal)]/20 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-[var(--lerix-teal)] mb-2 animate-counter">$25B</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Security Analytics</h3>
              <p className="text-slate-600">Projected market value by 2027 for security analytics solutions</p>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Potential */}
        <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Revenue Potential</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl">
                  <div>
                    <p className="text-[var(--lerix-light)]">User Plan</p>
                    <p className="text-sm opacity-80">10M users → 2% paid at $10/month</p>
                  </div>
                  <div className="text-2xl font-bold">$2M/mo</div>
                </div>
                <div className="flex justify-between items-center p-4 bg-white/10 rounded-xl">
                  <div>
                    <p className="text-[var(--lerix-light)]">Agency Plan</p>
                    <p className="text-sm opacity-80">5,000 agencies @ $200/month</p>
                  </div>
                  <div className="text-2xl font-bold">$1M/mo</div>
                </div>
                <div className="border-t border-white/20 pt-4">
                  <div className="flex justify-between items-center">
                    <p className="text-xl font-semibold">Total Annual Revenue</p>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-[var(--lerix-light)]">$36M</div>
                      <div className="text-sm opacity-80">(₹300+ Crores)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Website analytics charts and graphs" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
