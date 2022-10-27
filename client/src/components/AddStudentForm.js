import React, { useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function AddStudentForm(props) {
    let EMPTY_FORM = {
        first_name: '',
        last_name: '',
        role: 'student',
        classroom_id: ''
    }

    const navigate = useNavigate();

    let [usersFormData, setUsersFormData] = useState(EMPTY_FORM);

    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;


        setUsersFormData(state => ({
            ...state,
            [name]: value
         }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        // props.addStudentCb(studentsFormData);
        setUsersFormData(EMPTY_FORM);
        navigate(`/`);
    }

    return (
        //upon teacher log-in, classroom_id will be automatically collected
        <div className="AddStudentsForm">
            <form onSubmit={handleSubmit}>
                <label>
                    First Name
                    <input
                        type="text"
                        name="first_name"
                        value={usersFormData.first_name}
                        onChange={e => handleChange(e)}
                    />
                </label>

                <label>
                    Last Name
                    <input
                        type="text"
                        name="last_name"
                        value={usersFormData.last_name}
                        onChange={e => handleChange(e)}
                    />
                </label>

                <button type="submit">Add Student</button>
            </form> 
        </div>
    );
}

export default AddStudentForm;