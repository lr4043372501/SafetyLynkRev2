import React from 'react';

const Home = () => {
  return (
    <div className="pt-8">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-16 items-center reveal">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">verified</span>
            Guided by former OSHA leadership
          </div>
          <h1 className="text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] text-on-surface">
            Stay OSHA Compliant. <span className="text-primary">Avoid Fines.</span> Protect Your Team.
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed">
            The premium editorial command center for safety leadership. Eliminate guesswork and automate compliance documentation with architectural precision.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="primary-gradient text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl hover:scale-[1.02] transition-all flex items-center gap-2 group">
              Request a free demo
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
            <a className="flex items-center gap-3 font-semibold text-on-surface hover:text-primary transition-colors" href="tel:+1800SAFETY">
              <span className="material-symbols-outlined p-2 bg-surface-container rounded-full">call</span>
              Talk to an Expert
            </a>
          </div>
          <div className="flex items-center gap-8 pt-4">
            <div className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
              <span className="material-symbols-outlined text-primary">check_circle</span> 98% Audit Pass Rate
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
              <span className="material-symbols-outlined text-primary">check_circle</span> Real-time Monitoring
            </div>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/10 rounded-3xl blur-2xl group-hover:bg-primary/20 transition-all"></div>
          <div className="relative bg-surface-container-lowest p-8 rounded-3xl shadow-2xl border border-outline-variant/10">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h3 className="text-xs font-bold text-outline uppercase tracking-widest mb-1">Safety Overview</h3>
                <p className="text-2xl font-black">Performance Hub</p>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-error"></div>
                <div className="w-3 h-3 rounded-full bg-tertiary"></div>
                <div className="w-3 h-3 rounded-full bg-primary"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-6 bg-surface-container-low rounded-2xl">
                <p className="text-sm font-medium text-outline mb-1">Compliance Score</p>
                <p className="text-4xl font-black text-primary">98%</p>
                <div className="w-full bg-outline-variant/20 h-1.5 rounded-full mt-4 overflow-hidden">
                  <div className="bg-primary h-full w-[98%]"></div>
                </div>
              </div>
              <div className="p-6 bg-surface-container-low rounded-2xl">
                <p className="text-sm font-medium text-outline mb-1">Open Audits</p>
                <p className="text-4xl font-black text-on-surface">02</p>
                <p className="text-xs text-tertiary mt-4 font-bold">Review Required</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-outline-variant/10">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-lg">history_edu</span>
                  <span className="font-bold text-sm">Site Hazard Assessment</span>
                </div>
                <span className="text-xs font-bold text-primary">COMPLETE</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-surface rounded-xl border border-outline-variant/10">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-tertiary bg-tertiary/10 p-2 rounded-lg">priority_high</span>
                  <span className="font-bold text-sm">PPE Training Records</span>
                </div>
                <span className="text-xs font-bold text-tertiary">94% STATUS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-surface-container-low py-12 border-y border-outline-variant/10 reveal">
        <div className="max-w-7xl mx-auto px-8">
          <p className="text-center text-xs font-bold text-outline uppercase tracking-[0.2em] mb-10">Trusted by architectural and industrial leaders</p>
          <div className="flex flex-wrap justify-center gap-12 lg:gap-24 opacity-60 grayscale items-center">
            <span className="text-2xl font-bold">Acme Corp</span>
            <span className="text-2xl font-bold">BuildRight</span>
            <span className="text-2xl font-bold">SafeGuard</span>
            <div className="flex items-center gap-6 opacity-100 grayscale-0 border-l border-outline-variant/30 pl-12">
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-on-surface">gavel</span>
                <span className="text-[10px] font-black uppercase mt-1">OSHA Expert</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="material-symbols-outlined text-on-surface">verified_user</span>
                <span className="text-[10px] font-black uppercase mt-1">SOC 2 Type II</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="bg-surface py-24 overflow-hidden relative reveal">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-3xl">
            <h2 className="text-4xl lg:text-5xl font-black tracking-tight mb-8">Paper-based safety management is a <span className="text-error">liability</span> waiting to happen.</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-error mt-1">close</span>
                <div>
                  <p className="font-bold mb-1">Manual Errors</p>
                  <p className="text-sm text-on-surface-variant">Misplaced training logs lead to $15,000+ per individual violation fines.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-error mt-1">close</span>
                <div>
                  <p className="font-bold mb-1">Reactive Response</p>
                  <p className="text-sm text-on-surface-variant">Waiting for an incident to occur before fixing compliance gaps is too late.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 flex flex-col items-center">
            <p className="font-black text-xs uppercase tracking-widest text-primary mb-4">How it works</p>
            <div className="animate-bounce">
              <span className="material-symbols-outlined text-primary text-4xl">arrow_downward</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-surface-container-low py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-24 reveal">
            <h2 className="text-5xl font-black tracking-tighter mb-4">Architectural Compliance in 3 Steps</h2>
            <p className="text-on-surface-variant">Simple, structured, and legally robust.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 relative reveal-child">
            <div className="absolute top-1/2 left-0 w-full border-t-2 border-dashed border-outline-variant hidden md:block -translate-y-12"></div>
            <div className="relative bg-surface-container-lowest p-10 rounded-3xl z-10 hover:translate-y-[-8px] transition-transform duration-300">
              <div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-2xl text-2xl font-black mb-8">01</div>
              <h3 className="text-2xl font-black mb-4">Assess</h3>
              <p className="text-on-surface-variant leading-relaxed">Our AI-driven system scans your current protocols against the latest OSHA 1910 and 1926 standards.</p>
            </div>
            <div className="relative bg-surface-container-lowest p-10 rounded-3xl z-10 hover:translate-y-[-8px] transition-transform duration-300 shadow-xl border-2 border-primary/20">
              <div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-2xl text-2xl font-black mb-8">02</div>
              <h3 className="text-2xl font-black mb-4">Build</h3>
              <p className="text-on-surface-variant leading-relaxed">Custom-tailored safety programs, JHA templates, and bilingual training paths generated instantly.</p>
            </div>
            <div className="relative bg-surface-container-lowest p-10 rounded-3xl z-10 hover:translate-y-[-8px] transition-transform duration-300">
              <div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-2xl text-2xl font-black mb-8">03</div>
              <h3 className="text-2xl font-black mb-4">Track</h3>
              <p className="text-on-surface-variant leading-relaxed">Monitor real-time compliance scores via the Command Center and receive 30-day proactive alerts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="max-w-7xl mx-auto px-8 py-32">
        <h2 className="text-5xl font-black tracking-tighter mb-16 text-center lg:text-left reveal">Guardian Infrastructure</h2>
        <div className="grid md:grid-cols-3 gap-6 reveal-child">
          <div className="md:col-span-2 bg-surface-container-lowest p-12 rounded-3xl border-4 border-primary relative overflow-hidden group">
            <div className="absolute right-[-10%] bottom-[-10%] opacity-5 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[300px]">gavel</span>
            </div>
            <div className="max-w-md relative z-10">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary">gavel</span>
              </div>
              <h3 className="text-3xl font-black mb-4">OSHA & Legal Expertise</h3>
              <p className="text-lg text-on-surface-variant leading-relaxed mb-6">Every form and process is vetted by former senior OSHA officials and safety attorneys to ensure maximum defensibility during an audit.</p>
              <ul className="space-y-3 font-bold text-sm">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check_circle</span> Instant Audit Defense Kits</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary">check_circle</span> Multi-state Regulatory Updates</li>
              </ul>
            </div>
          </div>
          <div className="bg-surface-container p-8 rounded-3xl group hover:bg-surface-container-high transition-colors">
            <div className="w-12 h-12 bg-on-surface/5 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-surface">translate</span>
            </div>
            <h3 className="text-xl font-black mb-2">Bilingual Mastery</h3>
            <p className="text-sm text-on-surface-variant">Automated Spanish/English content parity for inclusive safety cultures.</p>
          </div>
          <div className="bg-surface-container p-8 rounded-3xl group hover:bg-surface-container-high transition-colors">
            <div className="w-12 h-12 bg-on-surface/5 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-surface">notifications_active</span>
            </div>
            <h3 className="text-xl font-black mb-2">Smart Alerts</h3>
            <p className="text-sm text-on-surface-variant">Zero-lag notifications for upcoming certification expirations.</p>
          </div>
          <div className="bg-surface-container p-8 rounded-3xl group hover:bg-surface-container-high transition-colors">
            <div className="w-12 h-12 bg-on-surface/5 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-surface">cloud_upload</span>
            </div>
            <h3 className="text-xl font-black mb-2">Digital Logbooks</h3>
            <p className="text-sm text-on-surface-variant">Secure, immutable storage for incident reports and site inspections.</p>
          </div>
          <div className="bg-surface-container p-8 rounded-3xl group hover:bg-surface-container-high transition-colors">
            <div className="w-12 h-12 bg-on-surface/5 rounded-xl flex items-center justify-center mb-6">
              <span className="material-symbols-outlined text-on-surface">insights</span>
            </div>
            <h3 className="text-xl font-black mb-2">ROI Analytics</h3>
            <p className="text-sm text-on-surface-variant">Quantify your safety investment with premium risk-mitigation data.</p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-[#1c1c17] py-24 text-white reveal-child">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-5xl font-black mb-2">40%</p>
            <p className="text-sm font-medium opacity-60 uppercase tracking-widest">Injury Reduction</p>
          </div>
          <div>
            <p className="text-5xl font-black mb-2">$22k</p>
            <p className="text-sm font-medium opacity-60 uppercase tracking-widest">Avg. Fine Saved</p>
          </div>
          <div>
            <p className="text-5xl font-black mb-2">12x</p>
            <p className="text-sm font-medium opacity-60 uppercase tracking-widest">Audit ROI</p>
          </div>
          <div>
            <p className="text-5xl font-black mb-2">3min</p>
            <p className="text-sm font-medium opacity-60 uppercase tracking-widest">JHA Creation</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-end mb-16 reveal">
            <div>
              <h2 className="text-5xl font-black tracking-tighter mb-4">Leadership Voices</h2>
              <div className="flex items-center gap-2">
                <div className="flex text-tertiary">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                  ))}
                </div>
                <span className="font-bold">4.8/5 Aggregate Rating</span>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 reveal-child">
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10">
              <p className="text-lg italic mb-8 leading-relaxed">"SafetyLink transformed our compliance from a headache into a competitive advantage. We passed our last unexpected OSHA inspection with zero findings."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container"></div>
                <div>
                  <p className="font-bold">Marcus Thorne</p>
                  <p className="text-xs text-outline font-medium uppercase">VP Safety, BuildRight Inc.</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10 md:translate-y-8">
              <p className="text-lg italic mb-8 leading-relaxed">"The bilingual support is unparalleled. My entire field crew finally understands the safety requirements, not just the English speakers."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container"></div>
                <div>
                  <p className="font-bold">Elena Rodriguez</p>
                  <p className="text-xs text-outline font-medium uppercase">Operations Director, MetroFab</p>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/10">
              <p className="text-lg italic mb-8 leading-relaxed">"The editorial clarity of the dashboard is what won us over. No more digging through spreadsheets; everything is anchored right there."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-surface-container"></div>
                <div>
                  <p className="font-bold">Jameson Wu</p>
                  <p className="text-xs text-outline font-medium uppercase">CEO, Wu Industrial Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20 reveal">
            <h2 className="text-5xl font-black tracking-tighter mb-6">Investment in Certainty</h2>
            <div className="inline-flex items-center p-1 bg-surface-container rounded-xl">
              <button className="px-6 py-2 rounded-lg text-sm font-bold bg-surface-container-lowest shadow-sm">Monthly</button>
              <button className="px-6 py-2 rounded-lg text-sm font-bold text-outline">Annually <span className="text-primary text-[10px] ml-1">Save 20%</span></button>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 reveal-child">
            <div className="bg-surface p-10 rounded-3xl border border-outline-variant/20 flex flex-col">
              <p className="text-xs font-black uppercase tracking-widest text-outline mb-4">Starter</p>
              <p className="text-5xl font-black mb-8">$299<span className="text-lg font-medium text-outline">/mo</span></p>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary">check</span> Up to 50 employees</li>
                <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary">check</span> OSHA 300 Logs</li>
                <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary">check</span> Standard Safety Library</li>
              </ul>
              <button className="w-full py-4 rounded-xl border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all">Start Trial</button>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-3xl border-4 border-primary shadow-2xl relative flex flex-col">
              <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-[10px] font-black uppercase">Most Recommended</div>
              <p className="text-xs font-black uppercase tracking-widest text-primary mb-4">Growth</p>
              <p className="text-5xl font-black mb-8">$599<span className="text-lg font-medium text-outline">/mo</span></p>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex items-center gap-3 text-sm font-bold"><span className="material-symbols-outlined text-primary">check</span> Everything in Starter</li>
                <li className="flex items-center gap-3 text-sm font-bold"><span className="material-symbols-outlined text-primary">check</span> Multi-location management</li>
                <li className="flex items-center gap-3 text-sm font-bold"><span className="material-symbols-outlined text-primary">check</span> Bilingual Training Suite</li>
                <li className="flex items-center gap-3 text-sm font-bold"><span className="material-symbols-outlined text-primary">check</span> Audit Defense Kit</li>
              </ul>
              <button className="w-full py-4 rounded-xl primary-gradient text-white font-bold shadow-lg hover:scale-[1.02] transition-all">Get Started</button>
            </div>
            <div className="bg-surface p-10 rounded-3xl border border-outline-variant/20 flex flex-col">
              <p className="text-xs font-black uppercase tracking-widest text-outline mb-4">Enterprise</p>
              <p className="text-5xl font-black mb-8">Custom</p>
              <ul className="space-y-4 mb-12 flex-grow">
                <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary">check</span> Unlimited employees</li>
                <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary">check</span> Dedicated Safety Consultant</li>
                <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary">check</span> API & ERP Integrations</li>
                <li className="flex items-center gap-3 text-sm font-medium"><span className="material-symbols-outlined text-primary">check</span> Custom Legal Review</li>
              </ul>
              <button className="w-full py-4 rounded-xl border-2 border-on-surface text-on-surface font-bold hover:bg-on-surface hover:text-white transition-all">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-7xl mx-auto px-8 mb-24 reveal">
        <div className="primary-gradient rounded-[3rem] p-16 lg:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-5xl lg:text-7xl font-black tracking-tighter mb-8 leading-none">Protect your business today.</h2>
            <p className="text-xl mb-12 opacity-80">Stop worrying about compliance and start focusing on growth. Join the elite companies using SafetyLink.</p>
            <button className="bg-white text-primary px-12 py-5 rounded-2xl text-xl font-black shadow-2xl hover:scale-105 active:scale-95 transition-all">
              Request a free demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
