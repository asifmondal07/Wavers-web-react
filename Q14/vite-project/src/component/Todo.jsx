import React,{useState} from 'react'
import { motion } from "framer-motion";
import { Trash2, CheckCircle, Circle } from "lucide-react";

function Todo() {

    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState("")

    const addTask =()=>{
        if(newTask.trim()==="")return;
        const task={
            id:Date.now(),
            text:newTask,
            complete:false,
        }

        setTasks([...tasks,task])
        setNewTask("")
    }


    // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Complete / Incomplete
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );

  };
  return (
     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-4">To-Do App</h1>
        


        {/* Input */}
        <div className="flex mb-4 gap-2">
          <input
            type="text"
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button
            onClick={addTask}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        
        <ul className="space-y-3">
          {tasks.length === 0 && (
            <p className="text-gray-400 text-center">No tasks yet!</p>
          )}
          {tasks.map((task) => (
            <motion.li
              key={task.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="flex items-center justify-between bg-blue-950 p-3 rounded-xl shadow-sm"
            >
              
              <div className="flex items-center gap-2">
                {task.completed ? (
                  <CheckCircle className="text-green-500" />
                ) : (
                  <Circle className="text-gray-400" />
                )}
                <span className={`${
                    task.completed ? "line-through text-gray-400" : "text-amber-50"
                    }`}>
                    {task.text}
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`px-2 py-1 rounded-lg text-sm ${
                    task.completed
                      ? "bg-yellow-400 text-white hover:bg-yellow-500"
                      : "bg-green-500 text-white hover:bg-green-600"
                  }`}
                >
                  {task.completed ? "Undo" : "Done"}
                </button>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 />
                </button>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Todo
