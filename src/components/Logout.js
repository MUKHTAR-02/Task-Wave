import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../utils/userSlice';

const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div className="absolute top-5 right-5 sm:top-7 sm:right-7 md:top-8 md:right-10">
            <button 
                onClick={handleLogout} 
                className="px-4 py-2 text-sm sm:text-base bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600 transition-all"
            >
                Logout
            </button>
        </div>
    );
};

export default Logout;
