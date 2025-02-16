
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Technologies from '@/components/Technologies';
import Contact from '@/components/Contact';
import ChatBot from '@/components/ChatBot';
import ToothModel from '@/components/ToothModel';
import { Button } from '@/components/ui/button';
import { CalendarDays } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-8">Interactive 3D Tooth Model</h2>
          <div className="max-w-2xl mx-auto">
            <ToothModel />
          </div>
        </div>
        <Services />
        <Technologies />
        <Contact />
      </main>
      
      {/* Sticky Booking Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <Button 
          onClick={() => navigate('/book')}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
        >
          <CalendarDays className="w-5 h-5" />
          Book Appointment
        </Button>
      </div>

      {/* Chat Bot */}
      <ChatBot />
    </div>
  );
};

export default Index;
