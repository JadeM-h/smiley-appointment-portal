
import React from 'react';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Contact />
      </main>
    </div>
  );
};

export default ContactPage;
