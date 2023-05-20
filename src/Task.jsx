import React, { useState } from "react";

const Task = ({ taskId, removeTask }) => {
  const [taskName, setTaskName] = useState("");
  const [estimatedHours, setEstimatedHours] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(0);

  const handleRemoveTask = () => {
    removeTask(taskId);
  };

  return (
    <div>
      <h3>Task {taskId}</h3>
      <label>
        Task Name:
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </label>
      <label>
        Estimated Hours:
        <input
          type="number"
          value={estimatedHours}
          onChange={(e) => {
            const newEstimatedHours = Number(e.target.value);
            setEstimatedHours(newEstimatedHours);
            setTimeRemaining(newEstimatedHours);
          }}
        />
      </label>
      <label>
        Time Remaining:
        <input
          type="number"
          value={timeRemaining}
          onChange={(e) => setTimeRemaining(Number(e.target.value))}
        />
      </label>
      <button onClick={handleRemoveTask}>Remove Task</button>
    </div>
  );
};

export default Task;
