import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import ProviderDetailCard from './ProviderDetailCard';
import BookAppointmentCard from './BookAppointmentCard';
import AboutSection from './AboutSection';
import SpecializationsSection from './SpecializationsSection';

const BreadcrumbSection = () => {
  return (
    <div className="bg-gray-50 flex-1 overflow-y-auto">
      {/* Breadcrumb Navigation */}
      <div className="bg-slate-100 px-4 sm:px-6 py-3">
        <div className="flex items-center gap-2 text-sm flex-wrap">
          <span className="text-gray-600 hover:text-gray-800 cursor-pointer">Search Practitioner</span>
          <ChevronRight size={16} className="text-gray-600" />
          <span className="text-gray-600 hover:text-gray-800 cursor-pointer">Highly Experienced</span>
          <ChevronRight size={16} className="text-gray-600" />
          <span className="text-gray-800 font-semibold">Provider Details</span>
        </div>
      </div>

      {/* Page Title Section */}
      <div className="bg-white px-4 sm:px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <ArrowLeft size={20} className="text-gray-700" />
          <span className="text-lg font-semibold text-gray-800">Provider Detail</span>
        </div>
      </div>

      {/* Main Content Area - Two Column Layout */}
      <div className="px-4 sm:px-6 lg:px-8 py-6 bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-[95rem] mx-auto">
          {/* Left Column - Provider Detail Card and Additional Sections (2/3 width on large screens) */}
          <div className="lg:col-span-2 space-y-6">
            <ProviderDetailCard />
            
            {/* About and Specializations - Side by Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AboutSection />
              <SpecializationsSection />
            </div>
          </div>
          
          {/* Right Column - Book Appointment Card (1/3 width on large screens) */}
          <div className="lg:col-span-1">
            <BookAppointmentCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbSection;
