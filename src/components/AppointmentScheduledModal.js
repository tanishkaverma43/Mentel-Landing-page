import React from "react";
import { X, Check } from "lucide-react";

const AppointmentScheduledModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl px-8 pt-6 pb-8">

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-500 hover:text-gray-800"
        >
          <X size={20} />
        </button>

      
        <h2 className="text-xl font-semibold text-gray-900">
          Booking Confirmation
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Please review you booking details
        </p>

      
        <div className="mt-4 flex items-center gap-3 bg-red-500 text-white text-sm px-4 py-3 rounded-md">
          <div className="flex items-center justify-center w-5 h-5 rounded-full border border-white text-xs font-bold">
            i
          </div>
          <span>
            Your appointment is temporarily reserved. If intake is incomplete
            1 hour before appointment, appointment will be automatically cancelled.
          </span>
        </div>

       
        <div className="flex justify-center mt-10">
          <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">
            <Check className="text-white w-10 h-10" strokeWidth={3} />
          </div>
        </div>

       
        <h3 className="text-center text-xl font-semibold text-[#0F172A] mt-6">
          Appointment Scheduled
        </h3>

       
        <div className="mt-10 flex items-center justify-between relative">

          <div className="absolute left-0 right-0 top-4 h-px bg-gray-200" />

         
          <div className="relative z-10 flex flex-col items-center w-1/3">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
              <Check className="text-white w-4 h-4" />
            </div>
            <p className="mt-2 text-sm font-medium text-gray-900">
              Request Submitted
            </p>
            <p className="text-xs text-gray-400">
              Completed<br />Dec 29, 2025 at 10:30 AM
            </p>
          </div>

         
          <div className="relative z-10 flex flex-col items-center w-1/3">
            <div className="w-8 h-8 rounded-full border-4 border-orange-400 bg-white" />
            <p className="mt-2 text-sm font-medium text-gray-900">
              Intake Form Submission
            </p>
            <p className="text-xs text-gray-400">
              In progress<br />Expected by Dec 31, 2025
            </p>
          </div>

         
          <div className="relative z-10 flex flex-col items-center w-1/3">
            <div className="w-8 h-8 rounded-full bg-gray-200" />
            <p className="mt-2 text-sm font-medium text-gray-900">
              Confirm Booking
            </p>
            <p className="text-xs text-gray-400">
              Pending verification
            </p>
          </div>
        </div>

       
        <div className="mt-10 flex gap-4">
          <button
            onClick={onClose}
            className="w-1/2 py-3 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50"
          >
            Go back to Dashboard
          </button>

          <button className="w-1/2 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700">
            Complete Intake Forms
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentScheduledModal;
