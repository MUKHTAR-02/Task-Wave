import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../utils/weatherSlice";

const Weather = () => {
    const [city, setCity] = useState("Delhi");
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.weather);

    const handleFetchWeather = () => {
        if (!city.trim()) return; 
        dispatch(fetchWeather(city));
    };

    return (
        <div className="bg-white/10 backdrop-blur-lg p-5 rounded-xl shadow-md border border-white/20 w-full mb-4 min-h-[120px] transition-all duration-300">
            <h2 className="text-xl font-bold text-white mb-2">Weather</h2>

            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-2">
                <input
                    type="text"
                    placeholder="Enter city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="flex-1 p-2 bg-transparent text-white border-b border-gray-400 focus:outline-none focus:border-blue-300 placeholder-gray-300"
                />
                <button
                    onClick={handleFetchWeather}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all sm:w-auto"
                >
                    Show Weather
                </button>
            </div>

            <div className="mt-3 text-white min-h-[50px]">
                {loading && <p className="text-gray-300">Loading...</p>}
                
                {error && (
                    <p className="text-red-500 bg-red-800/20 p-3 rounded-md border border-red-500 mt-2 text-sm truncate">
                        ⚠️ {error}
                    </p>
                )}

                {data && (
                    <div>
                        <p>🌍 City: {data.name}</p>
                        <p>🌡 Temperature: {data.main.temp}°C</p>
                        <p>☁️ Condition: {data.weather[0].description}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Weather;
