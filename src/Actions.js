// actions.js
export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const TOGGLE_TASK = 'TOGGLE_TASK';
export const FILTER_TASKS = 'FILTER_TASKS';

export const addTask = (description) => ({
  type: ADD_TASK,
  payload: {
    id: Math.random(), // Generate a random ID (In real scenarios, use a proper ID generator)
    description,
    isDone: false,
  },
});

export const editTask = (id, description) => ({
  type: EDIT_TASK,
  payload: {
    id,
    description,
  },
});

export const toggleTask = (id) => ({
  type: TOGGLE_TASK,
  payload: {
    id,
  },
});

export const filterTasks = (filterType) => ({
  type: FILTER_TASKS,
  payload: {
    filterType,
  },
});