import React, { useState } from 'react';
import { ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import './BookAppointmentCard.css';
import BookingConfirmationModal from './BookingConfirmationModal';
import AppointmentScheduledModal from './AppointmentScheduledModal';


const BookAppointmentCard = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date(2022, 8, 1)); // September 2022
  const [selectedDate, setSelectedDate] = useState(20);
  const [hoveredDate, setHoveredDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  // Booked dates (dates with red dots) - matching image: 7, 9, 15, 21, 22, 23, 24
  const bookedDates = [7, 9, 15, 21, 22, 23, 24];
  
  // Available time slots
  const availableTimeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'];
  const unavailableTimeSlots = ['9:30 AM', '10:30 AM', '11:30 AM', '12:30 PM'];
  
  // Get day name for selected date
  const getDayName = (day) => {
    const date = new Date(2022, 8, day);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  };
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  
  // Get first day of month and number of days
  const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const daysInPrevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 0).getDate();
  
  // Generate calendar days
  const calendarDays = [];
  
  // Previous month's trailing days
  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
      isAvailable: false
    });
  }
  
  // Current month's days
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: true,
      isBooked: bookedDates.includes(day)
    });
  }
  
  // Next month's leading days (to fill the grid)
  const remainingDays = 42 - calendarDays.length; // 6 rows * 7 days
  for (let day = 1; day <= remainingDays; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: false,
      isAvailable: false
    });
  }
  
  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  return (
    <div className="book-appointment-wrapper">
      {/* Book Appointment Button - Outside and above container */}
      <button 
        className={`book-appointment-button ${selectedTimeSlot ? 'enabled' : ''}`}
        disabled={!selectedTimeSlot}
        onClick={() => setIsModalOpen(true)}
      >
        Book Appointment
      </button>
      
      {/* Calendar Container */}
      <div className="calendar-container">
        {/* Month Navigation */}
        <div className="calendar-header">
          <h3 className="month-year">
            {monthNames[currentMonth.getMonth()]}, {currentMonth.getFullYear()}
          </h3>
          <button 
            onClick={handleNextMonth}
            className="month-nav-button"
          >
            <ChevronRight size={20} />
          </button>
        </div>
        
        {/* Days of Week Header */}
        <div className="days-of-week">
          {daysOfWeek.map((day) => (
            <div 
              key={day} 
              className="day-header"
            >
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar Grid */}
        <div className="calendar-grid">
          {calendarDays.map((dateInfo, index) => {
            const isSelected = dateInfo.isCurrentMonth && dateInfo.day === selectedDate;
            const isHovered = dateInfo.isCurrentMonth && dateInfo.day === hoveredDate && !isSelected;
            const isBooked = dateInfo.isBooked;
            
            return (
              <div
                key={index}
                onClick={() => dateInfo.isCurrentMonth && setSelectedDate(dateInfo.day)}
                onMouseEnter={() => dateInfo.isCurrentMonth && setHoveredDate(dateInfo.day)}
                onMouseLeave={() => setHoveredDate(null)}
                className={`
                  calendar-day
                  ${!dateInfo.isCurrentMonth ? 'other-month' : ''}
                  ${isSelected ? 'selected' : ''}
                  ${isHovered ? 'hovered' : ''}
                  ${dateInfo.isCurrentMonth ? 'current-month' : ''}
                `}
              >
                {dateInfo.day}
                {isBooked && !isSelected && (
                  <span className="booked-dot"></span>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Booked Legend */}
        <div className="booked-legend">
          <span className="legend-dot"></span>
          <span className="legend-text">Booked</span>
        </div>
        
        {/* Selected Day Details */}
        <div className="selected-day-details">
          <CalendarIcon size={18} className="calendar-icon" />
          <div>
            <p className="selected-date-text">
              {getDayName(selectedDate)} September {selectedDate}
            </p>
            <p className="available-slots-text">6 time slots available</p>
          </div>
        </div>
        
        {/* Time Slots */}
        <div className="time-slots-grid">
          {/* Available Time Slots */}
          {availableTimeSlots.map((time, index) => (
            <button
              key={`available-${index}`}
              className={`time-slot available ${selectedTimeSlot === time ? 'selected' : ''}`}
              onClick={() => setSelectedTimeSlot(time)}
            >
              {time}
            </button>
          ))}
          
          {/* Unavailable Time Slots */}
          {unavailableTimeSlots.map((time, index) => (
            <button
              key={`unavailable-${index}`}
              disabled
              className="time-slot unavailable"
            >
              {time}
            </button>
          ))}
        </div>
      </div>
      
      {/* Booking Confirmation Modal */}
      <BookingConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          setIsModalOpen(false);
          setShowSuccessModal(true);
        }}
        selectedDate={selectedDate}
        selectedTimeSlot={selectedTimeSlot}
        getDayName={getDayName}
      />

<AppointmentScheduledModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </div>
  );
};

export default BookAppointmentCard;
