import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom';
import { useHistory} from 'react-router-dom';



const AddContact = ({ addContact, setIsEditMode, isEditMode, isForm }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history = useHistory();
    // const text="Add";

    // const [name, setName] = useState(isEditMode ? isForm.name : '');
    // const [email, setEmail] = useState(isEditMode ? isForm.email : '');
    const handleSubmit = (event) => {
        event.preventDefault();
        if (name.trim() && email.trim()) {
            addContact({ name, email });
            setName("");
            setEmail("");
            setIsEditMode(false);
            history.push("/");

        }
        // console.log("name:", name);
        // console.log("email:", email);
        // console.log("isEditMode:", isEditMode);
        // console.log("isForm:", isForm);

    };
    useEffect(() => {
        if (isEditMode) {
            setName(isForm.name);
            setEmail(isForm.email);
        }
    }, [isForm, isEditMode])

    const buttonText = isEditMode ? "Update" : "Add";

    return (
        <div className='ui main'>
            <h2 style={{ marginTop: "30px" }}>Add Contact</h2>
            <form className='ui form' onSubmit={handleSubmit}>
                <div className='field'>
                    <label>Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='field'>
                    <label>Email</label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                   </div>
                <button type="submit" className='ui button blue'>{buttonText}</button>
                {/* <Link to="/
                " className='ui button'>Cancel</Link> */}
            </form>
        </div>
    )
}

export default AddContact
