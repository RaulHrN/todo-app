import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { createTask, updateTask } from 'src/services/api';

// Styles
import styles from './taskForm.module.css';
import { Button } from '@mui/material';

// Interfaces
import { Task } from '../../intefaces/Task';

interface TaskFormProps {
  taskList: Task[];
  setTaskList?: React.Dispatch<React.SetStateAction<Task[]>>;
  task?: Task | null;
  btnText: string;
}

export const TaskForm = (props: TaskFormProps) => {
  // States
  const [level, setLevel] = useState<number>(0);
  const [title, setTitle] = useState<string>('');

  // Handlers
  const handleAddTask = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask: Task = { id: props.task ? props.task.id : Math.floor(Math.random() * 1000), title, level };

    if (props.task) {
      await updateTask(newTask)
        .then(() => {
          if (props.setTaskList) {
            props.setTaskList((prevTaskList) => prevTaskList.map((task) => (task.id === newTask.id ? newTask : task)));
          }
        })
        .catch(console.error);
    } else {
      await createTask(newTask)
        .then(() => {
          if (props.setTaskList) {
            props.setTaskList((prevTaskList) => [...prevTaskList, newTask]);
          }
        })
        .catch(console.error);
    }

    setTitle('');
    setLevel(0);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setTitle(value);
    } else {
      setLevel(parseInt(value));
    }
  };

  // Effects
  useEffect(() => {
    if (props.task) {
      setTitle(props.task.title);
      setLevel(props.task.level);
    }
  }, [props.task]);

  return (
    <form onSubmit={handleAddTask}>
      <div className={styles.form_section}>
        <input type="text" name="title" placeholder="Task title" value={title} onChange={handleChange} />
      </div>
      <div className={styles.form_section}>
        <input type="number" min="0" name="level" placeholder="Task level" value={level} onChange={handleChange} />
      </div>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!title || level <= 0}
        className={styles.form_button}
      >
        {props.btnText}
      </Button>
    </form>
  );
};
