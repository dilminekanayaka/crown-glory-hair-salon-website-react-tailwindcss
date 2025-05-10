import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

export function Header() {
  return <header className="bg-white w-full py-4 px-6 md:px-12 lg:px-20 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      <div className="text-2xl font-semibold text-sage-700">Crown & Glory</div>
      <nav className="hidden md:flex items-center space-x-8">
        <a href="/" className="text-neutral-700 hover:text-sage-600 transition-colors">
          Home
        </a>
        <a href="/pages/Services.tsx" className="text-neutral-700 hover:text-sage-600 transition-colors">
          Services
        </a>
        <a href="#about" className="text-neutral-700 hover:text-sage-600 transition-colors">
          About Us
        </a>
        <a href="#contact" className="text-neutral-700 hover:text-sage-600 transition-colors">
          Contact
        </a>
      </nav>
      
      <Button variant="outline">Book Now</Button>
    </header>;
}