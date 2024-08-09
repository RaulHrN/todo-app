import React from 'react';
import  './App.css';

//components
import { Footer } from './components/footer/footer.component';
import { Header } from './components/header/header.component';
import { TaskForm } from './components/task-form/taskForm.component';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <TaskForm btnText="Create task" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
