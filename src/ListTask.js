// ListTask.js
import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector((state) => {
    const { filter, tasks } = state;
    if (filter === 'done') {
      return tasks.filter((task) => task.isDone);
    } else if (filter === 'notDone') {
      return tasks.filter((task) => !task.isDone);
    } else {
      return tasks;
    }
  });

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
};

export default ListTask;