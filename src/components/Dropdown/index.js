import "./Dropdown.css";

const Dropdown = (props) => {
    return (
        <div className="dropdown">
            <label>{props.label}</label>
            <select 
                required={props.required}
                value={props.value} 
                onChange={event => props.onChange(event.target.value)}
            >
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default Dropdown;