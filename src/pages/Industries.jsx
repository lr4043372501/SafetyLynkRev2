import React from 'react';

const Industries = () => {
  return (
    <div className="pb-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[80%] rounded-full bg-secondary-fixed/20 blur-[120px]"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[60%] rounded-full bg-primary-fixed/20 blur-[100px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-on-secondary-fixed-variant bg-secondary-fixed rounded-full uppercase">Industry Expertise</span>
              <h1 className="text-6xl md:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tighter mb-8">
                Safety Compliance <span className="text-primary">Tailored</span> to Your Specific Risk Profile.
              </h1>
              <p className="text-xl text-on-surface-variant/80 max-w-xl leading-relaxed mb-10">
                Generic safety doesn't protect specialized work. We provide modular, industry-grade frameworks designed for the unique tectonic shifts of your sector.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-primary text-on-primary rounded-xl font-bold flex items-center gap-2 hover:shadow-xl transition-all">
                  Get a Custom Quote <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl bg-surface-container-highest flex items-center justify-center text-outline">
                [Industrial Construction Site Graphic Placeholder]
              </div>
              <div className="absolute -bottom-10 -left-10 glass-panel p-8 rounded-3xl shadow-xl border border-outline-variant/20 max-w-xs">
                <div className="text-4xl font-black text-primary mb-2">12,000+</div>
                <div className="text-sm font-bold text-on-surface uppercase tracking-widest opacity-60">Architectural Guardians Protected Monthly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Selector Grid */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-on-surface tracking-tight mb-4">Choose Your Domain</h2>
            <p className="text-on-surface-variant max-w-2xl">Select an industry to explore specialized compliance modules and success stories.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Construction */}
            <div className="group bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">construction</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Construction</h3>
              <p className="text-on-surface-variant mb-6">Fall protection, site automation, and real-time contractor hazard tracking.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span> Fall Protection Protocol
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span> Heavy Machinery AI
                </li>
              </ul>
              <div className="pt-6 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-primary">Case Study: BuildCorp</span>
                <span className="material-symbols-outlined text-primary">arrow_right_alt</span>
              </div>
            </div>
            {/* Manufacturing */}
            <div className="group bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer">
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                <span className="material-symbols-outlined text-3xl">precision_manufacturing</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Manufacturing</h3>
              <p className="text-on-surface-variant mb-6">Machine guarding, LOTO compliance, and supply chain audit trails.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> LOTO Digital Locking
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Chemical Safety Matrix
                </li>
              </ul>
              <div className="pt-6 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-secondary">Case Study: SteelWorks</span>
                <span className="material-symbols-outlined text-secondary">arrow_right_alt</span>
              </div>
            </div>
            {/* Logistics */}
            <div className="group bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer">
              <div className="w-14 h-14 bg-tertiary-container/10 text-tertiary rounded-xl flex items-center justify-center mb-6 group-hover:bg-tertiary-container group-hover:text-on-tertiary transition-colors">
                <span className="material-symbols-outlined text-3xl">local_shipping</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Logistics</h3>
              <p className="text-on-surface-variant mb-6">Fleet safety, warehouse ergonomics, and last-mile liability reduction.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                  <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Telematics Integration
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                  <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Fatigue Monitoring
                </li>
              </ul>
              <div className="pt-6 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-tertiary">Case Study: GlobalRoute</span>
                <span className="material-symbols-outlined text-tertiary">arrow_right_alt</span>
              </div>
            </div>
            {/* Healthcare */}
            <div className="group bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer">
              <div className="w-14 h-14 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                <span className="material-symbols-outlined text-3xl">medical_services</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Healthcare</h3>
              <p className="text-on-surface-variant mb-6">Biohazard management, patient safety protocols, and HIPAA-ready logs.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span> Pathogen Shield
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-sm">check_circle</span> Ergonomic Patient Lift
                </li>
              </ul>
              <div className="pt-6 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-primary">Case Study: St. Jude Med</span>
                <span className="material-symbols-outlined text-primary">arrow_right_alt</span>
              </div>
            </div>
            {/* Energy */}
            <div className="group bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer">
              <div className="w-14 h-14 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-on-secondary transition-colors">
                <span className="material-symbols-outlined text-3xl">bolt</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Energy</h3>
              <p className="text-on-surface-variant mb-6">Remote site monitoring, high-voltage safety, and environmental impact.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Grid Isolation Tools
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                  <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Drone Inspection Sync
                </li>
              </ul>
              <div className="pt-6 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-secondary">Case Study: SolarFrontier</span>
                <span className="material-symbols-outlined text-secondary">arrow_right_alt</span>
              </div>
            </div>
            {/* Public Sector */}
            <div className="group bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/10 hover:border-primary/30 transition-all cursor-pointer">
              <div className="w-14 h-14 bg-tertiary-container/10 text-tertiary rounded-xl flex items-center justify-center mb-6 group-hover:bg-tertiary-container group-hover:text-on-tertiary transition-colors">
                <span className="material-symbols-outlined text-3xl">account_balance</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Public Sector</h3>
              <p className="text-on-surface-variant mb-6">Civilian safety standards, public health compliance, and transparency.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                  <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Public Access Safety
                </li>
                <li className="flex items-center gap-2 text-sm font-medium text-on-surface-variant">
                  <span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Incident Open-Data
                </li>
              </ul>
              <div className="pt-6 border-t border-outline-variant/10 flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-widest text-tertiary">Case Study: City of Oaks</span>
                <span className="material-symbols-outlined text-tertiary">arrow_right_alt</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic Featured Section (Construction Example) */}
      <section className="py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center gap-20">
            <div className="w-full md:w-1/2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 rounded-3xl bg-surface-variant flex items-center justify-center text-outline shadow-lg">
                    [Safety Inspector Graphic Placeholder]
                  </div>
                  <div className="h-40 rounded-3xl bg-surface-variant flex items-center justify-center text-outline shadow-lg">
                    [Industrial Robot Graphic Placeholder]
                  </div>
                </div>
                <div className="pt-12">
                  <div className="h-80 rounded-3xl bg-surface-variant flex items-center justify-center text-outline shadow-lg">
                    [Shipping Port Graphic Placeholder]
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-extrabold text-on-surface mb-6">Vertical-Deep Safety Architecture</h2>
              <p className="text-lg text-on-surface-variant mb-10 leading-relaxed">
                SafetyLink doesn't just provide a platform; we provide the <span className="text-primary font-bold">DNA of compliance</span> for each sector. Our construction module includes 400+ pre-built risk assessment templates specifically for high-rise steel work.
              </p>
              <div className="space-y-8">
                <div className="flex gap-6 p-6 rounded-2xl bg-surface-container-low border-l-4 border-primary">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center">
                    <span className="material-symbols-outlined">height</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Fall Protection 360</h4>
                    <p className="text-on-surface-variant">AI-enabled harness telemetry that alerts supervisors the moment a worker enters a dangerous zone without being tethered.</p>
                  </div>
                </div>
                <div className="flex gap-6 p-6 rounded-2xl bg-surface-container-low">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center">
                    <span className="material-symbols-outlined">analytics</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1">Tectonic Risk Analytics</h4>
                    <p className="text-on-surface-variant">Predictive modeling that identifies environmental hazards like wind shear and ground instability before they happen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Don't see your industry? Section */}
      <section className="py-24 bg-surface-container-highest/30">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <div className="bg-surface-container-lowest p-16 rounded-[2.5rem] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-10">
              <span className="material-symbols-outlined text-[10rem]">help_center</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Don't See Your Industry?</h2>
            <p className="text-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
              SafetyLink is built on an adaptive core. We partner with leaders in niche sectors like Aerospace, Deep-Sea Mining, and Agri-Tech to build custom compliance shells.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input className="flex-grow rounded-xl border-outline-variant/20 bg-surface-container-low px-6 py-4 focus:ring-primary focus:border-primary" placeholder="Enter your industry..." type="text"/>
              <button className="bg-on-surface text-surface py-4 px-10 rounded-xl font-bold hover:bg-on-surface/90 transition-colors">
                Consult Specialist
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-container opacity-90"></div>
        <div className="max-w-7xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-on-primary mb-8 tracking-tighter">Ready to Secure Your Assets?</h2>
          <p className="text-xl text-on-primary-container/80 mb-12 max-w-3xl mx-auto">
            Join the ranks of the Architectural Guardians today. Our specialists are ready to build your custom compliance roadmap.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-10 py-5 bg-surface-container-lowest text-primary rounded-xl font-bold text-lg shadow-2xl hover:scale-105 transition-transform">
              Get a Custom Quote
            </button>
            <button className="px-10 py-5 border-2 border-on-primary text-on-primary rounded-xl font-bold text-lg hover:bg-on-primary hover:text-primary transition-all">
              Speak with an Expert
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
