import React, { useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';


function AddUserForm(props) {
    let EMPTY_FORM = {
        first_name: '',
        last_name: '',
        role: '',
        classroom_id: ''
    }

    const navigate = useNavigate();

    let [userFormData, setUserFormData] = useState(EMPTY_FORM);
    

    function handleChange(event) {
        const value = event.target.value;
        const name = event.target.name;


        setUserFormData(state => ({
            ...state,
            [name]: value
         }));
    }
    

    function handleSubmit(event) {
        event.preventDefault();
        props.addUserCb(userFormData);
        setUserFormData(EMPTY_FORM);
        navigate(`/classrooms/${userFormData.classroom_id}`);
    }

    return (
        //upon teacher log-in, classroom_id will be automatically collected
        <div className="AddUserForm">
            <form onSubmit={handleSubmit}>
                <label>
                    First Name
                    <input
                        type="text"
                        name="first_name"
                        value={userFormData.first_name}
                        onChange={e => handleChange(e)}
                    />
                </label>

                <label>
                    Last Name
                    <input
                        type="text"
                        name="last_name"
                        value={userFormData.last_name}
                        onChange={e => handleChange(e)}
                    />
                </label>

                <label>
                    Role
                </label>  
                <label> 
                    <input
                        type="radio"
                        name="role"
                        value="teacher"
                        checked={userFormData.role === 'teacher'}
                        onChange={e => handleChange(e)}
                    />
                    Teacher
                </label>
                <label>
                    <input
                        type="radio"
                        name="role"
                        value="student"
                        checked={userFormData.role === 'student'}
                        onChange={e => handleChange(e)}
                    />
                    Student
                </label>

                <label>Classroom</label>
                <select id="classroom" 
                    name="classroom_id" 
                    value={userFormData.classroom_id} 
                    onChange={e => handleChange(e)}>
                    {props.options}
                </select>

                <button type="submit">Add User</button>
            </form> 
        </div>
    );
}

export default AddUserForm;

