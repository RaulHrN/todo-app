import React, { useState } from 'react';

// Styles
import './App.css';

// Interfaces
import { Task } from './intefaces/Task';

// Components
import { Footer } from './components/footer/footer.component';
import { Header } from './components/header/header.component';
import { TaskForm } from './components/task-form/taskForm.component';
import { TaskCardList } from './components/task-card-list/TaskCardList.component';
import { Modal } from './components/modal/Modal.component';

function App() {
  // States
  const [taskList, setTaskList] = useState<Task[]>([]);

  // Functions
  const EditTask = () => {};

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    )
  }

  return (
      <div className="App">
        <Modal children={<TaskForm btnText='Send'  taskList={taskList}/>}/>
        <Header />
        <main>
          <TaskForm btnText="Create task" taskList={taskList} setTaskList={setTaskList} />
          <TaskCardList taskList={taskList} handleDeleteTask={deleteTask}/>
        </main>
        <Footer />
      </div>
  );
}

export default App;
