import React from 'react';

const About = () => {
  return (
    <div className="pb-32">
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-surface-container-low -z-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/5 to-transparent opacity-60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <span className="text-primary font-bold tracking-widest uppercase text-sm block mb-6">Our Legacy & Vision</span>
            <h1 className="text-6xl md:text-8xl font-black text-on-surface leading-[1.05] tracking-tighter mb-8">
              Built by Safety Leaders for the <span className="text-primary">Next Generation</span> of Industry.
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 mt-12">
              <div className="flex items-center gap-4 group">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-on-primary">
                  <span className="material-symbols-outlined text-3xl">verified_user</span>
                </div>
                <div>
                  <p className="font-bold text-xl">OSHA Alumni</p>
                  <p className="text-on-surface-variant">Regulatory DNA at our core</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined text-3xl">analytics</span>
                </div>
                <div>
                  <p className="font-bold text-xl">99.9% Compliance</p>
                  <p className="text-on-surface-variant">Proven track record</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4 relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 bg-surface-container-highest flex items-center justify-center text-outline text-center p-4">
              [High-rise Construction Site Graphic Placeholder]
            </div>
            <div className="absolute -bottom-10 -left-10 glass-panel p-8 rounded-2xl shadow-xl max-w-xs border border-white/20">
              <span className="text-primary font-black text-4xl block mb-2">30+</span>
              <p className="text-on-surface-variant font-medium leading-tight">Years of cumulative high-stakes safety leadership experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Origin Section */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-surface-container-highest rounded-2xl p-8 flex flex-col justify-end">
                  <span className="material-symbols-outlined text-primary text-4xl mb-4">foundation</span>
                  <p className="font-bold">Founded 1998</p>
                </div>
                <div className="aspect-square bg-surface-container-highest overflow-hidden rounded-2xl translate-y-12 flex items-center justify-center text-outline">
                  [Vintage Machinery Graphic Placeholder]
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl font-black mb-8">Our Origin</h2>
              <p className="text-xl text-on-surface-variant leading-relaxed mb-6">
                SafetyLink wasn't born in a Silicon Valley garage, but in the field. Founded by former <span className="text-primary font-bold">OSHA leadership</span>, our roots are deeply embedded in the complex, high-stakes world of federal safety enforcement and architectural integrity.
              </p>
              <p className="text-xl text-on-surface-variant leading-relaxed">
                We saw firsthand the gap between dense regulatory text and real-world execution. We decided to build the bridge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Authority Mission */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-5xl font-black mb-6">Editorial Authority</h2>
            <p className="text-on-surface-variant text-xl">Bringing high-end clarity to the complexity of global safety compliance.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bento Card 1 */}
            <div className="md:col-span-2 bg-surface-container-low rounded-2xl p-12 flex flex-col justify-between overflow-hidden relative group">
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4">Precision over Volume</h3>
                <p className="text-lg text-on-surface-variant max-w-md">We treat every safety protocol as a critical publication—meticulously curated, authoritative, and free of noise.</p>
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 translate-x-12 translate-y-12 bg-surface-container-highest rounded-tl-2xl flex items-center justify-center text-outline opacity-40 group-hover:scale-105 transition-transform duration-700">
                [Architectural Drafts Graphic Placeholder]
              </div>
            </div>
            {/* Bento Card 2 */}
            <div className="bg-primary p-12 rounded-2xl text-on-primary flex flex-col justify-center">
              <span className="material-symbols-outlined text-6xl mb-6">edit_document</span>
              <h3 className="text-2xl font-bold mb-4">Curated Intelligence</h3>
              <p className="opacity-80">Our mission is to translate thousand-page mandates into actionable, intuitive command centers.</p>
            </div>
            {/* Bento Card 3 */}
            <div className="bg-surface-container-highest p-12 rounded-2xl flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-white mb-6 flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined text-4xl">translate</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Linguistic Precision</h3>
              <p className="text-on-surface-variant">Bilingual competency is not a feature; it's our cultural standard for safety equity.</p>
            </div>
            {/* Bento Card 4 */}
            <div className="md:col-span-2 bg-white rounded-2xl p-12 flex items-center gap-12 border border-outline-variant/10">
              <div className="flex-1">
                <h3 className="text-3xl font-black mb-4">The Guardian Effect</h3>
                <p className="text-on-surface-variant">When data is beautiful, it is read. When it is read, lives are protected.</p>
              </div>
              <div className="hidden sm:block w-48 h-32 bg-surface-container-low rounded-xl flex items-center justify-center border border-outline-variant/10">
                <span className="text-primary font-black text-3xl">SafetyLink+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-32 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-5xl font-black mb-4">The Guardians</h2>
              <p className="text-on-surface-variant text-xl max-w-xl">Meet the experts redefining industrial safety through the lens of authority and architectural precision.</p>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined">arrow_back</span>
              </button>
              <button className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Leader 1 */}
            <div className="group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-500 bg-surface-container-highest flex items-center justify-center text-outline">
                [Leader 1 Portrait Placeholder]
              </div>
              <h4 className="text-2xl font-black">Dr. Marcus Vance</h4>
              <p className="text-primary font-bold mb-4 uppercase text-xs tracking-widest">CEO & Former OSHA Regional Director</p>
              <p className="text-on-surface-variant">25 years of federal safety oversight and strategic risk mitigation for Fortune 500 industrials.</p>
            </div>
            {/* Leader 2 */}
            <div className="group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-500 bg-surface-container-highest flex items-center justify-center text-outline">
                [Leader 2 Portrait Placeholder]
              </div>
              <h4 className="text-2xl font-black">Elena Rodriguez</h4>
              <p className="text-primary font-bold mb-4 uppercase text-xs tracking-widest">Chief Strategy Officer</p>
              <p className="text-on-surface-variant">Architectural lead specializing in site-specific safety protocols and bilingual workforce integration.</p>
            </div>
            {/* Leader 3 */}
            <div className="group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all duration-500 bg-surface-container-highest flex items-center justify-center text-outline">
                [Leader 3 Portrait Placeholder]
              </div>
              <h4 className="text-2xl font-black">Julian Thorne</h4>
              <p className="text-primary font-bold mb-4 uppercase text-xs tracking-widest">VP of Innovation</p>
              <p className="text-on-surface-variant">Pioneer in safety analytics and digital twin compliance modeling for complex infrastructure.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-on-surface text-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <h2 className="text-5xl font-black mb-12">Our Core Values</h2>
              <div className="space-y-12">
                <div className="flex gap-8">
                  <span className="text-4xl font-black text-primary/50">01</span>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Unwavering Integrity</h4>
                    <p className="text-surface/70 text-lg">In safety, there is no room for compromise. We speak the truth, even when the data is difficult.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <span className="text-4xl font-black text-primary/50">02</span>
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Architectural Precision</h4>
                    <p className="text-surface/70 text-lg">We design systems with the meticulous detail of an engineer and the clarity of an editor.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <span className="text-4xl font-black text-primary/50">03</span>
                  <div>
                    <h4 className="text-2xl font-bold mb-2 text-primary">Cultural Competency</h4>
                    <p className="text-surface/70 text-lg italic">Safety has no language barrier. We ensure every worker, regardless of language, understands their protection.</p>
                    <p className="text-primary mt-2 font-bold">(Bilingüismo como estándar)</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="sticky top-40 aspect-square rounded-2xl overflow-hidden bg-surface-container flex items-center justify-center text-outline">
                [Steel Beams Graphic Placeholder]
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface to-transparent opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Milestones */}
      <section className="py-32 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-black mb-20 text-center">Our Journey</h2>
          <div className="relative">
            <div className="absolute top-0 left-0 md:left-1/2 w-px h-full bg-outline-variant/30 -translate-x-1/2 hidden md:block"></div>
            {/* Milestone 1 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
              <div className="md:text-right">
                <span className="text-primary font-black text-6xl block mb-2">2018</span>
                <h4 className="text-2xl font-bold mb-2">The Foundation</h4>
                <p className="text-on-surface-variant">SafetyLink launches its first digital safety audit platform used by 50+ national firms.</p>
              </div>
              <div className="hidden md:block"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-8 ring-surface hidden md:block"></div>
            </div>
            {/* Milestone 2 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
              <div className="hidden md:block"></div>
              <div>
                <span className="text-primary font-black text-6xl block mb-2">2020</span>
                <h4 className="text-2xl font-bold mb-2">The Guardian Protocol</h4>
                <p className="text-on-surface-variant">Release of the proprietary Editorial Authority Engine for automated compliance reporting.</p>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-8 ring-surface hidden md:block"></div>
            </div>
            {/* Milestone 3 */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="md:text-right">
                <span className="text-primary font-black text-6xl block mb-2">Today</span>
                <h4 className="text-2xl font-bold mb-2">Global Impact</h4>
                <p className="text-on-surface-variant">Protecting over 500,000 industrial lives across 12 countries daily.</p>
              </div>
              <div className="hidden md:block"></div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-8 ring-surface hidden md:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-surface-container-low px-8">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-primary to-primary-container rounded-[2rem] p-16 text-center text-on-primary shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <h2 className="text-5xl font-black mb-8 relative z-10">Join the Mission</h2>
          <p className="text-xl opacity-90 mb-12 max-w-2xl mx-auto relative z-10">Partner with the leaders who are defining the future of industrial safety. Secure your site today.</p>
          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            <button className="bg-white text-primary px-10 py-4 rounded-xl font-black text-lg hover:scale-105 transition-transform">Request a Consultation</button>
            <button className="border-2 border-white/30 text-white px-10 py-4 rounded-xl font-black text-lg hover:bg-white/10 transition-colors">View Opportunities</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
