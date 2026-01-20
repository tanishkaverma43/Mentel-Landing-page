import React from "react";
import { X, Calendar } from "lucide-react";

const BookingConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  selectedDate,
  selectedTimeSlot,
  getDayName,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-lg p-6 relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X />
        </button>

        <h2 className="text-xl font-semibold">Booking Confirmation</h2>
        <p className="text-sm text-gray-500 mb-4">
          Please review your booking details
        </p>

        <div className="flex items-center gap-4 bg-blue-50 p-4 rounded-xl mb-6">
          <img
            src="/image.jpg"
            alt="doctor"
            className="w-16 h-16 rounded-full"
          />
          <div>
            <h3 className="font-semibold text-lg">Dr. Sam Walkfolk</h3>
            <p className="text-sm text-blue-600">Clinical Psychologist</p>
            <p className="text-sm text-gray-500">
              New York, USA · 10 yrs exp
            </p>
            <p className="text-sm text-yellow-500">★ 5.0 (127 reviews)</p>
          </div>
        </div>

        <h3 className="font-semibold mb-3">Appointment Details</h3>

        <div className="space-y-4 mb-6">
          <div className="flex gap-3">
            <Calendar className="text-blue-600" />
            <div>
              <p className="font-medium">Date & Time</p>
              <p className="text-sm text-gray-500">
                {getDayName(selectedDate)} September {selectedDate}
              </p>
              {selectedTimeSlot && (
                <p className="text-base font-semibold text-blue-600 mt-1">
                  {selectedTimeSlot}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="w-full py-3 rounded-full border border-blue-600 text-blue-600 font-semibold"
          >
            Cancel
          </button>
          <button
  onClick={onConfirm}
  className="w-full py-3 rounded-full bg-blue-600 text-white font-semibold"
>
  Confirm Booking
</button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmationModal;
