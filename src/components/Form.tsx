import {FormEvent} from "react";

interface Props {
    onSubmit: (city: string) => void;
}

const Form = ({ onSubmit }: Props) => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        onSubmit(city);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="city" placeholder="Enter city" />
            <button type="submit">Get Weather</button>
        </form>
    );
};

export default Form;
