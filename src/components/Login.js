import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../utils/userSlice';

const Login = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch(login());
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-10 text-center border border-white/20 w-96">
                <h2 className="text-2xl font-bold text-white mb-4">Task-Wave 📃</h2>
                <button 
                    onClick={handleLogin} 
                    className="px-6 py-2 bg-white/20 text-white rounded-lg shadow-md hover:bg-white/30 transition-all">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
