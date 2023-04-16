import TextField from "../TextField";
import "./Form.css"

const Form = () => {
    return (
        <section className="form">
            <form>
                <h2>Enter the data to create the card of the collaborator</h2>
                <TextField label="Name" placeholder="Enter your name" />
                <TextField label="Role" placeholder="Enter your role" />
                <TextField label="Image" placeholder="Enter image file path" />
            </form>
        </section>
    )
}

export default Form;