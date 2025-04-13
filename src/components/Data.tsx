import Form from "./Form.tsx";
import Weather from "./Weather.tsx";
import {useState} from "react";
import {api_key, base_url} from "../utils/constants.ts";
import {WeatherData} from "../utils/types";

const Data = () => {
    const [weatherInfo, setWeatherInfo] = useState<Partial<WeatherData>>({});
    const [message, setMessage] = useState('Enter city name');

    const getWeather =  (city: string) => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(res => res.json())
            .then(data => {
                setWeatherInfo({
                    city: data.name,
                    country: data.sys.country,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: data.sys.sunset
                });
                setMessage('');
            })
            .catch(() => setMessage('Enter correct city name'));
    }

    return (
        <div>
            <Form getWeather={getWeather}/>
            <Weather weather={weatherInfo} message={message}/>
        </div>
    );
};

export default Data;