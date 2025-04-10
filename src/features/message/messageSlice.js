import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/asyncWeatherAction.js";

const messageSlice=createSlice({
    name: 'message',
    initialState: 'Enter city name',
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchWeather.pending, () => 'Loading...')
        .addCase(fetchWeather.fulfilled, () => '')
        .addCase(fetchWeather.rejected, () => 'Enter correct city name')
    }
})
export default messageSlice.reducer