// reducers.js
import { ADD_TASK, EDIT_TASK, TOGGLE_TASK, FILTER_TASKS } from './Actions';

const initialState = {
  tasks: [],
  filter: 'all', // 'all', 'done', 'notDone'
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, description: action.payload.description } : task
        ),
      };
    case TOGGLE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case FILTER_TASKS:
      return {
        ...state,
        filter: action.payload.filterType,
      };
    default:
      return state;
  }
};

export default tasksReducer;