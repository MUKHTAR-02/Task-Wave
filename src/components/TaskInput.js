import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../utils/taskSlice';

const TaskInput = () => {
    const [task, setTask] = useState("");
    const dispatch = useDispatch();

    const handleAddTask = () => {
        if(task.trim() === "") return;
        dispatch(addTask(task));
        setTask("");
    };

    return (
        <div className="bg-white/10 backdrop-blur-lg p-5 rounded-xl shadow-md border border-white/20 w-full mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl text-white text-center font-semibold bg-white/10 p-3 rounded-lg shadow-md mb-4">
                Welcome 👋
            </h2>
            <input 
                type="text" 
                placeholder="Enter New Task" 
                value={task} 
                onChange={(e) => setTask(e.target.value)}
                className="w-full p-2 bg-transparent text-white border-b border-gray-400 focus:outline-none focus:border-blue-300 placeholder-gray-300"
            />
            <button 
                onClick={handleAddTask} 
                className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
            >
                Add Task
            </button>
        </div>
    );
};

export default TaskInput;
