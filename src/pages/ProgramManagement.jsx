import React from 'react';

const ProgramManagement = () => {
  return (
    <div className="pb-32">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-32">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 z-10">
            <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-6">Program Management</span>
            <h1 className="text-6xl md:text-7xl font-extrabold text-on-surface leading-[1.1] tracking-tighter mb-8">
              Expert-Led Safety Programs. <br/>
              <span className="text-primary italic">Legally Defensible</span> Results.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-xl mb-10 leading-relaxed">
              Merge the precision of enterprise software with the nuance of human expertise. We don't just provide a platform; we provide the professionals who run it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="editorial-gradient text-on-primary px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
                Talk to an Expert
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-xl font-bold text-lg hover:bg-outline-variant/30 transition-colors">
                Explore Services
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-fixed/30 rounded-full blur-3xl"></div>
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-surface-container-lowest">
              <div className="w-full h-[600px] bg-surface-container-highest flex items-center justify-center text-outline">
                [Safety Expert Image Placeholder]
              </div>
              <div className="absolute bottom-8 left-8 right-8 glass-panel p-6 rounded-2xl border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-on-primary">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-primary">Live Dashboard</p>
                    <p className="text-lg font-bold">98.4% Compliance Score Achieved</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services Section */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-black tracking-tight mb-4">The Architectural Guardian Framework</h2>
              <p className="text-lg text-on-surface-variant">A comprehensive safety ecosystem designed to eliminate risk and ensure full legal defensibility through tactical human intervention.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* On-Site Hazard Assessments */}
            <div className="md:col-span-2 bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col justify-between group hover:bg-surface-bright transition-all">
              <div className="flex justify-between items-start">
                <div className="bg-primary-container w-16 h-16 rounded-2xl flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined text-[32px]">location_searching</span>
                </div>
                <span className="bg-tertiary-container text-on-tertiary-container px-4 py-1 rounded-full text-xs font-bold">Physical Audit</span>
              </div>
              <div className="mt-20">
                <h3 className="text-3xl font-bold mb-4">On-Site Hazard Assessments</h3>
                <p className="text-on-surface-variant text-lg mb-6 leading-relaxed">Our experts perform forensic-level physical inspections to identify hidden liabilities before they become citations.</p>
                <div className="flex gap-4">
                  <span className="text-sm font-bold text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined">check_circle</span> Real-time reporting
                  </span>
                  <span className="text-sm font-bold text-primary flex items-center gap-1">
                    <span className="material-symbols-outlined">check_circle</span> Risk Prioritization
                  </span>
                </div>
              </div>
            </div>
            {/* Dedicated Compliance Expert */}
            <div className="bg-secondary-container p-10 rounded-[2rem] flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <div className="bg-on-secondary-container/10 w-16 h-16 rounded-2xl flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined text-[32px]">support_agent</span>
                </div>
                <h3 className="text-3xl font-bold mt-12 mb-4 text-on-secondary-container leading-tight">Dedicated Compliance Expert</h3>
                <p className="text-on-secondary-container/80 text-lg mb-8">A human partner assigned to your account for guidance on every decision.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-48 h-48 bg-on-secondary-container/10 rounded-tl-[3rem] opacity-40 grayscale mix-blend-multiply"></div>
            </div>
            {/* Custom Safety Programs */}
            <div className="bg-surface-container-highest p-10 rounded-[2rem] flex flex-col gap-8">
              <div className="bg-on-surface-variant/10 w-16 h-16 rounded-2xl flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined text-[32px]">description</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Custom Site-Specific Programs</h3>
                <p className="text-on-surface-variant mb-6">Bespoke IIPP and safety documentation crafted for your specific industry and operational footprint.</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-sm font-semibold"><span className="material-symbols-outlined text-primary">add_task</span> IIPP Authoring</li>
                  <li className="flex items-center gap-2 text-sm font-semibold"><span className="material-symbols-outlined text-primary">add_task</span> Emergency Action Plans</li>
                </ul>
              </div>
            </div>
            {/* Mock OSHA Inspections */}
            <div className="bg-surface-container-lowest p-10 rounded-[2rem] border border-outline-variant/20">
              <div className="bg-error-container w-16 h-16 rounded-2xl flex items-center justify-center text-on-error-container mb-12">
                <span className="material-symbols-outlined text-[32px]">gavel</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Mock OSHA Inspections</h3>
              <p className="text-on-surface-variant leading-relaxed">Pressure-test your facility with unannounced simulations that mirror actual regulatory inspections.</p>
            </div>
            {/* Legal Defensibility Review */}
            <div className="bg-on-surface p-10 rounded-[2rem] text-surface-bright">
              <div className="bg-primary w-16 h-16 rounded-2xl flex items-center justify-center text-on-primary mb-12">
                <span className="material-symbols-outlined text-[32px]">policy</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Legal Defensibility Review</h3>
              <p className="text-surface-variant/80 mb-8 leading-relaxed">Our labor law partners review every program to ensure maximum protection in the event of litigation.</p>
              <div className="pt-6 border-t border-surface-variant/20">
                <p className="text-xs uppercase tracking-[0.2em] font-black text-primary">Partner Network</p>
                <p className="mt-2 text-sm italic">"The strongest legal shield in corporate safety."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Metric Signature Block */}
      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="bg-surface-container-lowest rounded-[3rem] p-16 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <h2 className="text-5xl font-black tracking-tighter mb-6">Proven Defense. <br/><span className="text-tertiary">Real-World Impacts.</span></h2>
            <p className="text-lg text-on-surface-variant">Our program management doesn't just check boxes. It builds a culture of safety that stands up to the most rigorous scrutiny.</p>
          </div>
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-8">
            <div className="p-8 border-l-4 border-primary">
              <div className="text-5xl font-black mb-2 text-on-surface">92%</div>
              <div className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Reduction in Citations</div>
            </div>
            <div className="p-8 border-l-4 border-tertiary">
              <div className="text-5xl font-black mb-2 text-on-surface">$2.4M</div>
              <div className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Avg Legal Fees Saved</div>
            </div>
            <div className="p-8 border-l-4 border-secondary">
              <div className="text-5xl font-black mb-2 text-on-surface">15+</div>
              <div className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Years Avg Experience</div>
            </div>
            <div className="p-8 border-l-4 border-primary">
              <div className="text-5xl font-black mb-2 text-on-surface">100%</div>
              <div className="text-xs font-black uppercase tracking-widest text-on-surface-variant">Defensibility Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0 editorial-gradient opacity-[0.03]"></div>
        <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8">Ready to secure your job site with expert precision?</h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto">Stop guessing with generic software templates. Get a custom safety program built and defended by industry titans.</p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button className="editorial-gradient text-on-primary px-12 py-5 rounded-xl font-black text-xl shadow-2xl hover:scale-105 transition-transform active:scale-95">
              Talk to an Expert
            </button>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-4">
                <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container"></div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container"></div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container"></div>
              </div>
              <span className="text-sm font-bold text-on-surface-variant">Experts Online Now</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgramManagement;
