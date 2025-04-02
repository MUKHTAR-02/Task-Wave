import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../utils/userSlice';

const Login = () => {
    const dispatch = useDispatch();
    const nameRef = useRef(null);
    const passwordRef = useRef(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const handleLogin = () => {
        const name = nameRef.current.value;
        const password = passwordRef.current.value;

        if(name || password === "") {
            setErrorMsg("Please Enter the required details");
        }
        
        dispatch(login({name: name, password: password}));
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-10 text-center border border-white/20 w-96">
                <h2 className="text-2xl font-bold text-white mb-4">Task-Wave 📃</h2>

                <form onSubmit={(e) => e.preventDefault()} className='flex flex-col'>
                    <input type='text' placeholder='Enter Name' ref={nameRef} className='p-2 rounded-lg mb-2'/>
                    <input type='password' placeholder='Enter Password' ref={passwordRef} className='p-2 rounded-lg mb-2'/>
                    <p className='text-red-600 font-bold'>
                    {errorMsg}
                    </p>
                    <button
                        onClick={handleLogin}
                        className="px-6 py-2 w-1/3 place-self-center bg-white/20 text-white rounded-lg shadow-md hover:bg-white/30 transition-all">
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
