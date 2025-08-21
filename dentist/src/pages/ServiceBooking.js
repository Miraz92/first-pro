import React, { useState } from "react";

const ServiceBooking = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const times = [
    "9:00 AM","9:30 AM","10:00 AM","10:30 AM","11:00 AM","11:30 AM",
    "12:00 PM","12:30 PM","1:00 PM","1:30 PM","2:00 PM","2:30 PM",
    "3:00 PM","3:30 PM","4:00 PM","4:30 PM","5:00 PM","5:30 PM"
  ];

  return (
    <div>
      <h2 className="mb-4">Book an Appointment</h2>

      <div className="mb-3">
        <label className="form-label">Service</label>
        <select className="form-select w-50">
          <option>Teeth Whitening</option>
          <option>Braces</option>
          <option>Cleaning</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Doctor</label>
        <select className="form-select w-50">
          <option>Dr. Anika Rahman</option>
          <option>Dr. Kabir Ahmed</option>
        </select>
      </div>

      <h5>Available Times on July 5, 2024</h5>
      <div className="row g-2 my-3">
        {times.map((time) => (
          <div className="col-3" key={time}>
            <button
              className={`btn w-100 ${
                selectedTime === time ? "btn-primary" : "btn-outline-secondary"
              }`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          </div>
        ))}
      </div>

      <button
        className="btn btn-success"
        onClick={() =>
          alert(`Booking confirmed at ${selectedTime || "No time selected"}`)
        }
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default ServiceBooking;
