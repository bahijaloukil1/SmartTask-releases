import React, { createContext, useContext, useState } from 'react';
import {
  addTaskHelper,
  editTaskHelper,
  toggleTaskHelper,
  deleteTaskHelper
} from '../utils/taskHelpers';

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (data) =>
    setTasks(prev => addTaskHelper(prev, data));

  const updateTask = (id, data) =>
    setTasks(prev => editTaskHelper(prev, id, data));

  const toggleTask = (id) =>
    setTasks(prev => toggleTaskHelper(prev, id));

  const deleteTask = (id) =>
    setTasks(prev => deleteTaskHelper(prev, id));

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, updateTask, toggleTask, deleteTask }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);