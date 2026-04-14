import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/20 py-24 reveal">
      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-5 gap-16">
        <div className="md:col-span-2">
          <span className="text-2xl font-black tracking-tighter mb-8 block">SafetyLink</span>
          <p className="text-on-surface-variant text-sm max-w-xs mb-8">Architectural safety management for the modern industrial age. Built with legal precision and human focus.</p>
          <div className="flex gap-4">
            <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined text-lg">share</span>
            </button>
            <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
              <span className="material-symbols-outlined text-lg">public</span>
            </button>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6">Solutions</h4>
          <ul className="space-y-4 text-sm text-outline">
            <li><Link className="hover:text-primary transition-colors" to="/software">Risk Assessment</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/software">Training Library</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/software">Audit Preparation</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/software">Mobile Incident Reporting</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Company</h4>
          <ul className="space-y-4 text-sm text-outline">
            <li><Link className="hover:text-primary transition-colors" to="/about">About Us</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/about">Expert Network</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/about">Success Stories</Link></li>
            <li><Link className="hover:text-primary transition-colors" to="/about">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6">Support</h4>
          <ul className="space-y-4 text-sm text-outline">
            <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Legal Trust Center</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Contact Expert</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-24 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-xs text-outline font-medium">© 2024 SafetyLink Editorial Authority. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <button className="text-xs font-bold px-3 py-1 bg-surface-container rounded-lg border border-outline-variant/10">EN</button>
          <button className="text-xs font-medium text-outline">ES</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
