import React, { useState } from "react";

const SetCurrentDate = ({ setCurrentDate }) => {
  const today = new Date().toISOString().split("T")[0];
  const [selectedDate, setSelectedDate] = useState(today);

  const handleChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSetCurrentDate = () => {
    setCurrentDate(new Date(selectedDate));
  };

  return (
    <div>
      <h2>Set Current Date</h2>
      <div>
        <label>Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={handleChange}
          max={today}
        />
      </div>
      <button onClick={handleSetCurrentDate}>Set Current Date</button>
    </div>
  );
};

export default SetCurrentDate;
