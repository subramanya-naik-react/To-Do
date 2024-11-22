import { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
function App() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [nav ,setNav] = useState(false);

  const handleInputChange = (event) => {
    setTaskInput(event.target.value);
  };
const sidenav=()=>{
 setNav(!nav)
}
  const handleAddTask = () => {
    if (taskInput.trim() === '') return;
    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput('');
  };

  const handleToggleTask = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="border max-w-[600px] h-[500px] w-full mx-auto mt-10 rounded-2xl shadow-lg bg-white p-6 flex flex-col">
        <p  onClick={sidenav}><IoIosArrowBack/></p>
        {nav ? (
        <p 
          className={` text-[28px] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 text-center bg-gray-100  w-[550px] h-[45px] transition-transform duration-700 ease-in-out z-20  ${
            nav ? "translate-y-0" : "-translate-y-full"
          }`}
        >
         Thank you! for visiting
        </p>
      ) : ''}
        <h1 className="text-[37px] font-bold mb-5 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">To-Do List</h1>
       
        
        <div className="flex mb-4">
          <input
            type="text"
            value={taskInput}
            onChange={handleInputChange}
            placeholder="Add a new task..."
            className="border border-gray-400 rounded-l-3xl p-2 flex-grow focus:outline-none"
          />
          <button
            onClick={handleAddTask}
            className="bg-gradient-to-r from-purple-500 to-pink-400 border border-gray-400 text-white rounded-r-3xl p-4"
          >
            Add Task
          </button>
        </div>
        
        <ul className="flex-grow overflow-y-auto max-h-[350px]">
          {tasks.map(task => (
            <li key={task.id} className="flex justify-between items-center bg-white shadow-md rounded-lg p-3 mb-2 ">
              <div className="flex items-center ">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => handleToggleTask(task.id)}
                  className="mr-4  "
                 
                />
                <span
                  className={`cursor-pointer text-[19px] ${task.completed ? 'line-through text-gray-500' : ''}`}
                >
                  {task.text}
                </span>
              </div>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="bg-black text-white rounded-lg p-2"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
