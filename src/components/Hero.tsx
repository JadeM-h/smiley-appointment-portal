import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <section className="hero-section">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/f0f88bb8-49bf-4001-979b-f651850ef775.png')] bg-cover bg-center opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 to-white/90" />
      </div>
      <div className="relative z-10 text-center px-4 fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          We Make You Smile As A Family
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Experience exceptional dental care in a comfortable and friendly environment.
        </p>
        <Button asChild className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 rounded-full">
          <Link to="/book">Book an appointment</Link>
        </Button>
      </div>
      <div className="relative z-10 mt-12">
        <div className="grid grid-cols-3 gap-4 max-w-5xl mx-auto px-4">
          <img src="/lovable-uploads/happy-patient-1.jpg" alt="Happy Patient" className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300" />
          <img alt="Dental Team" className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300" src="/lovable-uploads/8a24a6ee-66a7-41f8-a09e-9eda16c0553e.jpg" />
          <img src="/lovable-uploads/modern-clinic.jpg" alt="Modern Clinic" className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300" />
        </div>
      </div>
    </section>;
};
export default Hero;