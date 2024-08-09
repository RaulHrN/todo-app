import React, { useState, useEffect, FormEvent, ChangeEvent } from 'react';

// Styles
import styles from './taskForm.module.css';

// Interfaces
import { Task } from '../../intefaces/Task';

interface TaskFormProps {
  btnText: string;
}

export const TaskForm = (props: TaskFormProps) => {
  // States
  const [id, setId] = useState<number>(0);
  const [difficulty, setDifficulty] = useState<number>(0);
  const [title, setTitle] = useState<string>('');

  // Handlers
  const handleAddTask = () => {};

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'title') {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }

    console.log(`Title: ${title} || Diff: ${difficulty}`)
  };

  return (
    <form onSubmit={handleAddTask}>
      <div className={styles.form_section}>
        <input type="text" name="title" placeholder="Task title" onChange={handleChange} />
      </div>
      <div className={styles.form_section}>
        <input type="text" name="difficulty" placeholder="Task difficulty" onChange={handleChange} />
      </div>
      <input type="submit" value={props.btnText} className={styles.form_button} />
    </form>
  );
};
