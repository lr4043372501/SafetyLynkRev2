import React from 'react';

const Resources = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 pb-32">
      {/* Hero Section */}
      <section className="py-20 flex flex-col items-center text-center">
        <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-6">Editorial Authority</span>
        <h1 className="text-6xl md:text-8xl font-black text-on-surface leading-[1.1] tracking-tighter mb-8 max-w-4xl">
          The Safety Sentinel: Insights, Guides, and <span className="text-primary">Compliance</span> Updates.
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
          Stay informed with curated intelligence on workplace safety standards, regulatory shifts, and the future of architectural guardianship.
        </p>
      </section>

      {/* Featured Article Section (Asymmetric Layout) */}
      <section className="mb-32">
        <div className="relative group">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden rounded-[2rem] bg-surface-container-low editorial-shadow">
            <div className="md:col-span-7 relative h-[400px] md:h-[600px] bg-surface-container-highest flex items-center justify-center text-outline">
              [Featured Article Image Placeholder]
              <div className="absolute inset-0 bg-gradient-to-r from-on-surface/20 to-transparent"></div>
            </div>
            <div className="md:col-span-5 p-12 md:p-16 flex flex-col justify-center">
              <div className="flex items-center space-x-2 mb-6">
                <span className="px-3 py-1 bg-tertiary-container text-on-tertiary-container text-xs font-bold rounded-full uppercase tracking-tighter">New Update</span>
                <span className="text-on-surface-variant text-xs font-medium">March 2024</span>
              </div>
              <h2 className="text-4xl font-bold text-on-surface mb-6 leading-tight">Navigating the 2024 OSHA Structural Integrity Mandates</h2>
              <p className="text-on-surface-variant text-lg mb-8 leading-relaxed">
                A comprehensive deep-dive into the latest regulatory adjustments affecting commercial architecture and industrial safety management.
              </p>
              <button className="flex items-center text-primary font-bold group-hover:translate-x-2 transition-transform">
                Read the Full Report
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section (Bento Grid) */}
      <section className="mb-32">
        <div className="flex items-baseline justify-between mb-12">
          <h3 className="text-3xl font-black tracking-tight">Browse by Domain</h3>
          <div className="h-px flex-grow mx-8 bg-outline-variant/20"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* OSHA Updates */}
          <div className="md:col-span-2 bg-surface-container-lowest p-8 rounded-[1.5rem] border-b-4 border-primary/20 hover:border-primary transition-all">
            <span className="material-symbols-outlined text-4xl text-primary mb-6">gavel</span>
            <h4 className="text-2xl font-bold mb-4">OSHA Updates</h4>
            <p className="text-on-surface-variant mb-6">Real-time tracking of federal safety guidelines and enforcement trends.</p>
            <a className="inline-flex items-center text-sm font-bold text-primary" href="#">View Archive <span className="material-symbols-outlined text-sm ml-1">chevron_right</span></a>
          </div>
          {/* Industry Insights */}
          <div className="bg-surface-container-low p-8 rounded-[1.5rem] flex flex-col">
            <span className="material-symbols-outlined text-4xl text-secondary mb-6">insights</span>
            <h4 className="text-xl font-bold mb-2">Industry Insights</h4>
            <p className="text-on-surface-variant text-sm flex-grow">Market trends and architectural safety innovations.</p>
          </div>
          {/* Safety Culture */}
          <div className="bg-surface-container-highest p-8 rounded-[1.5rem] flex flex-col">
            <span className="material-symbols-outlined text-4xl text-tertiary mb-6">groups</span>
            <h4 className="text-xl font-bold mb-2">Safety Culture</h4>
            <p className="text-on-surface-variant text-sm flex-grow">Building a proactive mindset across your organization.</p>
          </div>
          {/* Training Tips */}
          <div className="md:col-span-2 bg-secondary-fixed-dim p-8 rounded-[1.5rem] flex items-center justify-between group overflow-hidden">
            <div className="max-w-[60%]">
              <h4 className="text-2xl font-black text-on-secondary-fixed-variant mb-2">Training Tips</h4>
              <p className="text-on-secondary-fixed-variant/80 text-sm">Actionable protocols for frontline supervisors and architects.</p>
            </div>
            <span className="material-symbols-outlined text-8xl text-on-secondary-fixed-variant/10 group-hover:scale-110 transition-transform">school</span>
          </div>
          <div className="md:col-span-2 relative rounded-[1.5rem] overflow-hidden min-h-[200px] bg-surface-container-low flex items-center justify-center text-outline">
            [Safety Equipment Graphic Placeholder]
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] flex items-center justify-center">
              <button className="bg-surface-container-lowest text-on-surface px-8 py-4 rounded-full font-bold editorial-shadow scale-95 active:scale-90 transition-transform">Explore All Categories</button>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Library (Glassmorphic Cards) */}
      <section className="mb-32">
        <h3 className="text-3xl font-black tracking-tight mb-12">Resource Library</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Whitepaper */}
          <div className="bg-surface-container p-1 rounded-[1.5rem] transition-transform hover:-translate-y-2">
            <div className="bg-surface-container-lowest p-8 rounded-[1.25rem] h-full flex flex-col">
              <div className="w-12 h-12 bg-primary-fixed flex items-center justify-center rounded-xl mb-6">
                <span className="material-symbols-outlined text-primary">description</span>
              </div>
              <h5 className="text-xl font-bold mb-4">Structural Resilience Whitepaper</h5>
              <p className="text-on-surface-variant text-sm mb-8 flex-grow">An 80-page comprehensive guide on modern construction safety standards.</p>
              <button className="w-full py-3 bg-surface-container-high text-on-surface rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-outline-variant/30">
                <span className="material-symbols-outlined text-base">download</span>
                Download PDF
              </button>
            </div>
          </div>
          {/* Checklist */}
          <div className="bg-surface-container p-1 rounded-[1.5rem] transition-transform hover:-translate-y-2">
            <div className="bg-surface-container-lowest p-8 rounded-[1.25rem] h-full flex flex-col">
              <div className="w-12 h-12 bg-secondary-fixed flex items-center justify-center rounded-xl mb-6">
                <span className="material-symbols-outlined text-secondary">checklist</span>
              </div>
              <h5 className="text-xl font-bold mb-4">Daily Compliance Checklist</h5>
              <p className="text-on-surface-variant text-sm mb-8 flex-grow">Interactive checklist for safety officers and site leads.</p>
              <button className="w-full py-3 bg-surface-container-high text-on-surface rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-outline-variant/30">
                <span className="material-symbols-outlined text-base">file_download</span>
                Download XLS
              </button>
            </div>
          </div>
          {/* Webinar */}
          <div className="bg-surface-container p-1 rounded-[1.5rem] transition-transform hover:-translate-y-2">
            <div className="bg-surface-container-lowest p-8 rounded-[1.25rem] h-full flex flex-col">
              <div className="w-12 h-12 bg-tertiary-fixed flex items-center justify-center rounded-xl mb-6">
                <span className="material-symbols-outlined text-tertiary">videocam</span>
              </div>
              <h5 className="text-xl font-bold mb-4">Webinar: Safety by Design</h5>
              <p className="text-on-surface-variant text-sm mb-8 flex-grow">Recorded session featuring lead architects from Global Safety Link.</p>
              <button className="w-full py-3 bg-surface-container-high text-on-surface rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-outline-variant/30">
                <span className="material-symbols-outlined text-base">play_circle</span>
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="mb-32 relative overflow-hidden rounded-[2.5rem] bg-on-surface text-surface-bright p-12 md:p-24">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-primary/30 to-transparent opacity-50"></div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-5xl font-black mb-6 tracking-tighter">Stay Ahead of the Inspector.</h2>
          <p className="text-surface-variant/70 text-lg mb-10 leading-relaxed">
            Join 15,000+ safety professionals receiving our weekly briefing on compliance, litigation, and workplace culture.
          </p>
          <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-grow bg-white/10 border-white/20 text-white rounded-xl px-6 py-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none backdrop-blur-md" placeholder="professional@company.com" type="email"/>
            <button className="bg-primary hover:bg-primary-container text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-primary/20">
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mb-32 text-center">
        <button className="inline-flex items-center gap-4 px-12 py-6 bg-surface-container-lowest border-2 border-outline-variant/10 text-on-surface text-2xl font-black rounded-full editorial-shadow hover:bg-primary hover:text-white transition-all group">
          Explore More Resources
          <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
        </button>
      </section>
    </div>
  );
};

export default Resources;
