import React from 'react';
import { Bell } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      {/* Search input on the left */}
      <input
        type="text"
        placeholder="Search Practitioner"
        className="text-gray-600 placeholder-gray-600 bg-transparent border-0 outline-none focus:outline-none focus:ring-0 focus:border-0 text-base flex-1 max-w-md p-0"
        style={{ boxShadow: 'none', WebkitAppearance: 'none' }}
      />
      
      {/* Right side: Bell icon, separator, and user profile */}
      <div className="flex items-center gap-4">
        {/* Bell icon */}
        <button className="p-0 hover:bg-transparent">
          <Bell size={20} className="text-gray-700" />
        </button>
        
        {/* Vertical separator */}
        <div className="h-6 w-px bg-gray-300"></div>
        
        {/* User profile */}
        <div className="flex items-center gap-3">
          {/* User avatar */}
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <svg 
              className="w-6 h-6 text-blue-400" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </div>
          
          {/* Welcome text and name - stacked vertically */}
          <div className="flex flex-col">
            <span className="text-sm text-blue-400 leading-tight">Welcome</span>
            <span className="text-base font-medium text-gray-700 leading-tight">Darek</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
