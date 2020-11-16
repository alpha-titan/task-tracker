import './App.css';
import AddTaskForm from './components/contents/AddTaskForm';
import TaskDetails from './components/contents/TaskDetails';
import TodoList from './components/contents/TodoList';
import Navbar from './components/Navbar';
import TodoContextProvider from './contexts/todocontext';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <TodoContextProvider>
        <TodoList />
        <AddTaskForm />
      </TodoContextProvider>
    </div>
  );
}

export default App;
