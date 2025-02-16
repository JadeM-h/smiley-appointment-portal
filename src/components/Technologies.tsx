
import React from 'react';
import { Card } from '@/components/ui/card';
import { Monitor, Shield, Zap, Database } from 'lucide-react';

const Technologies = () => {
  const technologies = [
    {
      icon: <Monitor className="w-12 h-12 text-green-500" />,
      title: "3D Scanning",
      description: "Advanced digital impressions for precise treatment planning"
    },
    {
      icon: <Shield className="w-12 h-12 text-green-500" />,
      title: "Sterilization",
      description: "State-of-the-art sterilization protocols for your safety"
    },
    {
      icon: <Zap className="w-12 h-12 text-green-500" />,
      title: "Digital X-Rays",
      description: "Low radiation, high-quality diagnostic imaging"
    },
    {
      icon: <Database className="w-12 h-12 text-green-500" />,
      title: "Digital Records",
      description: "Secure electronic health records for better care"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technologies</h2>
          <p className="text-xl text-gray-600">Advanced solutions for modern dental care</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <Card key={index} className="service-card">
              <div className="flex flex-col items-center">
                {tech.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{tech.title}</h3>
                <p className="mt-2 text-gray-600 text-center">{tech.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
