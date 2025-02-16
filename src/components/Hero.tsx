
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/8a24a6ee-66a7-41f8-a09e-9eda16c0553e.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 text-center px-4 fade-in">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          We Make You Smile As A Family
        </h1>
        <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Experience exceptional dental care in a comfortable and friendly environment.
        </p>
        <Button asChild className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 rounded-full">
          <Link to="/book">Book an appointment</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
