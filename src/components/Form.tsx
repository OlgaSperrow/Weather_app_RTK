type Props = {
    getWeather: (city: string) => void,
}

const Form = ({getWeather}: Props) => {

    const handleGetWeather = e => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        getWeather(city);
    }

    return (
        <form onSubmit={handleGetWeather}>
            <input type={"text"} name={"city"}/>
            <button type={"submit"}>Get Weather</button>
        </form>
    );
};

export default Form;