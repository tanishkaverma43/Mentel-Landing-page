import React from "react";
import { useForm } from "react-hook-form";
import { X, Calendar, Video } from "lucide-react";

const BookingConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  selectedDate,
  selectedTimeSlot,
  getDayName,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      payment: "insurance",
      termsAccepted: false,
    },
  });

  const onSubmit = (data) => {
    onConfirm(data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="relative w-full max-w-3xl bg-white rounded-2xl shadow-xl 
                   max-h-[90vh] flex flex-col"
      >
        
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-400 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        
        <div className="p-6 pb-4 border-b">
          <h2 className="text-xl font-semibold">Booking Confirmation</h2>
          <p className="text-sm text-gray-500">
            Please review your booking details
          </p>
        </div>

        
        <div className="flex-1 overflow-y-auto px-6 py-4">
          
          <div className="flex items-center gap-4 bg-blue-50 p-5 rounded-xl mb-6">
            <img
              src="/image.jpg"
              alt="Doctor"
              className="w-14 h-14 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-lg">Dr. Sam Walkfolk</h3>
              <p className="text-sm text-blue-600">Clinical Psychologist</p>
              <p className="text-sm text-gray-500">
                New York, USA · 10 yrs exp
              </p>
              <p className="text-sm text-yellow-500">
                ★ 5.0 <span className="text-gray-400">(127 reviews)</span>
              </p>
            </div>
          </div>

          
          <h3 className="font-semibold mb-4">Appointment Details</h3>

          <div className="space-y-5 mb-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar size={18} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Date & Time</p>
                <p className="text-sm text-gray-500">
                  {getDayName(selectedDate)}, September {selectedDate}
                </p>
                {selectedTimeSlot && (
                  <p className="text-sm font-semibold text-blue-600 mt-1">
                    {selectedTimeSlot}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Calendar size={18} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Session Type</p>
                <p className="text-sm text-gray-500">
                  Initial Consultation
                </p>
                <p className="text-xs text-gray-400">60 min session</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <Video size={18} className="text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-medium">Session Format</p>
                <p className="text-sm text-gray-500">Online Video Call</p>
                <p className="text-xs text-gray-400">
                  Link will be sent via email
                </p>
              </div>
            </div>
          </div>

          
<h3 className="font-semibold mb-3">Payment Information</h3>

<div className="space-y-4 mb-6">

  
  <label className="flex items-start gap-3 border rounded-xl p-4 cursor-pointer">
    <input
      type="radio"
      value="insurance"
      {...register("payment", { required: "Please select a payment method" })}
      className="mt-1 accent-blue-600"
    />
    <div className="flex-1">
      <p className="text-sm font-medium">Insurance Coverage</p>
      <p className="text-xs text-gray-500">
        Your insurance will be verified. Final cost depends on your coverage and copay
      </p>
    </div>
  </label>

  
  <label className="flex items-start gap-3 border rounded-xl p-4 cursor-pointer">
    <input
      type="radio"
      value="self-pay"
      {...register("payment", { required: "Please select a payment method" })}
      className="mt-1 accent-blue-600"
    />
    <div className="flex-1 flex justify-between">
      <div>
        <p className="text-sm font-medium">Self-Pay</p>
        <p className="text-xs text-blue-600">Estimated Cost</p>
        <p className="text-xs text-gray-500">With insurance coverage</p>
      </div>
      <div className="text-right">
        <p className="text-xs text-red-500 font-medium">To Be Verified</p>
        <p className="text-xs text-gray-500">after eligibility check</p>
      </div>
    </div>
  </label>

</div>

  
<div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
  <p className="text-sm font-medium mb-1">Cancellation Policy</p>
  <p className="text-xs text-gray-600">
    Free cancellation up to 24 hours before your appointment.
    Late cancellations may incur a <span className="font-semibold">$25 fee</span>.
  </p>
  <button type="button" className="text-xs text-blue-600 mt-2 hover:underline">
    Read Full Policy
  </button>
</div>

  
<label className="flex items-start gap-3 text-sm text-gray-600 mb-4">
  <input
    type="checkbox"
    {...register("termsAccepted", {
      required: "You must agree to the terms and conditions",
    })}
    className="mt-1 w-4 h-4 accent-blue-600"
  />
  <span>
    I agree to the{" "}
    <span className="font-medium text-gray-800">
      Terms of Service
    </span>{" "}
    and{" "}
    <span className="font-medium text-gray-800">
      Privacy Policy
    </span>
    . I understand the cancellation policy and consent to Mentel services.
  </span>
</label>
{errors.termsAccepted && (
  <p className="text-xs text-red-500 mb-2">{errors.termsAccepted.message}</p>
)}
{errors.payment && (
  <p className="text-xs text-red-500 mb-2">{errors.payment.message}</p>
)}


        </div>


            
        <div className="p-6 border-t flex gap-4">
          <button
            type="button"
            onClick={onClose}
            className="w-full py-3 rounded-full border border-blue-600 
                       text-blue-600 font-semibold hover:bg-blue-50"
          >
            Cancel
          </button>

          <button
            type="submit"
            className="w-full py-3 rounded-full bg-blue-600 
                       text-white font-semibold hover:bg-blue-700"
          >
            Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingConfirmationModal;
