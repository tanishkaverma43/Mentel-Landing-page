import React, { useState } from 'react';
import { ArrowLeft, ChevronRight, User } from 'lucide-react';
import ProviderDetailCard from './ProviderDetailCard';
import BookAppointmentCard from './BookAppointmentCard';
import AboutSection from './AboutSection';
import SpecializationsSection from './SpecializationsSection';

const BreadcrumbSection = () => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  return (
    <div className="bg-gray-50 flex-1 overflow-y-auto">
      <div className="bg-slate-100 px-4 sm:px-6 py-3">
        <div className="flex items-center gap-2 text-sm flex-wrap">
          <User size={14} className="text-gray-600" />
          <span className="text-gray-600 hover:text-gray-800 cursor-pointer">Search Practitioner</span>
          <ChevronRight size={16} className="text-gray-600" />
          <User size={14} className="text-gray-600" />
          <span className="text-gray-600 hover:text-gray-800 cursor-pointer">Highly Experienced</span>
          <ChevronRight size={16} className="text-gray-600" />
          <User size={14} className="text-gray-600" />
          <span className="text-gray-800 font-semibold">Provider Details</span>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 py-6 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[95rem] mx-auto">
          <div className="lg:col-span-2">
            <div className="bg-white px-4 sm:px-6 py-1.5 rounded-xl">
              <div className="flex items-center gap-2">
                <ArrowLeft size={20} className="text-gray-700" />
                <span className="text-md font-semibold text-gray-800">Provider Detail</span>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <button 
              className={`w-full px-6 py-2.5 rounded-3xl font-medium text-sm transition-colors ${
                selectedTimeSlot 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-[#6F6F6F] text-white opacity-60 cursor-not-allowed'
              }`}
              disabled={!selectedTimeSlot}
              onClick={() => setIsModalOpen(true)}
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-8 pb-6 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[95rem] mx-auto">
          <div className="lg:col-span-2 space-y-6 -mt-4">
            <ProviderDetailCard />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AboutSection />
              <SpecializationsSection />
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <BookAppointmentCard 
              selectedTimeSlot={selectedTimeSlot}
              setSelectedTimeSlot={setSelectedTimeSlot}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              showSuccessModal={showSuccessModal}
              setShowSuccessModal={setShowSuccessModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbSection;
