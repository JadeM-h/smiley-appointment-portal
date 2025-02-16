
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CheckCircle, Calendar, Clock, User, Phone, Mail, Stethoscope } from 'lucide-react';

const BookingConfirmation = () => {
  const location = useLocation();
  const bookingData = location.state || {
    name: "No name provided",
    email: "No email provided",
    phone: "No phone provided",
    date: "No date provided",
    time: "No time provided",
    service: "No service provided"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="pt-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
            <p className="text-gray-600">
              Thank you for choosing SmileMore Dentist. Your appointment has been successfully scheduled.
            </p>
          </div>

          <Card className="p-6 mb-8 bg-white shadow-lg">
            <h2 className="text-xl font-semibold mb-6 text-gray-900">Appointment Details</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <User className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-sm text-gray-500">Patient Name</p>
                  <p className="font-medium text-gray-900">{bookingData.name}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-medium text-gray-900">{bookingData.date}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Clock className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="font-medium text-gray-900">{bookingData.time}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Stethoscope className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-sm text-gray-500">Service</p>
                  <p className="font-medium text-gray-900">{bookingData.service}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Phone className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium text-gray-900">{bookingData.phone}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                <Mail className="w-5 h-5 text-green-500" />
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium text-gray-900">{bookingData.email}</p>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-gray-600 mb-8 text-center">
            <p>A confirmation email has been sent to your email address.</p>
            <p>Please arrive 10 minutes before your scheduled appointment time.</p>
          </div>

          <div className="space-y-4">
            <Button asChild className="w-full">
              <Link to="/">Return to Home</Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookingConfirmation;
