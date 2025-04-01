import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk("weather/fetchWeather", async (city, { rejectWithValue }) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
        );
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || "Failed to fetch weather data");
        }

        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const weatherSlice = createSlice({
    name: "weather",
    initialState: { data: null, loading: false, error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.data = null;
            })
            .addCase(fetchWeather.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchWeather.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Something went wrong";
            });
    },
});

export default weatherSlice.reducer;
