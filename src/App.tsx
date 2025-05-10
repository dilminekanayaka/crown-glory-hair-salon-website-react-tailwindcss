import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { BookingTeaser } from './components/BookingTeaser';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <BookingTeaser />
      </main>
      <Footer />
    </div>;
}