import {WeatherInfo} from "../../utils/types";
import {api_key, base_url} from "../../utils/constants.ts";

export const fetchWeather = async (city: string): Promise<WeatherInfo> => {
    const res = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
    if (!res.ok) {
        throw new Error('Failed to fetch weather');
    }
    const data = await res.json();
    return {
        city: data.name,
        country: data.sys.country,
        temp: data.main.temp,
        pressure: data.main.pressure,
        sunset: data.sys.sunset,
    };
};
