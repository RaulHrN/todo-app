import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';

// Styles
import styles from './taskForm.module.css';

// Interfaces
import { Task } from '../../intefaces/Task';

interface TaskFormProps {
  taskList: Task[];
  setTaskList?: React.Dispatch<React.SetStateAction<Task[]>>;
  btnText: string;
}

export const TaskForm = (props: TaskFormProps) => {
  // States
  const [level, setLevel] = useState<number>(0);
  const [title, setTitle] = useState<string>('');

  // Handlers
  const handleAddTask = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const id = Math.floor(Math.random() * 1000);

    const newTask: Task = { id, title, level };

    if (props.setTaskList) {
      props.setTaskList((prevTaskList) => [...prevTaskList, newTask]);
    } else {
      console.error('setTaskList not defined.');
    }

    setTitle('');
    setLevel(0);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setLevel(parseInt(e.target.value));
    }
  };

  // useEffects
  useEffect(() => {
    console.log('Task list updated:', props.taskList);
  }, [props.taskList]);

  return (
    <form onSubmit={handleAddTask}>
      <div className={styles.form_section}>
        <input type="text" name="title" placeholder="Task title" value={title} onChange={handleChange} />
      </div>
      <div className={styles.form_section}>
        <input
          type="number"
          min="0"
          name="level"
          placeholder="Task level"
          value={level}
          onChange={handleChange}
        />
      </div>
      <input type="submit" className={styles.form_button} value={props.btnText} />
    </form>
  );
};
