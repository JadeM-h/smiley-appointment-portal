
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/f0f88bb8-49bf-4001-979b-f651850ef775.png')] bg-cover bg-center opacity-20" />
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
    </section>
  );
};

export default Hero;
