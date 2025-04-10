import {configureStore} from "@reduxjs/toolkit";
import weatherInfo from "../features/weather/weatherSlice.js"
import message from "../features/message/messageSlice.js"


export const store=configureStore({
    reducer: {
        weatherInfo, message
    }
})