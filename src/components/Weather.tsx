import {WeatherInfo} from "../utils/types";

interface Props {
    weather: Partial<WeatherInfo>;
}

const Weather = ({ weather }: Props) => {
    return (
        <div className="weather-info">
            <p>Location: {weather.city}, {weather.country}</p>
            <p>Temp: {weather.temp}</p>
            <p>Pressure: {weather.pressure}</p>
            <p>Sunset: {new Date(weather.sunset! * 1000).toLocaleTimeString()}</p>
        </div>
    );
};

export default Weather;
