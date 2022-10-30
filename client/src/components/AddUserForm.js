import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function AddUserForm(props) {
    let EMPTY_FORM = {
        first_name: '',
        last_name: '',
        role: '',
        classroom_id: ''
    }

    let [userFormData, setUserFormData] = useState(EMPTY_FORM);
    let [listItems, setListItems] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        let temp = generateListItems()
        setListItems(temp);
        props.getListItemsCb(listItems);
    }, [props.classrooms]); // call whenever classrooms changes

    /* had to create generateListItems() outside rendering statement b/c page was 
    being drawn before classrooms was loaded, so had to create options state and 
    useEffect function to make sure data was available before page was rendered*/
    function generateListItems() {
        return props.classrooms.map((c) => (
            <option className="dropdown-item"
                key={c.id} 
                id="classroom"
                name="classroom_id"
                value={userFormData.classroom_id}
                onClick={e => handleChange(e)}>
                    {c.classroom_name}
            </option>
        ))
    }
    

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
                <label className='radio-button'> 
                    <input
                        className='radio-button-input'
                        type="radio"
                        name="role"
                        value="teacher"
                        checked={userFormData.role === 'teacher'}
                        onChange={e => handleChange(e)}
                    />
                    Teacher
                </label>
                <label className='radio-button'>
                    <input
                        className='radio-button-input'
                        type="radio"
                        name="role"
                        value="student"
                        checked={userFormData.role === 'student'}
                        onChange={e => handleChange(e)}
                    />
                    Student
                </label>

                <div className="dropdown">
                    <label>Select a Classroom</label>
                    <select className="form-select" aria-label="Default select example">
                        {listItems}
                    </select>
                </div>

                <button type="submit" className="btn btn-info">Add User</button>
            </form> 
        </div>
    );
}

export default AddUserForm;

