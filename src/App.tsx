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
import { BasicModal } from './components/modal/Modal.component';

function App() {
  // States
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);

  // Functions
  const EditTask = (task: Task) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      }),
    );

    setIsModalOpen(false);
  };

  // Handlers
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <BasicModal open={isModalOpen} onClose={handleCloseModal}>
        <TaskForm btnText="Send" taskList={taskList} setTaskList={setTaskList} task={currentTask}/>
      </BasicModal>
      <Header />
      <main>
        <TaskForm btnText="Create task" taskList={taskList} setTaskList={setTaskList} />
        <TaskCardList taskList={taskList} handleEditTask={EditTask} handleDeleteTask={deleteTask} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
