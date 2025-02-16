
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/8a24a6ee-66a7-41f8-a09e-9eda16c0553e.jpg')] bg-cover bg-center transform scale-105 hover:scale-100 transition-transform duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in space-y-6">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-white/90 mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm">Trusted by 10,000+ Happy Patients</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Perfect Smile</span>
            <br />Starts Here
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience exceptional dental care in a comfortable and modern environment.
            Our expert team is dedicated to your perfect smile.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6 rounded-full transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-green-500/25">
              <Link to="/book">Book an Appointment</Link>
            </Button>
            
            <Button asChild variant="outline" className="bg-white/10 backdrop-blur-md text-white border-white/20 hover:bg-white/20 text-lg px-8 py-6 rounded-full">
              <Link to="/services" className="flex items-center gap-2">
                Explore Services <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "15k+", label: "Happy Patients" },
            { number: "50+", label: "Expert Dentists" },
            { number: "4.9", label: "Patient Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-white bg-white/5 backdrop-blur-md rounded-2xl p-4 transform hover:scale-105 transition-all duration-300">
              <div className="text-3xl font-bold text-green-400">{stat.number}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
