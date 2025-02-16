
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600">We're here to help with your dental needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="service-card">
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 text-green-500" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Phone</h3>
              <p className="mt-2 text-gray-600">+1 (555) 123-4567</p>
            </div>
          </Card>
          <Card className="service-card">
            <div className="flex flex-col items-center">
              <Mail className="w-12 h-12 text-green-500" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Email</h3>
              <p className="mt-2 text-gray-600">info@smilemore.com</p>
            </div>
          </Card>
          <Card className="service-card">
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-green-500" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Location</h3>
              <p className="mt-2 text-gray-600">123 Dental Street</p>
            </div>
          </Card>
          <Card className="service-card">
            <div className="flex flex-col items-center">
              <Clock className="w-12 h-12 text-green-500" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">Hours</h3>
              <p className="mt-2 text-gray-600">Mon-Fri: 9am - 6pm</p>
            </div>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <Button asChild className="bg-green-500 hover:bg-green-600 text-white text-lg px-8 py-6">
            <a href="tel:+15551234567">Call Now</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
