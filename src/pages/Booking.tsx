
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import ChatBot from '@/components/ChatBot';

const BookingPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Scheduled",
      description: "Your appointment has been successfully scheduled."
    });
    navigate('/booking-confirmation', { state: formData });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="md:sticky md:top-24 h-fit">
              <Card className="p-6">
                <h1 className="text-2xl font-bold text-center mb-6">Book Your Appointment</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input id="date" type="date" value={formData.date} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="time">Preferred Time</Label>
                    <Input id="time" type="time" value={formData.time} onChange={handleChange} required />
                  </div>
                  <div>
                    <Label htmlFor="service">Service Type</Label>
                    <select
                      id="service"
                      className="w-full p-2 border rounded-md"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="general">General Dentistry</option>
                      <option value="cosmetic">Cosmetic Dentistry</option>
                      <option value="pediatric">Pediatric Dentistry</option>
                      <option value="emergency">Emergency Care</option>
                    </select>
                  </div>
                  <Button type="submit" className="w-full">Book Appointment</Button>
                </form>
              </Card>
            </div>
            
            <div className="space-y-6">
              <img
                alt="Modern Dental Office"
                className="rounded-2xl shadow-lg"
                src="/lovable-uploads/2ac61c5b-9571-4cb8-abc9-ab59d0daa2d7.jpg"
              />
              <Card className="p-6">
                <h2 className="text-xl font-semibold mb-4">Why Choose Us?</h2>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>State-of-the-art facilities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Experienced dental team</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Comfortable environment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-green-500">✓</span>
                    <span>Latest dental technology</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <ChatBot />
    </div>
  );
};

export default BookingPage;
