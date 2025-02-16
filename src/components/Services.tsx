
import React from 'react';
import { Card } from '@/components/ui/card';
import { Tooth, Stethoscope, Camera, Baby } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Tooth className="w-12 h-12 text-green-500" />,
      title: "General Dentistry",
      description: "Comprehensive dental care for all your oral health needs"
    },
    {
      icon: <Stethoscope className="w-12 h-12 text-green-500" />,
      title: "Cosmetic Dentistry",
      description: "Transform your smile with our advanced cosmetic treatments"
    },
    {
      icon: <Camera className="w-12 h-12 text-green-500" />,
      title: "Digital X-Rays",
      description: "State-of-the-art imaging for precise diagnostics"
    },
    {
      icon: <Baby className="w-12 h-12 text-green-500" />,
      title: "Pediatric Dentistry",
      description: "Specialized care for our youngest patients"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600">Comprehensive dental care for the whole family</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card">
              <div className="flex flex-col items-center">
                {service.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{service.title}</h3>
                <p className="mt-2 text-gray-600 text-center">{service.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
