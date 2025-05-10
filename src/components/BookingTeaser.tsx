import React from 'react';
import { Button } from './Button';
import { CalendarIcon, MessageCircleIcon } from 'lucide-react';
export function BookingTeaser() {
  return <section className="py-20 px-6 md:px-12 lg:px-20 bg-sage-50">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-10 md:p-16 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-neutral-800">
                Let's get you glowing ✨
              </h2>
              <p className="text-neutral-600 mb-8">
                Ready to embrace your natural texture? Our expert stylists are
                here to help you look and feel your best.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex items-center justify-center gap-2">
                  <CalendarIcon className="w-5 h-5" />
                  Book Appointment
                </Button>
                <Button variant="outline" className="flex items-center justify-center gap-2">
                  <MessageCircleIcon className="w-5 h-5" />
                  Chat With Us
                </Button>
              </div>
            </div>
            <div className="md:w-1/2 bg-sage-100">
              <img src="/10.png" alt="Woman with beautiful braided hairstyle" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
}