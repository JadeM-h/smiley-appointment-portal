
import React from 'react';
import Navbar from '@/components/Navbar';

const Location = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">Our Location</h1>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.3898990668547!2d-75.68640974836092!3d45.42230774348453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050a6db98d73%3A0x188a59c3622fdbae!2sUniversity%20of%20Ottawa!5e0!3m2!1sen!2sca!4v1646416483546!5m2!1sen!2sca"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="University of Ottawa location"
              />
            </div>
            <div className="mt-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">SmileMore Dentist</h2>
              <p className="text-gray-600">75 Laurier Ave E</p>
              <p className="text-gray-600">Ottawa, ON K1N 6N5</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Location;
