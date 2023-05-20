import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TeamMember from "./TeamMember";
import SetCurrentDate from "./SetCurrentDate";

const TeamManager = () => {
  const today = new Date();
  const [teamMembers, setTeamMembers] = useState([]);
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(
    new Date(today.getTime() + 24 * 60 * 60 * 1000)
  );
  const [currentDate, setCurrentDate] = useState(today);

  const addTeamMember = () => {
    setTeamMembers([...teamMembers, { id: Date.now() }]);
  };

  const removeTeamMember = (id) => {
    setTeamMembers(teamMembers.filter((member) => member.id !== id));
  };

  return (
    <div>
      <h1>Team Manager</h1>
      <div>
        <label>Start Date:</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          dateFormat="dd/MM/yyyy"
          minDate={today}
        />
      </div>
      <div>
        <label>End Date:</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          dateFormat="dd/MM/yyyy"
          minDate={startDate}
        />
      </div>
      <SetCurrentDate setCurrentDate={setCurrentDate} />
      <button onClick={addTeamMember}>Add Team Member</button>
      {teamMembers.map((member) => (
        <TeamMember
          key={member.id}
          memberId={member.id}
          removeTeamMember={removeTeamMember}
          startDate={startDate}
          endDate={endDate}
          currentDate={currentDate}
        />
      ))}
    </div>
  );
};

export default TeamManager;
