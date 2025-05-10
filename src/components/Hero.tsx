import React from 'react';
import { Button } from './Button';
export function Hero() {
  return <section className="relative w-full h-[600px] overflow-hidden">
      {/* Hero Image with Overlay */}
      <div className="absolute inset-0">
        <img src="/9.png" alt="Woman with beautiful natural hair" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-sage-700 bg-opacity-30"></div>
      </div>
      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Your Texture, Your Crown
          </h1>
          <p className="text-xl text-white mb-8 max-w-lg">
            Specializing in natural Afro-textured hair, braids, and treatments
            that celebrate your unique beauty.
          </p>
          <Button className="text-lg px-8 py-3">Book Now</Button>
        </div>
      </div>
    </section>;
}