import { useState } from "react";
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

    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [image, setImage] = useState("");
    const [team, setTeam] = useState("");

    const onSave = (event) => {
        event.preventDefault();
        console.log("Foi submetido", name, role, image, team);
    }


    return (
        <section className="form">
            <form onSubmit={onSave}>
                <h2>Enter the data to create the collaborator card</h2>
                <TextField 
                    required={true}
                    label="Name" 
                    placeholder="Enter your name"
                    value={name}
                    onChange={setName}
                />
                <TextField
                    required = {true}
                    label="Role"
                    placeholder="Enter your role" 
                    value={role}
                    onChange={setRole}
                />
                <TextField
                    label="Image"
                    placeholder="Enter image file path"
                    value={image}
                    onChange={setImage}
                />
                <Dropdown
                    required={true}
                    label="Teams" 
                    items={teams}
                    value={team}
                    onChange={setTeam}
                />
                <Button>Create Card</Button>
            </form>
        </section>
    )
}

export default Form;