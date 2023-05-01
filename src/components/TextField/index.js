import "./TextField.css";

const TextField = (props) => {
    const placeHolder = `${props.placeholder}...`;

    const onTyped = (event) => {
        props.onChange(event.target.value);
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input
                value={props.value}
                onChange={onTyped}
                required={props.required}
                placeholder={placeHolder}
            />
        </div>
    )
}

export default TextField;