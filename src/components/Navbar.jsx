import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fcf9f1]/80 backdrop-blur-xl shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-12">
          <Link to="/" className="text-2xl font-bold tracking-tighter text-[#1c1c17]">SafetyLink</Link>
          <div className="hidden lg:flex items-center gap-8 font-medium text-sm tracking-tight text-[#1c1c17]/70">
            <Link className="hover:text-[#1D9E75] transition-colors duration-200" to="/software">Solutions</Link>
            <Link className="hover:text-[#1D9E75] transition-colors duration-200" to="/industries">Industries</Link>
            <Link className="hover:text-[#1D9E75] transition-colors duration-200" to="/resources">Resources</Link>
            <Link className="hover:text-[#1D9E75] transition-colors duration-200" to="/about">About</Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a className="font-medium text-sm text-[#1c1c17]/70 hover:text-[#1D9E75]" href="#">Login</a>
          <button className="primary-gradient text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all">
            Request Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
