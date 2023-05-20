import React, { useState, useEffect } from "react";
import Task from "./Task";

const TeamMember = ({
  memberId,
  removeTeamMember,
  startDate,
  endDate,
  currentDate,
}) => {
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    setTasks([...tasks, { id: Date.now(), estimatedHours: 16 }]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const calculateTimeRemaining = (estimatedHours) => {
    if (!startDate || !endDate || !currentDate || !estimatedHours) {
      return 0;
    }

    const diffInDays =
      Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    const totalWorkingHours = diffInDays * 8;
    const elapsedDays =
      Math.floor((currentDate - startDate) / (1000 * 60 * 60 * 24)) + 1;
    const elapsedHours = elapsedDays * 8;
    const remainingHours = estimatedHours - elapsedHours;

    return remainingHours >= 0 ? remainingHours : 0;
  };

  useEffect(() => {
    setTasks(
      tasks.map((task) => ({
        ...task,
        timeRemaining: calculateTimeRemaining(task.estimatedHours),
      }))
    );
  }, [startDate, endDate, currentDate]);

  return (
    <div>
      <h2>Team Member {memberId}</h2>
      <button onClick={() => removeTeamMember(memberId)}>Remove Member</button>
      <button onClick={addTask}>Add Task</button>
      {tasks.map((task) => (
        <div key={task.id}>
          <Task taskId={task.id} removeTask={removeTask} />
          <p>Time Remaining: {task.timeRemaining} hours</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMember;
