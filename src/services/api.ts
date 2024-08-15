import axios from 'axios';

import { Task } from '../intefaces/Task';

const API_URL = 'http://localhost/todo-app-api/api.php';

// Fetch all tasks
export const fetchTasks = async (): Promise<Task[]> => {
  try {
    const response = await axios.get<Task[]>(API_URL);
    return response.data;
  } catch (error) {
    console.error('Failed to fetch tasks.', error);
    throw error;
  }
};

// Create a new task
export const createTask = async (task: Task): Promise<string> => {
  try {
    const response = await axios.post(API_URL, task);
    return response.data.message;
  } catch (error) {
    console.error('Failed to create task.', error);
    throw error;
  }
};

// Update an existing task
export const updateTask = async (task: Task): Promise<string> => {
  try {
    const response = await axios.put(API_URL, task);
    return response.data.message;
  } catch (error) {
    console.error('Failed to update task.', error);
    throw error;
  }
};

// Delete a task
export const deleteTask = async (id: number): Promise<string> => {
  try {
    const response = await axios.delete(API_URL, { data: { id } });
    return response.data.message;
  } catch (error) {
    console.error('Failed to delete task.', error);
    throw error;
  }
};
