import React from "react";
import { X, CheckCircle } from "lucide-react";

const AppointmentScheduledModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-xl rounded-2xl shadow-lg p-6 relative text-center">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        <div className="flex justify-center mb-4">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>

        <h2 className="text-2xl font-semibold mb-2">
          Appointment Scheduled
        </h2>

        <p className="text-gray-500 mb-6">
          Your appointment is temporarily reserved. Please complete intake
          forms to confirm your booking.
        </p>

        {/* Progress */}
        <div className="flex justify-between items-center mb-8 text-sm">
          <div className="text-green-600 font-medium">✔ Request Submitted</div>
          <div className="text-yellow-500 font-medium">● Intake In Progress</div>
          <div className="text-gray-400">○ Confirm Booking</div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-full border border-blue-600 text-blue-600 font-semibold"
          >
            Go back to Dashboard
          </button>

          <button className="w-full py-3 rounded-full bg-blue-600 text-white font-semibold">
            Complete Intake Forms
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentScheduledModal;
