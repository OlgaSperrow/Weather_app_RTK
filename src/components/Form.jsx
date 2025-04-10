import {useDispatch} from "react-redux";
import {fetchWeather} from "../features/api/asyncWeatherAction.js";

const Form = () => {

    const dispatch = useDispatch();
    const handleGetWeather = e => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
       dispatch(fetchWeather(city));
    }

    return (
        <form onSubmit={handleGetWeather}>
            <input type={"text"} name={"city"}/>
            <button type={"submit"}>Get Weather</button>
        </form>
    );
};

export default Form;