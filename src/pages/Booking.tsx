
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

const BookingPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Appointment Scheduled",
      description: "Your appointment has been successfully scheduled.",
    });
    navigate('/booking-confirmation');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-6">
            <h1 className="text-2xl font-bold text-center mb-6">Book Your Appointment</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" required />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" required />
              </div>
              <div>
                <Label htmlFor="date">Preferred Date</Label>
                <Input id="date" type="date" required />
              </div>
              <div>
                <Label htmlFor="time">Preferred Time</Label>
                <Input id="time" type="time" required />
              </div>
              <div>
                <Label htmlFor="service">Service Type</Label>
                <select id="service" className="w-full p-2 border rounded-md" required>
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
      </main>
    </div>
  );
};

export default BookingPage;
