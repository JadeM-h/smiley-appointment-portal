
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">SmileMore Dentist</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <Link to="/services" className="nav-link">Services</Link>
              <Link to="/location" className="nav-link">Location</Link>
              <Link to="/contact" className="nav-link">Contact Us</Link>
              <Button asChild className="bg-green-500 hover:bg-green-600 text-white ml-4">
                <Link to="/book">Book Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
