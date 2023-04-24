import Button from "../Button";
import Dropdown from "../Dropdown";
import TextField from "../TextField";
import "./Form.css"

const Form = () => {

    const teams = [
        "Programming",
        "Front End",
        "Data Science",
        "DevOps",
        "UX and Design",
        "Mobile",
        "Innovation and Management"
    ]

    return (
        <section className="form">
            <form>
                <h2>Enter the data to create the collaborator card</h2>
                <TextField label="Name" placeholder="Enter your name" />
                <TextField label="Role" placeholder="Enter your role" />
                <TextField label="Image" placeholder="Enter image file path" />
                <Dropdown label="Teams" items={teams}/>
                <Button>Create Card</Button>
            </form>
        </section>
    )
}

export default Form;