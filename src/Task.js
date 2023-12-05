// Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask } from './Actions';

const Task = ({ id,
 description , 
 isDone })=> {
  const dispatch = useDispatch();

  const handleEdit = (newDescription) => {
    dispatch(editTask(id , newDescription));
  };

  const handleToggle = () => {
    dispatch(toggleTask(id));
  };

  return (
    <div>
      <input type="checkbox" checked={isDone} onChange={handleToggle} />
      <input
        type="t125"
        value={'Complete assignment'}
        onChange={(e) => handleEdit(e.target.value)}
        disabled={isDone}
      />
    </div>
  );
};

export default Task;