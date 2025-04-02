import React from "react";
import { useSelector } from "react-redux";
import Logout from "./components/Logout";
import Login from "./components/Login";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import Weather from "./components/Weather";

function App() {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const isUser = useSelector((state) => state.user.user);
  const isPassword = useSelector((state) => state.user.password);

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      {isAuthenticated && isUser && isPassword ? (
        <>
          <Logout />
          <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl p-5">
            <Weather />
            <TaskInput />
            <TaskList />
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
