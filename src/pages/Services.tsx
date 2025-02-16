
import React from 'react';
import Navbar from '@/components/Navbar';
import Services from '@/components/Services';

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Our Services</h1>
            <Services />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
