import React from 'react';

const Software = () => {
  return (
    <div className="pb-32">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">Unified Enterprise Safety</span>
            <h1 className="text-6xl md:text-7xl font-black leading-[1.1] text-on-surface mb-8 tracking-tighter">
              Software Built for the <span className="text-primary">Field</span>, Designed for the <span className="text-primary">Boardroom</span>.
            </h1>
            <p className="text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
              Bridge the gap between frontline operations and executive oversight. SafetyLink provides high-fidelity data visualization for compliance leaders and simple, ruggedized tools for the field.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="signature-gradient text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 flex items-center justify-center gap-2">
                Request a Demo <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="bg-surface-container-high text-on-surface px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-highest transition-colors">
                Explore Platform
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 glass-panel border border-outline-variant/20 p-4 rounded-[2rem] shadow-2xl overflow-hidden">
              <div className="rounded-[1.5rem] w-full h-[400px] bg-surface-container-highest flex items-center justify-center text-outline shadow-inner">
                [Dashboard Preview Image Placeholder]
              </div>
              {/* Floating KPI Card */}
              <div className="absolute bottom-10 -left-10 glass-panel p-6 rounded-2xl shadow-xl border border-outline-variant/30 hidden md:block">
                <div className="flex items-center gap-4 mb-2">
                  <span className="material-symbols-outlined text-primary bg-primary-fixed p-2 rounded-lg">verified_user</span>
                  <div>
                    <p className="text-xs font-bold text-on-surface-variant uppercase">Total Compliance</p>
                    <h4 className="text-2xl font-black text-on-surface">98.4%</h4>
                  </div>
                </div>
                <div className="w-32 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="w-[98.4%] h-full signature-gradient"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & OSHA Section (Asymmetric Bento Grid) */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-16 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-black mb-6 tracking-tight">Enterprise Infrastructure for Modern Safety</h2>
            <p className="text-on-surface-variant text-lg">Beyond simple checklists. We provide a robust regulatory engine that automates the heavy lifting of compliance and recordkeeping.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            {/* Real-time Monitoring */}
            <div className="md:col-span-7 bg-surface-container-lowest p-10 rounded-[2rem] flex flex-col justify-between group overflow-hidden relative">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-6">sensors</span>
                <h3 className="text-3xl font-bold mb-4">Real-time Compliance Monitoring</h3>
                <p className="text-on-surface-variant text-lg max-w-md">Stream live data from every jobsite directly to your command center. Detect deviations before they become incidents.</p>
              </div>
              <div className="mt-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="rounded-xl h-48 bg-surface-container-low flex items-center justify-center text-outline">
                  [Monitoring Graphic Placeholder]
                </div>
              </div>
            </div>
            {/* Automated OSHA */}
            <div className="md:col-span-5 signature-gradient p-10 rounded-[2rem] text-on-primary flex flex-col justify-center">
              <span className="material-symbols-outlined text-primary-fixed text-5xl mb-6">description</span>
              <h3 className="text-3xl font-black mb-4">Automated OSHA Log Management</h3>
              <p className="text-primary-fixed-dim text-lg mb-8 leading-relaxed">Instantly generate and export Form 300, 301, and 300A. Built-in logic ensures every entry meets regulatory standards automatically.</p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-md">
                  <span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
                  <span className="font-bold">One-Click Form 300A Export</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-md">
                  <span className="material-symbols-outlined text-secondary-fixed">check_circle</span>
                  <span className="font-bold">Electronic E-File Submission</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training & LMS Section (Editorial Style) */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="rounded-[2.5rem] h-[400px] bg-surface-container-highest flex items-center justify-center text-outline shadow-2xl relative z-10">
                  [LMS Interface Graphic Placeholder]
                </div>
                <div className="absolute -bottom-10 -right-10 w-full h-full border-4 border-primary/20 rounded-[2.5rem] -z-10 translate-x-4 translate-y-4"></div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-5xl font-black mb-8 leading-tight">Bilingual Training <br/>& LMS Solutions</h2>
              <p className="text-xl text-on-surface-variant mb-10 leading-relaxed">
                Communication is the foundation of safety. Our LMS supports over 20 languages with native Spanish content that isn't just translated—it's culturally localized for your workforce.
              </p>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-tertiary-container/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-tertiary">translate</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Dynamic Translation</h4>
                    <p className="text-on-surface-variant">Switch between languages on any course instantly without losing progress.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-tertiary-container/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-tertiary">quiz</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Video-First Assessments</h4>
                    <p className="text-on-surface-variant">Verify comprehension with engaging video quizzes designed for any literacy level.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Incident Reporting (Feature Highlight) */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8 bg-surface-container-highest rounded-[3rem] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-16 lg:p-24 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-primary font-bold mb-6">
                <span className="material-symbols-outlined">signal_wifi_off</span>
                OFFLINE CAPABLE
              </div>
              <h2 className="text-4xl font-black mb-8">Incident Reporting Built for No-Signal Zones</h2>
              <p className="text-lg text-on-surface-variant mb-10">Remote jobsites shouldn't compromise safety reporting. Our mobile app caches data locally and syncs automatically once a connection is re-established.</p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-surface p-6 rounded-2xl">
                  <span className="material-symbols-outlined text-3xl mb-2">photo_camera</span>
                  <p className="font-bold">Rich Media Capture</p>
                </div>
                <div className="bg-surface p-6 rounded-2xl">
                  <span className="material-symbols-outlined text-3xl mb-2">location_on</span>
                  <p className="font-bold">GPS Geofencing</p>
                </div>
              </div>
            </div>
            <div className="relative min-h-[500px] bg-surface-container-low flex items-center justify-center text-outline">
              [Mobile Field Use Graphic Placeholder]
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-highest via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Software;
