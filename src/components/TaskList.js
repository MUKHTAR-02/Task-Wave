import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../utils/taskSlice';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    // Define priority order for sorting
    const priorityOrder = {
        High: 1,
        Medium: 2,
        Low: 3
    };

    // Sort tasks by priority
    const sortedTasks = tasks.slice().sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);

    return (
        <div className="w-full bg-white/10 backdrop-blur-lg p-5 rounded-xl shadow-md border border-white/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">Your Tasks</h2>
            {tasks.length === 0 ? <p className="text-gray-300 text-center">No tasks yet!</p> : null}
            <div className="space-y-3">
                {sortedTasks.map((task, index) => (   
                    <div key={index} className="flex flex-wrap justify-between items-center bg-white/20 p-3 rounded-lg text-white shadow-md border border-white/30">
                        <div className="flex-1 break-words">
                            <p>{task.task}</p>
                            <span className={`inline-block px-2 py-1 text-xs rounded-full mt-1 ${task.priority === 'High' ? 'bg-red-500' : task.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'}`}>
                                {task.priority}
                            </span>
                        </div>
                        <button 
                            onClick={() => dispatch(removeTask(index))} 
                            className="bg-red-500 px-3 py-1 rounded-md text-white hover:bg-red-600 transition-all"
                        >
                            🗑
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TaskList;
