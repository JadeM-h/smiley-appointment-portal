
import React from 'react';
import Navbar from '@/components/Navbar';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Briefcase, Clock, MapPin } from 'lucide-react';

const Careers = () => {
  const jobs = [
    {
      title: "Dental Hygienist",
      type: "Full-time",
      location: "Ottawa",
      description: "We're looking for an experienced dental hygienist to join our growing team."
    },
    {
      title: "Dental Assistant",
      type: "Part-time",
      location: "Ottawa",
      description: "Seeking a certified dental assistant for our modern dental practice."
    },
    {
      title: "Receptionist",
      type: "Full-time",
      location: "Ottawa",
      description: "Join our front desk team and help provide exceptional patient care."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-600">Build your career with SmileMore Dentist</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{job.location}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <Button className="w-full">Apply Now</Button>
              </Card>
            ))}
          </div>
          <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Why Work With Us?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <Briefcase className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Professional Growth</h3>
                <p className="text-gray-600">Continuous learning and development opportunities</p>
              </div>
              <div>
                <Clock className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Work-Life Balance</h3>
                <p className="text-gray-600">Flexible scheduling and competitive benefits</p>
              </div>
              <div>
                <MapPin className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <h3 className="font-semibold mb-2">Great Location</h3>
                <p className="text-gray-600">Modern facility in the heart of Ottawa</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Careers;
