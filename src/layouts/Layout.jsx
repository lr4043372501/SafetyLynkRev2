import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useReveal } from '../hooks/useReveal';

const Layout = () => {
  useReveal();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
      {/* Sticky CTA */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] pointer-events-none md:pointer-events-auto">
        <div className="bg-on-surface/90 backdrop-blur-md text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-6 border border-white/10 translate-y-0 opacity-100 transition-all duration-500">
          <p className="text-sm font-bold hidden sm:block">Ready to secure your jobsite?</p>
          <button className="primary-gradient px-4 py-2 rounded-xl text-sm font-black shadow-lg">Get Started Free</button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
