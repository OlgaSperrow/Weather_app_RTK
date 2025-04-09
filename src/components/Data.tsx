import {useState} from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks.ts";
import {getWeather} from "../features/weather/weatherSlice.ts";
import Form from "./Form.tsx";
import Weather from "./Weather.tsx";


const Data = () => {
    const [_city, setCity] = useState('');
    const dispatch = useAppDispatch();
    const { data, status, error } = useAppSelector((state) => state.weather);

    const handleGetWeather = (city: string) => {
        setCity(city);
        dispatch(getWeather(city));
    };

    return (
        <div>
            <Form onSubmit={handleGetWeather} />
            {status === 'loading' && <p>Loading...</p>}
            {status === 'failed' && <p>{error}</p>}
            {status === 'succeeded' && <Weather weather={data} />}
        </div>
    );
};

export default Data;
