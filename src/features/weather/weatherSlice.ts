import {WeatherInfo} from "../../utils/types.js";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/asyncWeather.ts";

interface WeatherState {
         data: Partial<WeatherInfo>,
             error: string | null,
        status: 'succeeded' | 'loading' | 'failed'
}

const initialState: WeatherState = {
    data: {},
    error: null,
    status: 'succeeded'
};

export const getWeather = createAsyncThunk(
    'weather/getWeather',
    async (city: string) => {
        const response = await fetchWeather(city);
        return response;
    }
);



const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getWeather.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(getWeather.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(getWeather.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch weather';
            });
    },
});

export default weatherSlice.reducer;

