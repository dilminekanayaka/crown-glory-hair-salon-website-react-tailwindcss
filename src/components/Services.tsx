import React from 'react';
import { ScissorsIcon, PaintbrushIcon, SparklesIcon } from 'lucide-react';
export function Services() {
  return <section id="services" className="py-20 px-6 md:px-12 lg:px-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4 text-neutral-800">
          Our Specialties
        </h2>
        <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
          We specialize in natural hair care and styling for Afro-textured hair
          types 3B-4C, with services designed to protect and enhance your
          natural beauty.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard title="Braids & Twists" description="Box braids, passion twists, knotless braids, and more with expert technique and gentle application." icon={<ScissorsIcon className="w-8 h-8" />} image="/7.png" />
          <ServiceCard title="Natural Styling" description="Wash and go, twist outs, bantu knots, and styling services that enhance your natural curl pattern." icon={<PaintbrushIcon className="w-8 h-8" />} image="/6.png" />
          <ServiceCard title="Hair Treatments" description="Deep conditioning, protein treatments, hot oil treatments, and scalp care for healthy hair." icon={<SparklesIcon className="w-8 h-8" />} image="/8.png" />
        </div>
      </div>
    </section>;
}
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}
function ServiceCard({
  title,
  description,
  icon,
  image
}: ServiceCardProps) {
  return <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:translate-y-[-4px]">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="w-12 h-12 bg-sage-100 rounded-full flex items-center justify-center text-sage-600 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2 text-neutral-800">{title}</h3>
        <p className="text-neutral-600">{description}</p>
      </div>
    </div>;
}