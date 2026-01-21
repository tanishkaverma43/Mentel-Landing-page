import React from 'react';
import { 
  MapPin, 
  Clock, 
  Star, 
  Users, 
  Calendar, 
  DollarSign, 
  Heart, 
  Globe, 
  User, 
  Share2, 
  Bookmark,
  Trophy,
  UserCheck
} from 'lucide-react';

const ProviderDetailCard = () => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 lg:p-6">
      <div className="flex flex-col md:flex-row gap-0 mb-6">
        <div className="w-full md:w-[32%] h-56 md:h-auto rounded-2xl overflow-hidden flex-shrink-0 bg-gray-200 shadow-sm">
          <img 
            src="/image.jpg" 
            alt="Dr. Sam Walkfolk" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/400x500?text=Provider+Image';
            }}
          />
        </div>
        
        <div className="flex-1 relative px-5 md:px-6 py-4 md:py-5">
          <div className="absolute top-4 right-4 flex gap-2.5">
            <button className="p-1 hover:bg-gray-100 rounded transition-colors">
              <Share2 size={18} className="text-gray-400" />
            </button>
            <button className="p-1 hover:bg-gray-100 rounded transition-colors">
              <Bookmark size={18} className="text-gray-400" />
            </button>
          </div>
          
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-1.5 pr-16">
            Dr. Sam Walkfolk
          </h2>
          
          <p className="text-blue-500 font-medium text-sm lg:text-base mb-3.5">Clinical Psychologist</p>
          
          <div className="flex items-center gap-5 text-gray-600 mb-4">
            <div className="flex items-center gap-1.5">
              <MapPin size={14} className="text-gray-400" />
              <span className="text-xs text-gray-600">New York, USA</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-gray-400" />
              <span className="text-xs text-gray-600">10 yrs. exp</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2.5 mb-5">
            <div className="flex items-center gap-1.5 bg-yellow-400 text-gray-800 px-2.5 py-1.5 rounded-lg whitespace-nowrap">
              <Star size={13} className="fill-gray-700 text-gray-700" />
              <span className="text-xs font-semibold">5.0</span>
              <span className="text-xs">(127 reviews)</span>
            </div>
            
            <div className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-blue-800 px-2.5 py-1.5 rounded-lg whitespace-nowrap">
              <Trophy size={13} className="text-blue-700" />
              <span className="text-xs font-medium">Top Rated</span>
            </div>
            
            <div className="flex items-center gap-1.5 bg-red-50 border border-red-200 text-red-800 px-2.5 py-1.5 rounded-lg whitespace-nowrap">
              <UserCheck size={13} className="text-red-700" />
              <span className="text-xs font-medium">Most Booked</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-gray-50 rounded-lg p-4 pr-6 flex items-start gap-2">
              <Users size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="flex flex-col min-w-0">
                <span className="text-xs text-gray-600 mb-1.5 whitespace-nowrap">Total Patients</span>
                <p className="text-xl font-bold text-gray-900">1,250</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-2">
              <Calendar size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-600 mb-1.5">Sessions</span>
                <p className="text-xl font-bold text-gray-900">3,450</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-2">
              <DollarSign size={18} className="text-green-500 flex-shrink-0 mt-0.5" />
              <div className="flex flex-col min-w-0">
                <span className="text-xs text-gray-600 mb-1.5 whitespace-nowrap">Hourly Rate</span>
                <p className="text-xl font-bold text-gray-900">$80</p>
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4 flex items-start gap-2">
              <Heart size={18} className="text-pink-400 flex-shrink-0 mt-0.5" />
              <div className="flex flex-col">
                <span className="text-xs text-gray-600 mb-1.5">Satisfaction</span>
                <p className="text-xl font-bold text-gray-900">98%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
            
      <div className="flex flex-wrap items-start gap-14 -mt-6 pl-0 md:pl-[calc(32%+1.5rem)]">
        <div className="flex items-start gap-2">
          <Globe size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
          <div className="flex flex-col">
            <span className="text-xs text-gray-600 mb-1">Languages</span>
            <span className="text-sm font-medium text-gray-900">English, Spanish</span>
          </div>
        </div>
        
        <div className="flex items-start gap-2">
          <User size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
          <div className="flex flex-col">
            <span className="text-xs text-gray-600 mb-1">Gender</span>
            <span className="text-sm font-medium text-gray-900">Male</span>
          </div>
        </div>
        
        <div className="flex items-start gap-2">
          <Calendar size={18} className="text-blue-400 flex-shrink-0 mt-0.5" />
          <div className="flex flex-col">
            <span className="text-xs text-gray-600 mb-1">Next Available</span>
            <span className="text-sm font-medium text-gray-900">Today, 2:30 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetailCard;
