import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookDemoModal } from './components/BookDemoModal';
import Home1 from './pages/Home1';

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemo = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FB] text-[#353F4F] font-sans antialiased">
      {/* Top Header Navigation */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Content Area */}
      <main className="flex-1">
        <Home1 onOpenDemo={handleOpenDemo} />
      </main>

      {/* Enterprise Footer */}
      <Footer />

      {/* Interactive Demo / Sandbox Booking Modal */}
   
    </div>
  );
}