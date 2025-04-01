import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTask } from '../utils/taskSlice';

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    
    return (
        <div className="w-full bg-white/10 backdrop-blur-lg p-5 rounded-xl shadow-md border border-white/20">
            <h2 className="text-2xl font-bold text-white mb-4 text-center">Your Tasks</h2>
            {tasks.length === 0 ? <p className="text-gray-300 text-center">No tasks yet!</p> : null}
            <div className="space-y-3">
                {tasks.map((task, index) => (   
                    <div key={index} className="flex flex-wrap justify-between items-center bg-white/20 p-3 rounded-lg text-white shadow-md border border-white/30">
                        <span className="flex-1 break-words">{task}</span>
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
