import React from 'react';
import TodoItem from './TaskItem';

function TaskList({ tasks, toggleTask }) {
  return (
    <div>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} />
      ))}
    </div>
  );
}

export default TaskList;
