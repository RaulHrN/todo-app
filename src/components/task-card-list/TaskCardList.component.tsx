import React from 'react';

// Styles
import styles from './taskCardList.module.css';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';

// Interfaces
import { Task } from '../../intefaces/Task';

interface Props {
  taskList: Task[];
  handleEditTask: (task: Task) => void;
  handleDeleteTask: (id: number) => void;
}

export const TaskCardList = (props: Props) => {

  console.log("Task list: ", props.taskList)
  return (
    <article className={styles.tasks_container}>
      {Array.isArray(props.taskList) && props.taskList.length > 0 ? (
        props.taskList.map((task) => (
          <section key={task.id} className={styles.task_card}>
            <div className={styles.task_card_info}>
              <h3>{task.title}</h3>
              <p>Lvl: {task.level}</p>
            </div>
            <div className={styles.task_card_btns}>
              <IconButton size='small' onClick={() => props.handleEditTask(task)}>
                <EditNoteIcon />
              </IconButton>
              <IconButton size='small' onClick={() =>  {props.handleDeleteTask(task.id)}}>
                <DeleteIcon />
              </IconButton>
            </div>
          </section>
        ))
      ) : (
        <section>No tasks registered.</section>
      )}
    </article>
  );
};
