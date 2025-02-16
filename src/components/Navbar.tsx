
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-gray-900">SmileMore Dentist</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/services" className="nav-link">Services</Link>
            <Link to="/blog" className="nav-link">Blog</Link>
            <Link to="/careers" className="nav-link">Careers</Link>
            <Link to="/location" className="nav-link">Location</Link>
            <Link to="/contact" className="nav-link">Contact</Link>
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white ml-4">
              <Link to="/book">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-2">
              <Link to="/services" className="nav-link block py-2">Services</Link>
              <Link to="/blog" className="nav-link block py-2">Blog</Link>
              <Link to="/careers" className="nav-link block py-2">Careers</Link>
              <Link to="/location" className="nav-link block py-2">Location</Link>
              <Link to="/contact" className="nav-link block py-2">Contact</Link>
              <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
                <Link to="/book">Book Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
